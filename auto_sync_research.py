import json
import os
import re
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone

TODAY = datetime.now(timezone.utc).strftime("%Y-%m-%d")

# Compatibility-focused research tracks for mobile repair technicians
RESEARCH_TRACKS = {
    "LCD_AND_COMBO_COMPATIBILITY": [
        "universal lcd combo compatibility list smartphone 2026",
        "realme oppo vivo display folder compatibility stencil",
        "samsung redmi infinix tecno universal lcd combo match"
    ],
    "TEMPERED_GLASS_AND_OCA": [
        "universal tempered glass compatibility chart 2026",
        "waterdrop no cut tempered glass match samsung vivo oppo"
    ],
    "BATTERY_AND_IC_COMPATIBILITY": [
        "mobile battery compatibility model code BLP BN EB-BA",
        "smartphone pmic charging ic emmc compatibility list"
    ],
    "FLEX_CC_BOARD_AND_PARTS": [
        "mobile charging sub board cc board flex compatibility",
        "smartphone teardown repair spare parts compatibility"
    ],
    "PANIC_LOG_AND_HARD_RESET": [
        "iphone panic full thermalmonitord fix repair",
        "android recovery mode hard reset samsung xiaomi 2026"
    ]
}

def fetch_google_news_rss(query, limit=3):
    encoded = urllib.parse.quote(query)
    url = f"https://news.google.com/rss/search?q={encoded}&hl=en-US&gl=US&ceid=US:en"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 MobiMatchPro-Bot/1.0"})
    items = []
    try:
        with urllib.request.urlopen(req, timeout=12) as resp:
            xml_data = resp.read()
        root = ET.fromstring(xml_data)
        for item in root.findall("./channel/item")[:limit]:
            title = (item.findtext("title") or "").strip()
            link = (item.findtext("link") or "").strip()
            pub = (item.findtext("pubDate") or "").strip()
            if title:
                items.append({
                    "headline": title,
                    "source": link,
                    "published": pub,
                    "query": query
                })
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
            for entry in fetch_google_news_rss(q, limit=3):
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
    print(f"Saved {total_leads} compatibility research leads to research-drafts.json")

if __name__ == "__main__":
    main()
