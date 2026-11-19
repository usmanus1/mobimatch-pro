import datetime
import json
import re
import requests
from bs4 import BeautifulSoup

TODAY = datetime.date.today().isoformat()

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

# 2. Fetch latest mobile releases as research leads (Drafts only — never breaks live DB)
drafts = []
try:
    res = requests.get("https://www.gsmarena.com/rss-news-reviews.php3", timeout=15)
    soup = BeautifulSoup(res.content, "xml")
    for item in soup.find_all("item")[:10]:
        title = item.title.text.strip()
        link = item.link.text.strip()
        if any(b in title.lower() for b in ["samsung", "xiaomi", "redmi", "poco", "vivo", "oppo", "realme", "infinix", "tecno", "iphone", "motorola"]):
            drafts.append({
                "date": TODAY,
                "headline": title,
                "source": link,
                "status": "Pending Bench Verification"
            })
except Exception as e:
    print(f"⚠️ Research feed error: {e}")

with open("research-drafts.json", "w", encoding="utf-8") as f:
    json.dump({"last_sync": TODAY, "leads": drafts}, f, indent=2)
print(f"✅ Saved {len(drafts)} new model research leads to research-drafts.json")
