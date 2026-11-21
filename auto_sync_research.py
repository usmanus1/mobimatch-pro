import json
import os
import re
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone

TODAY = datetime.now(timezone.utc).strftime("%Y-%m-%d")

VERIFIED_FEEDS = {
    "IFIXIT_TEARDOWNS_AND_GUIDES": [
        ("iFixit News & Teardowns", "https://www.ifixit.com/News/rss", "VERIFIED_AUTHORITY"),
    ],
    "GSMARENA_NEW_MODELS_2026": [
        ("GSMArena New Devices & Specs", "https://www.gsmarena.com/rss-news-reviews.php3", "VERIFIED_SPECS"),
    ],
    "XDA_AND_RECOVERY_MODES": [
        ("XDA Developers Mobile", "https://www.xda-developers.com/feed/", "VERIFIED_TECH"),
    ],
    "REDDIT_MOBILE_REPAIR_COMMUNITY": [
        ("Reddit r/mobilerepair", "https://www.reddit.com/r/mobilerepair/new/.rss", "COMMUNITY_BENCH"),
        ("Reddit r/phonerepair", "https://www.reddit.com/r/phonerepair/new/.rss", "COMMUNITY_BENCH"),
        ("Reddit r/microsoldering", "https://www.reddit.com/r/microsoldering/new/.rss", "COMMUNITY_BENCH"),
    ],
    "YOUTUBE_REPAIR_CHANNELS": [
        ("iFixit YouTube", "https://www.youtube.com/feeds/videos.xml?channel_id=UCHSC4JjgQpgiyZos2Mgjp_w", "VIDEO_REPAIR"),
        ("JerryRigEverything", "https://www.youtube.com/feeds/videos.xml?channel_id=UCWFKCr40YwOZQx8FHU_ZqqQ", "VIDEO_TEARDOWN"),
    ]
}

REPAIR_KEYWORDS = [
    "lcd", "oled", "amoled", "display", "screen", "combo", "folder", "stencil",
    "tempered glass", "screen protector", "oca", "digitizer", "touch",
    "battery", "charging", "cc board", "sub board", "usb-c", "port", "jack",
    "flex", "btb", "connector", "ic", "pmic", "emmc", "nand", "ufs", "short",
    "panic", "bootloop", "restart", "hard reset", "recovery", "fastboot", "dfu",
    "teardown", "repair", "replacement", "compatible", "compatibility", "swap",
    "samsung", "galaxy", "iphone", "xiaomi", "redmi", "poco", "realme", "oppo",
    "vivo", "iqoo", "infinix", "tecno", "itel", "pixel", "oneplus", "honor", "moto"
]

BLOCKLIST = [
    "tv stand", "furniture", "deal", "discount", "coupon", "giveaway", "wallpaper",
    "watch band", "smartwatch", "earbuds", "headphone", "laptop", "macbook", "pc build",
    "gaming chair", "car ", "tesla", "ev ", "netflix", "movie", "game pass"
]

def load_existing_database_index():
    existing_tokens = set()
    existing_titles = set()
    for fname in ("database-parts.js", "database-board.js"):
        if not os.path.exists(fname):
            continue
        with open(fname, "r", encoding="utf-8", errors="ignore") as f:
            text = f.read()
        for m in re.findall(r'"title"\s*:\s*"([^"]+)"', text):
            existing_titles.add(m.strip().lower()[:60])
        for code in re.findall(r'\b(?:GH\d{2}-[A-Z0-9]+|EB-B[A-Z0-9]+|BLP[A-Z0-9-]+|BN\d[A-Z0-9]+|BM\d[A-Z0-9]+|SK[0-9A-Z-]+|MT63\d{2}[A-Z]*|PM\d{4}[A-Z]*|SM-[A-Z0-9]+|RMX\d{4}|CPH\d{4}|SAP\s*\d{8})\b', text):
            existing_tokens.add(code.upper())
    return existing_titles, existing_tokens

def is_duplicate(headline, existing_titles, existing_tokens):
    low = (headline or "").strip().lower()
    if low[:60] in existing_titles:
        return True
    codes = re.findall(r'\b(?:GH\d{2}-[A-Z0-9]+|EB-B[A-Z0-9]+|BLP[A-Z0-9-]+|BN\d[A-Z0-9]+|BM\d[A-Z0-9]+|SK[0-9A-Z-]+|MT63\d{2}[A-Z]*|PM\d{4}[A-Z]*|SM-[A-Z0-9]+|RMX\d{4}|CPH\d{4})\b', headline.upper())
    if codes and all(c in existing_tokens for c in codes):
        return True
    return False

def is_relevant_lead(headline):
    low = (headline or "").lower()
    if any(b in low for b in BLOCKLIST):
        return False
    return any(k in low for k in REPAIR_KEYWORDS)

def fetch_feed(url, source_name, trust_badge, existing_titles, existing_tokens, limit=5):
    req = urllib.request.Request(
        url,
        headers={"User-Agent": "Mozilla/5.0 (compatible; MobiMatchProBot/2.0; +https://www.mobimatchpro.com)"}
    )
    results = []
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            xml_data = resp.read()
        root = ET.fromstring(xml_data)

        entries = root.findall(".//item")
        is_atom = False
        if not entries:
            ns = {"atom": "http://www.w3.org/2005/Atom"}
            entries = root.findall(".//atom:entry", ns)
            is_atom = True

        for entry in entries:
            if is_atom:
                ns = {"atom": "http://www.w3.org/2005/Atom"}
                title = (entry.findtext("atom:title", default="", namespaces=ns) or "").strip()
                link_el = entry.find("atom:link", ns)
                link = (link_el.attrib.get("href", "") if link_el is not None else "").strip()
                pub = (entry.findtext("atom:updated", default="", namespaces=ns) or
                       entry.findtext("atom:published", default="", namespaces=ns) or "").strip()
            else:
                title = (entry.findtext("title") or "").strip()
                link = (entry.findtext("link") or "").strip()
                pub = (entry.findtext("pubDate") or "").strip()

            if not title or not is_relevant_lead(title) or is_duplicate(title, existing_titles, existing_tokens):
                continue

            results.append({
                "headline": f"[{source_name}] {title}",
                "source": link,
                "published": pub,
                "verification": trust_badge
            })
            if len(results) >= limit:
                break
    except Exception as e:
        print(f"Warning: skipped {source_name} ({url}): {e}")
    return results

def update_sitemap_dates():
    if not os.path.exists("sitemap.xml"):
        return
    with open("sitemap.xml", "r", encoding="utf-8") as f:
        content = f.read()
    updated = re.sub(r"<lastmod>[^<]+</lastmod>", f"<lastmod>{TODAY}</lastmod>", content)
    with open("sitemap.xml", "w", encoding="utf-8") as f:
        f.write(updated)
    print(f"Updated sitemap.xml lastmod to {TODAY}")

def main():
    existing_titles, existing_tokens = load_existing_database_index()
    print(f"Loaded deduplication index: {len(existing_titles)} titles, {len(existing_tokens)} part/model codes.")

    feature_research = {}
    seen_headlines = set()
    total_leads = 0

    for category, feeds in VERIFIED_FEEDS.items():
        cat_leads = []
        for source_name, url, badge in feeds:
            for item in fetch_feed(url, source_name, badge, existing_titles, existing_tokens, limit=4):
                norm = item["headline"].lower().strip()
                if norm not in seen_headlines:
                    seen_headlines.add(norm)
                    cat_leads.append(item)
        feature_research[category] = cat_leads[:6]
        total_leads += len(feature_research[category])

    payload = {
        "last_sync": TODAY,
        "total_leads": total_leads,
        "dedup_checked_codes": len(existing_tokens),
        "feature_research": feature_research
    }

    with open("research-drafts.json", "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)

    update_sitemap_dates()
    print(f"Saved {total_leads} verified, non-duplicate leads to research-drafts.json")

if __name__ == "__main__":
    main()
