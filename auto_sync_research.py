import json
import os
import re
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone

TODAY = datetime.now(timezone.utc).strftime("%Y-%m-%d")

# Tight, mobile-repair-only queries (with negative keywords to block TV stands/furniture)
RESEARCH_TRACKS = {
    "LCD_AND_COMBO_COMPATIBILITY": [
        '"LCD" OR "display" smartphone replacement compatibility -tv -monitor -stand',
        'realme OR oppo OR vivo OR redmi display screen replacement repair 2026 -tv',
        'samsung OR infinix OR tecno smartphone screen replacement repair -tv -stand'
    ],
    "TEMPERED_GLASS_AND_OCA": [
        '"screen protector" smartphone iphone OR samsung OR pixel 2026 -tv -stand -furniture',
        '"tempered glass" "screen protector" phone compatibility -tv -stand -table -desk',
        'smartphone "OCA" OR "front glass" screen refurbishment repair -tv'
    ],
    "BATTERY_AND_IC_COMPATIBILITY": [
        'smartphone battery replacement iphone OR samsung OR xiaomi 2026 -car -ev -laptop',
        'mobile phone repair "PMIC" OR "charging IC" OR "eMMC" OR "motherboard" -tv'
    ],
    "FLEX_CC_BOARD_AND_PARTS": [
        'smartphone "charging port" OR "USB-C" flex replacement repair -tv -laptop',
        'iFixit OR smartphone teardown spare parts repairability 2026 -tv -laptop'
    ],
    "PANIC_LOG_AND_HARD_RESET": [
        'iphone "panic" OR "restart" OR "bootloop" repair fix',
        'android "recovery mode" OR "factory reset" samsung OR xiaomi OR pixel 2026'
    ]
}

# Strict blocklist to reject non-mobile junk (TV stands, furniture, cars, spam blogs)
BLOCKLIST_WORDS = [
    "tv stand", "swivel", "furniture", "coffee table", "dining", "cabinet", "shelf",
    "wall mount", "pixelfy", "windshield", "shower door", "aquarium", "fireplace",
    "kitchen", "oven", "microwave", "refrigerator", "electric vehicle", "tesla",
    "car battery", "laptop", "macbook", "smartwatch band", "gaming chair", "desk"
]

# Every headline must contain at least one mobile/repair keyword
MOBILE_KEYWORDS = [
    "phone", "smartphone", "iphone", "samsung", "galaxy", "xiaomi", "redmi", "poco",
    "oppo", "realme", "vivo", "iqoo", "infinix", "tecno", "itel", "pixel", "oneplus",
    "honor", "huawei", "motorola", "moto", "nokia", "nothing", "ipad", "android", "ios",
    "screen protector", "lcd", "oled", "amoled", "display", "battery", "charging",
    "teardown", "ifixit", "repair", "reset", "recovery", "panic", "ic", "pmic", "emmc", "nand"
]

def is_valid_mobile_lead(headline):
    low = (headline or "").lower()
    if any(bad in low for bad in BLOCKLIST_WORDS):
        return False
    if not any(kw in low for kw in MOBILE_KEYWORDS):
        return False
    return True

def fetch_google_news_rss(query, limit=4):
    encoded = urllib.parse.quote(query)
    url = f"https://news.google.com/rss/search?q={encoded}&hl=en-US&gl=US&ceid=US:en"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 MobiMatchPro-Bot/1.0"})
    items = []
    try:
        with urllib.request.urlopen(req, timeout=12) as resp:
            xml_data = resp.read()
        root = ET.fromstring(xml_data)
        for item in root.findall("./channel/item"):
            title = (item.findtext("title") or "").strip()
            link = (item.findtext("link") or "").strip()
            pub = (item.findtext("pubDate") or "").strip()
            if title and is_valid_mobile_lead(title):
                items.append({
                    "headline": title,
                    "source": link,
                    "published": pub,
                    "query": query
                })
                if len(items) >= limit:
                    break
    except Exception as e:
        print(f"Warning: failed query '{query}': {e}")
    return items

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
    feature_research = {}
    seen_titles = set()
    total_leads = 0

    for category, queries in RESEARCH_TRACKS.items():
        cat_leads = []
        for q in queries:
            for entry in fetch_google_news_rss(q, limit=4):
                norm = entry["headline"].lower().strip()
                if norm not in seen_titles:
                    seen_titles.add(norm)
                    cat_leads.append(entry)
        feature_research[category] = cat_leads[:6]
        total_leads += len(feature_research[category])

    payload = {
        "last_sync": TODAY,
        "total_leads": total_leads,
        "feature_research": feature_research
    }

    with open("research-drafts.json", "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)

    update_sitemap_dates()
    print(f"Saved {total_leads} filtered mobile-only leads to research-drafts.json")

if __name__ == "__main__":
    main()
