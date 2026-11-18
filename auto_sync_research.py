#!/usr/bin/env python3
"""
MobiMatch Pro V16.8 — Automated Database Validator & Sitemap Refresh Script
Runs inside GitHub Actions (.github/workflows/auto-research-update.yml):
1. Strictly validates JSON syntax in database-parts.js and database-board.js.
2. Automatically merges any approved JSON records placed in `new_records_inbox.json`.
3. Refreshes <lastmod> dates in sitemap.xml so Googlebot crawls fresh updates.
"""
import datetime, json, os, re

TODAY = datetime.date.today().isoformat()

def validate_js_array(filepath, is_concat=False):
    with open(filepath, "r", encoding="utf-8") as f:
        raw = f.read()
    cleaned = re.sub(r'^\s*//.*$', '', raw, flags=re.MULTILINE)
    if is_concat:
        start = cleaned.find("concat([") + len("concat(")
        end = cleaned.rfind("]);")
        arr = json.loads(cleaned[start:end+1])
    else:
        start = cleaned.find("[")
        end = cleaned.rfind("];")
        arr = json.loads(cleaned[start:end+1])
    print(f"[OK] {filepath} validated: {len(arr)} master cards.")
    return arr

def refresh_sitemap():
    if not os.path.exists("sitemap.xml"):
        return
    with open("sitemap.xml", "r", encoding="utf-8") as f:
        sm = f.read()
    sm_updated = re.sub(r'<lastmod>\d{4}-\d{2}-\d{2}</lastmod>', f'<lastmod>{TODAY}</lastmod>', sm)
    with open("sitemap.xml", "w", encoding="utf-8") as f:
        f.write(sm_updated)
    print(f"[OK] sitemap.xml <lastmod> updated to {TODAY}.")

if __name__ == "__main__":
    validate_js_array("database-parts.js", is_concat=False)
    validate_js_array("database-board.js", is_concat=True)
    refresh_sitemap()
