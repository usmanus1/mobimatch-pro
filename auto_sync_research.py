PHONE_BRANDS = [
    "phone", "smartphone", "iphone", "samsung", "galaxy", "xiaomi", "redmi", "poco",
    "oppo", "realme", "vivo", "iqoo", "infinix", "tecno", "itel", "pixel", "oneplus",
    "honor", "huawei", "motorola", "moto", "nokia", "nothing", "ipad", "android", "ios"
]

def is_relevant_lead(headline):
    low = (headline or "").lower()
    if any(re.search(r'\b' + re.escape(b.strip()) + r's?\b', low) for b in BLOCKLIST + ["pcie", "homeview", "car"]):
        return False
    has_phone = any(re.search(r'\b' + re.escape(p) + r'\b', low) for p in PHONE_BRANDS)
    has_repair = any(re.search(r'\b' + re.escape(k) + r'\b', low) for k in REPAIR_KEYWORDS)
    return has_phone and has_repair
