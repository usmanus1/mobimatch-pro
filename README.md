# MobiMatch Pro (V16.8)

**Live App:** [https://www.mobimatchpro.com/](https://www.mobimatchpro.com/)

Bilingual (**English & Roman Urdu**) mobile hardware compatibility, spare-parts cross-reference, and workshop diagnostic assistant built for phone repair technicians and spare-parts shops.

## Key Features (V16.8)
- **Verified Parts & IC Database (`database-parts.js` & `database-board.js`):**
  - **108 Master Hardware Groups** covering 8,000+ models across Samsung, Apple iPhone/iPad, Xiaomi/Redmi/POCO, OPPO, Realme, OnePlus, Vivo/iQOO, Infinix, TECNO, itel, Honor, Huawei, Google Pixel, Motorola, and Nokia.
  - **55 Official Transsion Smartphone SAP Groups & 9 Keypad SAP Groups** (Display `17401807`, Batteries, Cameras, Receivers, Speakers, Motors, Flexes, and Screw Specs) plus **14 Quarantined Diagram Conflicts**.
  - **Cut vs. No-Cut Tempered Glass Matrix**, OCA Sheets (`200µm` vs. `250µm`), Outer Refurb Glass, Charging Sub-Boards, BTB Connectors, `128GB` eMMC/UFS & `64GB` iPhone NAND decoders, PMICs, and 12-Section Voltage/Cold GR charts.
- **Smart Technician Tools (`index.html`):**
  - **Fuzzy Typo-Tolerant Search (`Fuse.js`):** Finds exact hardware matches even with misspelled model names.
  - **On-Demand Photo Code OCR (`Tesseract.js`):** Reads LCD stencil codes, SAP identifiers, and battery part numbers directly from part photos.
  - **14-Point Pre/Post-Repair Quality Checklist & Printable Handover Report.**
  - **Local Panic & Crash Log Analyzer**, Drawer Stock Locator, Donor-Phone Scrap Tracker, and Supplier Catalogue Importer.
- **Automated Daily Sync (`.github/workflows/auto-research-update.yml`):**
  - Validates JSON syntax in `database-parts.js` and `database-board.js` and keeps `sitemap.xml` `<lastmod>` dates updated automatically.
