import datetime
import json
import re
import urllib.parse
import xml.etree.ElementTree as ET
import requests

TODAY = datetime.date.today().isoformat()
HEADERS = {"User-Agent": "Mozilla/5.0"}

# 1. Update sitemap.xml <lastmod> dates
try:
    with open("sitemap.xml", "r", encoding="utf-8") as f:
        xml = f.read()
    updated_xml = re.sub(r"<lastmod>.*?</lastmod>", f"<lastmod>{TODAY}</lastmod>", xml)
    with open("sitemap.xml", "w", encoding="utf-8") as f:
        f.write(updated_xml)
    print(f"✅ sitemap.xml updated to {TODAY}")
except Exception as e:
    print(f"⚠️ Sitemap skipped: {e}")

# 2. Feature-Specific Research Tracks for MobiMatch Pro
TRACKS = {
    "LCD_AND_GLASS": 'smartphone ("LCD replacement" OR "display compatibility" OR "tempered glass" OR "screen replacement") (Samsung OR Redmi OR Vivo OR Oppo OR Realme OR Infinix OR Tecno)',
    "BATTERY_AND_IC": 'mobile repair ("battery replacement" OR "charging IC" OR "PMIC" OR "motherboard repair" OR "eMMC" OR "UFS")',
    "PANIC_AND_HARD_RESET": '("iPhone panic" OR "panic-full" OR "hard reset" OR "recovery mode") (iPhone OR Samsung OR Xiaomi OR Vivo)',
    "TEARDOWNS_AND_PARTS": '("teardown" OR "spare parts" OR "repairability") (iFixit OR Samsung OR iPhone OR Xiaomi OR Realme)'
}

results = {}
total_count = 0

for category, raw_query in TRACKS.items():
    encoded_q = urllib.parse.quote(raw_query)
    url = f"https://news.google.com/rss/search?q={encoded_q}&hl=en-US&gl=US&ceid=US:en"
    cat_leads = []
    seen = set()

    try:
        res = requests.get(url, headers=HEADERS, timeout=15)
        res.raise_for_status()
        root = ET.fromstring(res.content)
        for item in root.findall(".//item")[:5]:
            title = (item.findtext("title") or "").strip()
            link = (item.findtext("link") or "").strip()
            pub_date = (item.findtext("pubDate") or TODAY).strip()
            if title and title not in seen:
                seen.add(title)
                cat_leads.append({
                    "headline": title,
                    "published": pub_date,
                    "source": link,
                    "target_tab": category,
                    "status": "Pending Bench Verification"
                })
    except Exception as e:
        print(f"⚠️ Track error ({category}): {e}")

    results[category] = cat_leads
    total_count += len(cat_leads)

output = {
    "last_sync": TODAY,
    "total_leads": total_count,
    "feature_research": results
}

with open("research-drafts.json", "w", encoding="utf-8") as f:
    json.dump(output, f, indent=2)

print(f"✅ Saved {total_count} feature-specific research leads across {len(TRACKS)} categories.")
