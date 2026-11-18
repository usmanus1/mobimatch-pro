// ============================================================================
// MOBIMATCH PRO V16.8 — FILE 2 OF 2: BOARD, IC, EMMC/NAND, FLEX & DIAGNOSTICS
// File Name: database-board.js
// Automatically merges with database-parts.js!
// Categories Included (7 Modules):
// IC (128GB eMMC, 64GB iPhone NAND, PM4250, SC2721G, MT6358W, PM7150, RF, Audio),
// FLEX (Pin 50/40/34 LCD BTB Connectors, Samsung 8-Group Power Flex, OPPO FP Flex),
// PORT (Type-C & V8 Jacks), SMD, GR (12-Section Chart), PANIC (Logs), CODE (USSD)
// ============================================================================

window.defaultData = (window.defaultData || []).concat([
    // -------------------------------------------------------------------------
    // 1. NEW V16.3: SAMSUNG 128GB EMMC/EMCP, IPHONE 64GB NAND & PM4250 / SC2721G ICs
    // -------------------------------------------------------------------------
    {
        "type": "IC",
        "subCat": "IC",
        "title": "🆕 [9 NOV 2026 VERIFIED] Samsung 128GB eMMC / eMCP Flash Storage Master Part Numbers (10 Verified 128GB IC Codes)",
        "size": "128GB BGA eMMC / eMCP Series",
        "conf": "High",
        "models": [
            "1. KLMDGAWEBD — 128GB Samsung eMMC 5.1 IC",
            "2. KLMDG4UCTB — 128GB Samsung eMMC 5.1 IC",
            "3. KLMDG2RCTE — 128GB Samsung eMMC 5.1 IC",
            "4. KMDV6001DM — 128GB Samsung eMCP (eMMC + LPDDR4X RAM) IC",
            "5. KM3V6001CM — 128GB Samsung eMCP (eMMC + LPDDR4X RAM) IC",
            "6. KLMDGAGEAC — 128GB Samsung eMMC 5.1 IC",
            "7. KLMDGAGE2A — 128GB Samsung eMMC 5.1 IC",
            "8. KM3V6001BM — 128GB Samsung eMCP (eMMC + LPDDR4X RAM) IC",
            "9. KM2V7001CM — 128GB Samsung eMCP IC",
            "10. KMDX6001LM — 128GB Samsung eMCP (eMMC + LPDDR4X RAM) IC"
        ],
        "smartEn": "In Samsung IC part numbering, 'KLM...' denotes a standalone eMMC storage chip (no RAM inside), while 'KM...' (like KMDV6001DM, KM3V6001CM, KM3V6001BM, KMDX6001LM) denotes an eMCP chip with integrated LPDDR4X RAM. Always check Preloader/CID support on EasyJTAG or UFI Box before swapping!",
        "smartUr": "Samsung storage ICs mein 'KLM...' wali chips sirf 128GB eMMC memory hoti hain, jabke 'KM...' (jaise KM3V6001CM, KM3V6001BM, KMDV6001DM) mein 128GB memory ke sath RAM (eMCP) bhi shamil hoti hai. Lagane se pehle UFI / EasyJTAG mein CID support check karein!",
        "note": "🔬 9 Nov 2026 eMMC/eMCP Bench Rule: Before soldering a donor 128GB eMMC/eMCP chip, verify BGA ball-out (BGA-153 for standalone eMMC vs BGA-254 for eMCP) and check Health Report / RPMB status in UFI or EasyJTAG Plus.",
        "noteUr": "🔬 9 Nov 2026 eMMC Usool: Donor board se 128GB IC nikal kar lagane se pehle BGA-153 vs BGA-254 footprint aur UFI / EasyJTAG par Health Report + RPMB clean hona check karein."
    },
    {
        "type": "IC",
        "subCat": "IC",
        "title": "🆕 [9 NOV 2026 VERIFIED] Apple iPhone 64GB NAND Flash Short-Code Decoder (14 Scrap Motherboard Identification Codes)",
        "size": "iPhone 64GB BGA NAND Flash",
        "conf": "High",
        "models": [
            "Line 1: JZ023 = 64GB iPhone NAND Flash",
            "Line 2: JZ049 = 64GB iPhone NAND Flash",
            "Line 3: JZ050 = 64GB iPhone NAND Flash",
            "Line 4: JZ495 = 64GB iPhone NAND Flash",
            "Line 5: JZ53 = 64GB iPhone NAND Flash",
            "Line 6: JZ99 = 64GB iPhone NAND Flash",
            "Line 7: JZ109 = 64GB iPhone NAND Flash",
            "Line 8: JZ128 = 64GB iPhone NAND Flash",
            "Line 9: JZ167 = 64GB iPhone NAND Flash",
            "Line 10: JZ177 = 64GB iPhone NAND Flash",
            "Line 11: JZ178 = 64GB iPhone NAND Flash",
            "Line 12: JZ186 = 64GB iPhone NAND Flash",
            "Line 13: JZ442 = 64GB iPhone NAND Flash",
            "Line 14: JWC74 = 64GB iPhone NAND Flash"
        ],
        "smartEn": "Quickly identifies 64GB capacity NAND chips sitting on scrap/donor iPhone motherboards where Toshiba/Kioxia/SanDisk prints short alphanumeric codes (JZ023 to JWC74) instead of '64GB'.",
        "smartUr": "Scrap iPhone motherboards ke upar lage NAND IC par '64GB' nahi likha hota balki yeh 14 short codes (JZ023 se JWC74) likhe hote hain. Is list se aap 1 second mein 64GB NAND pehchan sakte hain!",
        "note": "🍎 Scrap Motherboard NAND Rule: Match generation family (BGA-110 for iPhone 8 to 13 series) and program SysCfg (SN / Wi-Fi / BT MAC) when swapping or upgrading iPhone NAND.",
        "noteUr": "🍎 iPhone NAND Usool: Donor board se 64GB NAND nikalte waqt BGA-110 generation match karein aur JC / Qianli programmer par SysCfg data write karein."
    },
    {
        "type": "IC",
        "subCat": "IC",
        "title": "🆕 [9 NOV 2026 PHOTO VERIFIED] Qualcomm PM4250 (000 FE930X59 A3) Power Management IC Compatibility Matrix",
        "size": "Qualcomm PM4250 BGA PMIC",
        "conf": "High",
        "models": [
            "OPPO: OPPO A53 4G (A5x), OPPO A32, OPPO A33 (2020), OPPO A73 4G, OPPO A74 4G, OPPO A95 4G, OPPO F17, OPPO F19",
            "Realme: Realme 7i, Realme C15 Qualcomm Edition (C15 Qcm), Realme C17, Realme 9i 4G",
            "Vivo: Vivo Y20 Qualcomm (V2027 / Y20 Qcm), Vivo Y20i, Vivo Y20s (Y20s Qcm), Vivo Y31 (2021), Vivo Y51A, Vivo Y50",
            "Xiaomi / Redmi / POCO: POCO M3, Redmi 9 Power, Redmi 9T, Redmi Note 9 4G (China), Redmi 10C, Redmi Note 11 4G",
            "Samsung & Motorola: Samsung Galaxy A05s (SM-A057F), Galaxy A23 4G (SM-A235F), Motorola Moto G32, Moto G52"
        ],
        "smartEn": "Primary PMIC for Qualcomm Snapdragon 460, 662, and 680 motherboards. 100% direct BGA swap across all listed OPPO, Realme, Vivo, Xiaomi, and Samsung models.",
        "smartUr": "Qualcomm Snapdragon 460, 662 aur 680 boards ka main Power IC (PM4250). Yeh upar likhe tamam OPPO, Realme, Vivo aur Redmi phones mein 100% apas mein lag jata hai!",
        "note": "🔬 PM4250 Bench Rule (9 Nov Photo #10): Fixes dead phone, stuck 40–70mA DC supply current, and missing VREG_S / LDO rails on Snapdragon 460/662/680 boards.",
        "noteUr": "🔬 PM4250 Usool: Dead phone ya DC supply par 40–70mA par atke hue Snapdragon 460/662/680 phones mein PM4250 IC badlein."
    },
    {
        "type": "IC",
        "subCat": "IC",
        "title": "Spreadtrum / Unisoc SC2721G (G4NA16.1 / DGCC07947) Power Management IC Compatibility Matrix",
        "size": "SPRD SC2721G BGA PMIC",
        "conf": "High",
        "models": [
            "Realme C11 (2021 RMX3231)", "Realme C20", "Realme C30s", "Realme Narzo 50i",
            "Tecno Pop 5 Lite", "Tecno Pop 5 LTE (BD4)", "Tecno Spark 7",
            "Infinix Hot 10i", "Infinix Smart 6 (X6511 / X6511C / X6511D / X6511E)",
            "itel A23", "itel A26", "itel A27", "itel A49", "itel A44 Power",
            "itel A50", "itel A60 (A662L)", "itel A60s (A662LM)", "itel A70 (A665L)", "itel A80 (A671L)"
        ],
        "smartEn": "Primary power management IC for Unisoc SC9863A / T603 / T606 entry-level boards across Realme C-series, Infinix Smart, Tecno Pop/Spark, and itel A-series.",
        "smartUr": "Unisoc SC9863A / T603 / T606 CPU wale Realme, Infinix, Tecno aur itel phones ka main Power IC (SC2721G).",
        "note": "🔬 SPRD SC2721G Bench Rule: Fixes dead board, low boot current (30–60mA stuck), and no VBAT-to-VSYS switching!",
        "noteUr": "🔬 SC2721G Usool: Dead board ya DC machine par 30–60mA rukne ki problem is IC ko badalne se theek hoti hai."
    },
    {
        "type": "IC",
        "subCat": "IC",
        "title": "Qualcomm PM7150 (102) vs PM7150A (2-00) vs PM7150L (103) Power Management IC Compatibility Matrix",
        "size": "PM7150 / PM7150A / PM7150L BGA PMIC",
        "conf": "High",
        "models": [
            "PM7150 (002 / 102 Main Power PMIC): Xiaomi Redmi Note 9 Pro, Redmi Note 9S, Redmi Note 9 Pro Max, Redmi Note 10 Pro (M2101K6G), POCO M2 Pro, POCO X2, POCO X3 / X3 NFC (M2007J20CG), Mi 9T / Redmi K20, Mi Note 10 / CC9 Pro, Realme 6 Pro, Realme 7 Pro, Realme 8 Pro, Realme X2, OPPO Reno2, Reno3 Pro 4G, Reno4, Reno5 4G, Samsung Galaxy A71 4G (SM-A715F), Galaxy A72, Galaxy A52 4G, Galaxy M51 (SM-M515F), Vivo V20, V21e, iQOO Z1x",
            "PM7150A (2-00 Companion Interface & Charging PMIC): Paired on Snapdragon 720G / 730G / 732G / 765G boards alongside PM7150",
            "PM7150L (102 / 103 LDO Display Bias, Flash & Sub-PMIC): Paired on Snapdragon 720G / 730G / 732G / 855+ boards (OnePlus 7 Pro, Redmi K20 Pro, Poco X3, Galaxy A71/M51)"
        ],
        "smartEn": "PM7150, PM7150A, and PM7150L are three distinct chips with different functions on the same motherboard. Never cross-solder A or L onto the main PM7150 pad.",
        "smartUr": "PM7150 (Main Power), PM7150A (Charging/Interface) aur PM7150L (Display/Flash LDO) ek hi board par lagi 3 alag ICs hain—inhein ek doosre ki jagah na lagayein!",
        "note": "🔬 PM7150 Trilogy Rule: Match exact suffix (None vs A vs L) and revision code (102 vs 103 vs 2-00) before reballing.",
        "noteUr": "🔬 PM7150 Usool: IC lagane se pehle A, L aur 102/103 number zaroor match karein."
    },

    // -------------------------------------------------------------------------
    // 2. FLEX CABLES, LCD BTB CONNECTORS & POWER/FP STRIPS (INCLUDING 8 & 9 NOV 2026)
    // -------------------------------------------------------------------------
    {
        "type": "FLEX",
        "subCat": "FLEX",
        "title": "🆕 [9 NOV 2026 PHOTO VERIFIED] Complete LCD-Display & BTB Connector Pinout Compatibility Guide: Pin 50 Model 1, Pin 40 Model 31 & Pin 34 Model 21",
        "size": "50-Pin / 40-Pin / 34-Pin FPC Sockets",
        "conf": "High",
        "models": [
            "Group 1 — [Pin 50 Model 1 BTB Connector]: Realme 5 Pro (RMX1971), Realme Narzo 50, Realme Q, Realme RMX3286 | Infinix Note 7 (X690), Infinix Smart 6 (X6511E), Infinix Smart 7 (X6515) | Tecno Pop 1, Tecno Spark 7 Pro (KF8) | Xiaomi Mi 10 5G (M2001J2G)",
            "Group 2 — [Pin 50 Model 1 LCD-Display Connector]: Nokia C20 (TA-1352), Huawei Y9s (STK-L21), Xiaomi Black Shark 1 (SKR-H0), itel Vision 3 Plus (P682L) | Infinix Smart 4c (X653C), Infinix Smart 5 (X657), Infinix Smart 6 (X6511B) | Tecno Spark 4 Lite (BB4k), Tecno Spark 5 Air (KD6), Tecno Pop 2 Plus (BA2), Tecno Spark 9T (KH6), Tecno KC8S, Tecno KC6",
            "Group 3 — [Pin 40 Model 31 LCD-Display Connector]: Realme C11 2021 (RMX3231), Realme C20 (RMX3063), Realme C21 (RMX3201), Realme C21Y (RMX3261), Realme C30 (RMX3581) | Nokia G20 (TA-1347) | Samsung Galaxy A20s (SM-A207F), Galaxy A04 (SM-A045F)",
            "Group 4 — [Pin 34 Model 21 LCD-Display Connector]: Vivo Y15s (V2120), Vivo Y20 MTK (V2043), Vivo Y20s QCM, Vivo Y20A (V2054A), Vivo Y30 (1938), Vivo Y30i, Vivo Y51 2020 (V2024), Vivo Y02s (V2207), Vivo Y01 (V2166), Vivo Y31s, Vivo Y72 5G (V2041), Vivo Y21T (V2135), Vivo Y22, Vivo Y03 (V2332), Vivo Y31 2021 (V2031), Vivo Y51A, Vivo V2048, Vivo V2032",
            "Group 5 — [40-Pin + 4-GND 0.35mm Pitch Display BTB Socket — FLX-007]: Xiaomi Redmi Note 13 4G (23129RAA4G) = Redmi Note 13 5G (2312DRAABG) = Redmi Note 12 4G/5G = Redmi Note 13 Pro 5G = POCO X5 5G = POCO X6 5G"
        ],
        "smartEn": "When a motherboard or LCD flex BTB connector is damaged by water or pry-tools, you can harvest an identical replacement 50-pin, 40-pin, or 34-pin plastic/gold socket from any donor board or scrap display in the same group!",
        "smartUr": "Jab board ya combo patti ka jack (BTB connector) toot jaye ya pani se jal jaye, toh aap is chart ki madad se kisi bhi purane scrap board ya toote combo se 50-pin, 40-pin ya 34-pin connector nikal kar laga sakte hain!",
        "note": "🔌 BTB Connector Soldering Rule (9 Nov Image #11): Use low-melt 183°C solder paste and hot air from the underside of the PCB (or 260°C low-airflow nozzle with kapton shield) so the plastic BTB housing never melts!",
        "noteUr": "🔌 BTB Jack Soldering Usool: Plastic connector lagate waqt 183°C paste istemal karein aur heat niche se ya kam hawa (260°C) par dein taake plastic na pighle!"
    },
    {
        "type": "FLEX",
        "subCat": "FLEX",
        "title": "🆕 [8 & 9 NOV 2026 PHOTO VERIFIED] Samsung 8-Group Universal Power/Volume Flex Chart, OPPO A15 & A18 Fingerprint Sensors & Audited RP017 / RP024 Flexes",
        "size": "Power/Volume Strips & Fingerprint Sensors",
        "conf": "High",
        "models": [
            "Samsung 8-Group Universal Power/Volume Flex Chart (8 Nov Photo #6 Verified): [1. A05s Group] Galaxy A05s = M14 = F14 | [2. A05 Group] Galaxy A05 = M05 = F05 = A06 | [3. A02 Group] Galaxy A02 = M02 | [4. A12 Group] Galaxy A12 = A12 Nacho = M12 = F12 | [5. F13 Group] Galaxy F13 = M13 | [6. A02s Group] Galaxy A02s = M02s = F02s = A03s | [7. A23 Group] Galaxy A23 4G = A23 5G | [8. M31 Group] Galaxy M31 = M21",
            "OPPO A18 All-in-One Side Power/Fingerprint Sensor Flex (8 Nov Photo #3 Verified): OPPO A18 = OPPO A38 = OPPO A58 4G = OPPO A3x [Also Realme C55 / C65 / C67 / A60 Side FP]",
            "OPPO A15 All-in-One Rear Round Fingerprint Sensor Flex (8 Nov Zip Photo #6 Verified): OPPO A15 = OPPO A15s = OPPO A32 = OPPO A53 4G",
            "OPPO A57 4G Power + Volume Button Strip (8 Nov Photo #2 & Headlane FLX-005 Verified): OPPO A57 4G (2022 CPH2387) = OPPO A57s = OPPO A77 4G = OPPO A77 5G = OnePlus Nord N20 SE (1+ N20 SE) = OPPO A78 5G = OPPO A58 4G",
            "RP024 [GH59-15383A — 🟡 Conditional Side Key Flex]: Samsung Galaxy A52 4G (SM-A525) = Galaxy A52 5G (SM-A526) = Galaxy A52s 5G (SM-A528) = Galaxy A72 4G (SM-A725) = Galaxy S20 FE 4G (SM-G780F) [🟡 Headlane also lists S20 FE 5G SM-G781B as single-source]",
            "RP017 [1350204000385A — 🟡 Conditional Main Interconnect Flex]: Xiaomi POCO M6 Pro = Redmi Note 13 Pro [🟡 Corroborated across Headlane & Gultek; confirm 4G vs 5G variant. Redmi Note 14S listed at Headlane only]",
            "Other Headlane Verified Samsung, Vivo & Xiaomi Flex Groups: [GH82-36147A Main Flex] Galaxy A16 4G/5G = A17 4G/5G = A18 4G | [GH59-15671A Side Key] Galaxy A15 4G/5G = A16 4G/5G | [GH59-15948A Side Key] Galaxy A17 4G/5G = A18 4G | [GH59-15363A Side Key — 12 Models] Galaxy M51, M31s, A12, A12 Nacho, A13 4G/5G, A23 5G, A32 5G, M22, M23, M52 | [Vivo Y20 Key Flex] Vivo Y20 = Y20i = Y20s = Y20G = Y20A = Y12s = Y30 | [Vivo Y18 Key Flex] Vivo Y18 = Y28s = Y03 = Y18e = T3 Lite = Y16 | [1350204000384A Side Key] POCO C65 = Redmi 13C = Redmi 14C | [1350204000851A Side Key] Redmi 15C 4G = POCO C85 = Redmi 17C 5G"
        ],
        "smartEn": "Combines the 8 Nov visual Samsung 8-group power flex chart, OPPO A15 & A18 fingerprint sensor ribbons, and the 9 Nov audited Headlane/FixShop/Gultek flex part codes (GH59-15383A & 1350204000385A).",
        "smartUr": "Samsung ke 8 Power Button Strip groups (A05s, A05, A02, A12, F13, A02s, A23, M31), OPPO A15 (piche wala fingerprint) aur OPPO A18/A38/A58/A3x (side fingerprint) ki pattiyan 100% same hain!",
        "note": "🎗️ Flex Strip Bench Tip: Even though Samsung A12 (SM-A125F) and A12 Nacho (SM-A127F) have different OEM frames and CC boards, their Power/Volume Side Key Flex is 100% identical!",
        "noteUr": "🎗️ Button Strip Tip: Samsung A12 (A125F) aur A12 Nacho (A127F) ka CC patta alag hota hai, magar Power/Volume On-Off patta 100% same hota hai!"
    },

    // -------------------------------------------------------------------------
    // 3. BOOT & PANIC LOGS DIAGNOSTICS TAB (TYPE: PANIC — ADSENSE SAFE & BILINGUAL)
    // -------------------------------------------------------------------------
    {
        "type": "PANIC",
        "subCat": "PANIC",
        "title": "Official Brand Device & Account Ownership Verification Guide (Samsung, Apple, Xiaomi, Google Pixel, OPPO, vivo, realme & Huawei)",
        "size": "Official Support & Proof-of-Purchase",
        "conf": "High",
        "models": [
            "Samsung Official Account & Security Support (KSA): Requires previous Google Account or screen lock credentials (samsung.com/sa_en/support) | Diagnostics via Samsung Members App",
            "Apple iPhone / iPad Activation Lock: Distinct device protection; requires Apple Account sign-in, previous owner iCloud removal, or official Apple Proof-of-Purchase support request (support.apple.com/en-sa/102640)",
            "Xiaomi / Redmi / POCO Account Verification: Google account and Mi Account protections; use official Xiaomi password recovery (KA-07094) or eligible owner support flow (KA-113766)",
            "TECNO / Infinix / itel Authorized Service (KSA): Official after-sales support and account recovery via Carlcare Saudi Arabia (carlcare.com/sa_en)",
            "OPPO / realme / vivo / OnePlus Support: ColorOS, realme UI & Funtouch screen-lock recovery references (vivo.com/sa/en/support | oneplus.com/sa/support)",
            "Google Pixel / Motorola / Nokia HMD / Sony Xperia / ASUS: Official Google Account recovery (support.google.com/accounts/answer/7682439) and authorized service portals"
        ],
        "smartEn": "AdSense-compliant official manufacturer recovery channels. Always verify customer ownership and proof-of-purchase before servicing locked devices.",
        "smartUr": "AdSense policy ke mutabiq official company support links. Kisi bhi phone par kaam karne se pehle gahak ka bill/box zaroor check karein.",
        "note": "🛡️ AdSense Policy Compliance (Checked Nov 2026): MobiMatch Pro provides official manufacturer support links and owner verification workflows only.",
        "noteUr": "🛡️ Policy Compliance: Yeh section sirf official company account recovery aur ownership verification ke liye hai."
    },
    {
        "type": "PANIC",
        "subCat": "PANIC",
        "title": "Apple iPhone & iPad Kernel Panic Sensor & SMC Hex Bitmask Decoder (APPLE-SMC-001 to 006, D013–D015, REC-APL-0012 to 0020)",
        "size": "mic1, mic2, prs0, TG0B, 0x80000, 0x100000, 0x800",
        "conf": "High",
        "models": [
            "APPLE-SMC-001 (iPhone 14 Pro / 14 Pro Max — iPhone15,2 / iPhone15,3): 'SMC PANIC - ASSERTION FAILED ... sensor array 0 - N is 0x0, 0x80000' (or decimal 524288) -> Front / Proximity / Ambient Light Sensor Flex or connector path [CORROBORATED REPAIR FINDING — Inspect connector & test known-good flex before replacing]",
            "APPLE-SMC-002 (iPhone 13 / 13 mini — iPhone14,5 / iPhone14,4): 'SMC PANIC ... sensor array ... 0x800' -> Charge port / Lightning dock flex sensor path [CORROBORATED — ⚠️ 0x800 on iPhone 13 ≠ same meaning on iPhone 14/15!]",
            "APPLE-SMC-003 vs APPLE-SMC-005 (⚠️ 0x100000 Generation Trap!): On iPhone 14 / 14 Plus (iPhone14,7 / iPhone14,8), 'SMC PANIC ... 0x100000' = Charge Port / Lower Sensor Path; HOWEVER on iPhone 14 Pro (iPhone15,2), '0x100000' = Power Button / Side Key Sensor Flex Path!",
            "APPLE-SMC-004 (iPhone 14 Pro / Pro Max — iPhone15,2 / iPhone15,3): 'SMC PANIC ... 0x40000' -> Charge port flex path on Pro models (Do not cross-map to non-Pro)",
            "D013 & REC-APL-0012 (Missing sensor(s): mic1 / Prs0 / TG0V / TG0B / TP1A — iPhone SE 2020 iPhone12,8, iPhone X–17 Series): 'userspace watchdog timeout: no successful checkins from thermalmonitord' -> Missing sensor check-in over I2C/SWI. mic1 & prs0 correlate with charging port dock flex (non-genuine aftermarket docks often lack sensor ICs); TG0B/TG0V correlate with battery gas gauge SWI/BTB",
            "D014 (iPhone 11 Pro Max A2161 — Missing sensor(s): mic2 [SINGLE-CASE FINDING]): Liquid-damaged A2161 continued throwing thermalmonitord/mic2 panic even after two flex replacements -> Proves a repair-related panic can involve board/connector signal paths beyond the flex itself!",
            "REC-APL-0013 (iPhone 12 / 13 / Cellular Models — 'AppleBasebandM20' / 'apcie[2:baseband-pcie]::handleCompletionTimeoutInterrupt'): Cellular modem PCIe timeout. ✅ Diagnostic Test: Remove SIM card and test on Wi-Fi-only; if restarts stop, modem/antenna path is implicated",
            "REC-APL-0015 (iPad Pro 11\" 4th Gen j61x / iPad Air 5 ipad13b — 'SMC BSC failure ... sensor array 0x5b, 0x2000'): Single-case finding where firm edge pressure stopped crashes, pointing to a screen-edge flex/connector seating issue"
        ],
        "smartEn": "Decodes iPhone 3-minute restart panic logs. Remember that SMC hex bitmasks (like 0x100000) change meaning between base iPhone 14 (Charge Port) and iPhone 14 Pro (Power Button Flex)!",
        "smartUr": "iPhone har 3 minute baad restart ho toh Panic Log mein yeh codes dekhein: mic1/prs0 = Charging patta, TG0B/TG0V = Battery connector, aur 0x80000 (14 Pro) = Ear speaker / proximity patta!",
        "note": "🍎 iPhone 3-Minute Restart Rule: Always test with an original pulled OEM charging dock or proximity flex first—cheap copy flexes omit the tiny thermal sensor IC and cause 180-second thermalmonitord panics!",
        "noteUr": "🍎 iPhone Restart Usool: Yeh panic thermalmonitord watchdog ki wajah se hota hai jab koi sensor (jaise Prs0, mic1/mic2) time par check-in nahi karta. Copy charging patte mein sensor IC nahi hoti!"
    },
    {
        "type": "PANIC",
        "subCat": "PANIC",
        "title": "Apple iOS Watchdog (0x8badf00d), Jetsam Memory JSON, iOS 18.0.1 AOP Bug, SEP :sks & Android Tombstone / Verified Boot / MediaTek AEE Logs",
        "size": "0x8badf00d, Jetsam, SIGSEGV, dm-verity & MTK AEE",
        "conf": "High",
        "models": [
            "D009 & X01 — 0x8badf00d (Apple App Watchdog Termination [DOCUMENTED]): The app watchdog terminated an unresponsive application blocking the main UI thread — NOT a motherboard fault!",
            "D010, D011, D012 — Jetsam JSON Memory Events ('per-process-limit', 'vm-pageshortage', 'vnode-limit' [DOCUMENTED]): OS reclaimed memory under resource pressure — does NOT prove bad RAM chip!",
            "REC-APL-0016 (iPhone 16 Pro & iPad mini A17 — 'AOP PREFETCH ABORT ... Exception class=0x20' [CORROBORATED OS BUG]): Correlated with iOS/iPadOS 18.0.1 PCIe-WLAN bug and resolved by updating to iOS 18.1+.",
            "REC-APL-0014 (iPhone 12 Pro iPhone13,2 — 'SEP Panic: :sks /sks : 0x1000b15fc' [DOCUMENTED SOFTWARE TRIGGER]): Triggered by an MDM 'Clear Passcode' command in Secure Key Store — 100% software trigger!",
            "D001 & D002 — Android Tombstones ('signal 6 SIGABRT' & 'signal 11 SIGSEGV, SEGV_MAPERR' in /data/tombstones/): Userspace process crash — NOT a kernel panic and does NOT prove bad CPU/RAM!",
            "D004 & REC-AND-0003 — Verified Boot / AVB2.0 / dm-verity ('Hash of data does not match digest' / Samsung 'DM-Verity Need to Check Verification Failed DRK'): Boot integrity check rejected modified/downgraded image.",
            "REC-TCL-0003 — MediaTek AEE ('/sdcard/mtklog/aee_exp', 'MTK_AEE_IPANIC' & On-Screen 'K.Dump triggered by HWT...'): Standard across MediaTek phones; 'K.Dump' with corrupted lk.img indicates Little Kernel bootloader corruption."
        ],
        "smartEn": "Separates software/OS crash logs (0x8badf00d, Jetsam, iOS 18.0.1 AOP bug, Android SIGSEGV tombstones) from true motherboard hardware faults so you never heat a healthy CPU/RAM.",
        "smartUr": "Har crash log motherboard fault nahi hota! 0x8badf00d, Jetsam aur Android SIGSEGV sirf app/software crashes hain—inhein dekh kar kabhi CPU ya RAM par heat na lagayein!",
        "note": "📋 Meta-Rule: Always check OS version, app trigger, and full panicString before opening the phone.",
        "noteUr": "📋 Usool: Board kholne se pehle poora panicString aur software version zaroor check karein."
    },
    {
        "type": "PANIC",
        "subCat": "PANIC",
        "title": "OEM Boot, Flash & Security Modes: Samsung Odin / Knox Guard, Xiaomi Mi Flash, Pixel 2026 OTA, Qualcomm 9008, MTK BROM, OnePlus MSM & General Bench Triage",
        "size": "Odin, Knox Guard, 9008, BROM, MSM & Safe-Mode",
        "conf": "High",
        "models": [
            "SAM-ODIN-001 & REC-SAM-0001 — Samsung Odin Download Mode ('FAIL! (Auth)', 'SW REV CHECK FAIL', 'SVB fail', 'AVB fail', 'invalid magic'): Match exact model, CSC & binary bit (BIT/SW REV cannot be downgraded!).",
            "REC-SAM-0002, 0003 & 0004 — Samsung 'KNOX WARRANTY VOID: 0x01' (Provenance e-fuse, not a hardware fault) & Knox Guard Lock (Code 11111 = Overdue carrier installment; Codes 22222 / 33333 = Security lock): Policy lock, NOT a hardware defect! Stop: Do not attempt board work.",
            "REC-GPX-0001 — Google Pixel 6 to Pixel 10 Pro XL (2026 OTA Regression): Freeze at G logo or black screen after PIN — check OTA bug before suspecting hardware.",
            "REC-QC-0001 & REC-TEC-0001 — Qualcomm HS-USB QDLoader 9008 (VID 05C6:PID 9008) vs MediaTek BROM / SP Flash Tool ('SEND_DA_FAIL', 'STATUS_BROM_CMD_FAIL 0xC0060005', '0xC0030012'): Never use Qualcomm EDL cables on MTK phones!",
            "XIA-FAST-001 & D038 — Xiaomi / Redmi / POCO Fastboot & Mi Flash: Stuck Volume Down button enters Fastboot accidentally; in Mi Flash, never select 'Clean all and lock' on a mismatched regional ROM!",
            "D021 to D050 — 17-Brand Bench Triage & Safe-Mode Rules: Separate No Power (D021) from Black Screen with Vibration/Sound (D022 — Display/Backlight fault!) | Check Realme/Huawei 'Scheduled Power On/Off' settings for daily auto-restarts (D044/D045) | Check stuck Volume key on ASUS/Xiaomi (D047)."
        ],
        "smartEn": "Comprehensive bootloader, flashing error, and non-erasing triage reference across 17 smartphone brands.",
        "smartUr": "Samsung Odin Binary Bit, Knox Guard (11111/22222), Xiaomi 'Clean all and lock' brick trap, aur 17 brands ke Safe Mode / Restart checks.",
        "note": "🔓 Action Gate (P01–P07): Stop immediately if battery is swollen, charging port is wet, or a data-wipe prompt appears without customer backup.",
        "noteUr": "🔓 Usool: Phooli hui battery, geelay port, ya bina backup data-wipe prompt par foran ruk jayein."
    },

    // -------------------------------------------------------------------------
    // 4. CHARGING PORT SOLDER JACKS TAB (TYPE: PORT)
    // -------------------------------------------------------------------------
    {
        "type": "PORT",
        "subCat": "PORT",
        "title": "Universal USB Type-C Charging Port Solder Jacks (Samsung A14/A15/A25/A34/A54/M14/M34/F14 5G Group, 16-Pin, 24-Pin SuperVOOC) & Micro-USB V8 Jacks",
        "size": "16-Pin / 24-Pin Type-C & 5/7-Pin V8 Jacks",
        "conf": "High",
        "models": [
            "Samsung A14 5G / A15 5G / A34 5G / A54 5G Dedicated 24-Pin Type-C Charging Connector Group (Lab Verified): Samsung Galaxy A14 5G (SM-A146B) = Galaxy A15 5G (SM-A156B) = Galaxy A25 5G (SM-A256B) = Galaxy A34 5G (SM-A346B) = Galaxy A54 5G (SM-A546B) = Galaxy M14 5G (SM-M146B) = Galaxy M34 5G (SM-M346B) = Galaxy F14 5G (SM-E146B)",
            "Samsung General 16-Pin / 24-Pin Mid-Mount Type-C Jack: Galaxy A12 (SM-A125F), A13, A14 4G, A15 4G, A16 4G/5G, A17 4G/5G, A21s, A22, A26, A32, A33, A35, A36, A51, A52, A53, A55, A56, M12, M31, M33 5G, M23 5G, F23 5G | 3722-004150 / GH82-18803A: Galaxy S10 / S10+ / S10e",
            "Xiaomi / Redmi / POCO 16-Pin Standard Type-C Jack: Redmi 9, 9 Power, Note 7, Note 8/8 Pro, Note 9/9S/Pro, Note 10/11/12/13/14/15, Poco M2/M3/X3/X5/X6/X7, Redmi 12/13/13C/14C/15C",
            "OPPO / Realme / OnePlus SuperVOOC High-Current Type-C Jack (Wide Center Tongue Pin): Realme 6/7/8/9/10/11/12/13/14, C53, C55, C65, C67, C75, C83, C85, Oppo A53, A54, A57, A58, A3x, A6x, A60, A78, A79, A98, Reno Series",
            "Vivo FlashCharge & Transsion 16-Pin Type-C Jacks: Vivo Y20 (Type-C rev), Y21, Y22, Y16, Y17s, Y18, Y28, Y29, Y33s, Y35, Y38, Y39, Y58, Y200 5G, T3 5G, T4x 5G, V21–V40 | Infinix Smart 8/9/10, Hot 30/40/50/50i (X6531)/50 Pro/Hot 60, Note 30/40/50/60, Tecno Spark 10/20/30/40, Pova 5/6, itel P55/P65/P70/A70/A80",
            "Samsung 7-Pin Micro-USB Jack: Galaxy J2, J2 Prime (G532), J3, J5, J7, J7 Prime (G610), Grand Prime (G530), A01, A02, A02s, A03 | 5-Pin Flat Micro-USB Jack: Redmi 9A, 9C, 10A, Realme C2, C3, C11, C12, C15, C20, C21, Oppo A3s, A5s, A12, A15, Vivo Y11, Y12, Y15, Y17, Y20, Y91 | Keypad 5-Pin V8: Nokia 105, 106, 110, 3310, Samsung B310E, itel it2160"
        ],
        "smartEn": "Samsung's 24-pin Type-C jack is 100% shared across A14 5G, A15 5G, A25 5G, A34 5G, A54 5G, M14 5G, M34 5G, and F14 5G. On OPPO/Realme/OnePlus, always use the wide-pin SuperVOOC jack so VOOC fast charging triggers.",
        "smartUr": "Samsung A14 5G, A15 5G, A25 5G, A34 5G, A54 5G, M14 5G aur F14 5G mein ek hi 24-pin Type-C jack lagta hai. OPPO/Realme mein hamesha चौड़े pin wala SuperVOOC jack lagayein.",
        "note": "🔌 Charging Port Solder Rule: Always tin the CC1, CC2, D+, and D- pads with 183°C leaded solder paste so fast charging and USB data work on the first try!",
        "noteUr": "🔌 Jack Soldering Usool: Type-C jack lagate waqt piche ki data aur CC pins ko 183°C paste se achi tarah solder karein taake fast charging foran chale."
    },

    // -------------------------------------------------------------------------
    // 5. MEDIATEK, QUALCOMM, SAMSUNG & IPHONE MOTHERBOARD ICs (TYPE: IC)
    // -------------------------------------------------------------------------
    {
        "type": "IC",
        "subCat": "IC",
        "title": "MediaTek PMIC Master Compatibility Guide: MT6357 (CRV vs MRV vs V), MT6358 (MT6358W/VW 1908-BNAH), MT6359 (VPP/P) & MT6360PP / MT6375",
        "size": "MediaTek Power & Sub-PMICs",
        "conf": "High",
        "models": [
            "✅ MT6357CRV = MT6357MRV (100% Direct Swap — Helio A22/P22/P35/G25/G35/G37 Boards, Paired with MT6177M/MT6177W RF IC): Redmi 6, 6A, 9A, 9C, 9i, 10A, 12C, Poco C3, C31, C55, Samsung Galaxy A12 (SM-A125F), A02, A03s, A04e, Vivo Y12, Y15, Y17, Y20 (MTK), Y21, Oppo A1k, A5s, A12, A15, A15s, A16, A17, A18, Realme C2, C11, C12, C15, C20, C21, Infinix Smart 5/6/7, Hot 8/9/10 Play, Tecno Spark 4/5/6/7/8",
            "❌ REJECTED TRAP (MT6357V): Legacy MT6357V (without CRV or MRV suffix) is NOT compatible with MT6357CRV/MRV (Different LDO voltage stepping — leaves board dead!)",
            "✅ MT6358W / MT6358VW (1908-BNAH — Helio P60/P65/P70/G70/G80/G81/G85/G88 Boards, Paired with MT6371P Sub-PMIC): Redmi Note 8 Pro, Redmi 9, Redmi Note 9 (Helio G85), Note 10S, Redmi 14C, Redmi A3 Pro, Poco M2, M3 Pro, Realme U1, Realme 3, 6i, 7i, C3, C25, C55, C65, C75x, Narzo 10/20/20A/30A/50A, Oppo R15, F7, F9, F11, F11 Pro, F15, A18, A31, A54, A58, A91, Reno 2F, Vivo V15, S1, Y18, Y19, Y21s, Y22, Y27, Y28, Y30, Y33s, Y50, Samsung Galaxy A31 (SM-A315F), A32 4G (SM-A325F), A22 4G (SM-A225F), A41, F22, F32, M22, M32, Motorola Moto G24, Moto G31, Moto G41, Honor X6b, Infinix Smart 9, Hot 10, Hot 11, Note 7/8/10/11/12/30i (X6716), Hot 30 (X6831), Hot 40 (X6836)",
            "✅ MT6359VPP / MT6359P (Helio G90T/G95/G96/G99/G100 & 5G Dimensity 700–7020 Boards): Realme 6, 7, 8, 8 5G, 9 Pro+, 10 4G, 11 5G, 11x, 12x, C65 5G, C67 5G, Redmi Note 10 5G, Note 11S, Note 11 Pro/Pro+ 5G, Note 12 Pro 5G, Note 13 5G, Note 14 5G, Poco M3 Pro 5G, M4 Pro, X4 Pro, M6 Pro, X7, Samsung Galaxy A14 5G, A15 4G/5G, A16 4G/5G, A17, A22 5G, A24, A32 5G, A34 5G, Vivo V21 5G, V23, Y75 5G, T2x, T3 5G, iQOO Z9 5G, Oppo Reno5 Z–8 Z, A58, A78 5G, A79 5G, A98, A3 Pro, Infinix Note 30/40/50, Hot 40 Pro, Hot 50 Pro/Pro+, Tecno Pova 5/6, Spark 20 Pro (🟡 Match VPP vs P suffix on schematic!)",
            "IC-006 — MT6360PP vs MT6360UP & MT6375 (MediaTek Sub-PMIC + USB-PD Switching Charger + Flash/RGB Driver): Used in Redmi Note 13 5G, Note 12 5G, OPPO A78 5G, Realme 11X 5G, Vivo T2x 5G, Samsung Galaxy A15 5G / A16 5G (⚠️ Do NOT mix MT6360PP and MT6360UP suffixes!)"
        ],
        "smartEn": "MT6357CRV and MT6357MRV are 100% interchangeable, whereas legacy MT6357V is not. MT6358W (1908-BNAH) powers 100+ Helio P60 to G88/G81 models including Redmi 14C, Realme C65/C75x, and Samsung A22/A31/A32.",
        "smartUr": "MT6357CRV aur MT6357MRV apas mein 100% chal jate hain, lekin khali MT6357V nahi chalta! MT6358W IC 100+ models (Redmi 14C, Realme C55/C65/C75x, Samsung A31/A32, Vivo Y28/Y33s) mein lagta hai.",
        "note": "🔬 MediaTek PMIC Golden Rule: Always check the 32.768 kHz RTC crystal and VSYS buck coils next to MT6357/MT6358/MT6359 when diagnosing dead boards.",
        "noteUr": "🔬 MediaTek PMIC Usool: Power IC badalte waqt aas-paas ke buck coils zaroor check karein."
    },
    {
        "type": "IC",
        "subCat": "IC",
        "title": "Samsung S2MU106X01 (Exynos IF-PMIC), Qualcomm PMI632 (902 vs 502), PM660 / PM660L, PM439, PM6125, Flagship PMICs & Audio PA ICs (AW87319, K318, TFA98xx)",
        "size": "S2MU106X01 / PMI632 / PM660 / Audio ICs",
        "conf": "High",
        "models": [
            "IC-008 — S2MU106X01 / MAX77705C (Samsung Exynos Interface PMIC, 25W USB-C PD PPS Switching Charger & Fuel Gauge): Samsung Galaxy S24, Galaxy A55 5G (SM-A556B), Galaxy A35 5G (SM-A356B), Galaxy A54 5G (SM-A546B), Galaxy A34 5G (SM-A346B), Galaxy M33 5G (SM-M336B), Galaxy S23 FE (SM-S711B)",
            "PMI632 902-00 (With Integrated LCD Backlight Boost + VSP/VSN ±5.5V Graphic Driver — 81-Ball WLCSP): Redmi Note 7, Note 7 Pro, Redmi Note 8, Note 8T, Redmi 7, Redmi 8, Redmi 8A, Realme 3 Pro, Realme 5, 5i, 5s, C3 (QCOM), Oppo A5 (2020), A9 (2020), A11, Vivo U10, U20, Y11 (2019), Samsung Galaxy A20s (SM-A207F), M11 (SM-M115F), A11 (SM-A115F), Honor 8C, Moto G7 / G8 Power",
            "❌ REJECTED TRAP (PMI632 502-00 vs 902-00): PMI632 502-00 (used in AMOLED phones like Mi A3, Mi CC9e, Realme XT/X2, Oppo K3, Reno2 Z/F) has NO internal LCD backlight boost — installing 502-00 into an IPS LCD phone gives NO BACKLIGHT!",
            "PM660 (002-00 / 001-01 Main PMIC) & PM660L (004-01 Sub-PMIC + LCD Bias/Flash/Backlight): Redmi Note 5 Pro, Note 6 Pro, Note 7 / 7 Pro, Mi 8 Lite, Mi A2, Poco F1, Realme 2 Pro, 3 Pro, 5 Pro, XT, Vivo V9, V11 Pro, Z1 Pro, Oppo K1, R15 Pro, Samsung Galaxy A70 (SM-A705F), A80, M40",
            "PM439 (Snapdragon 439 PMIC): Redmi 7A, Redmi 8, Redmi 8A, Vivo Y91i, Y93 (QCOM), Y95, Y11 (2019), Y12i, Samsung A01 (SM-A015F), M01 | PM6125 (Snapdragon 665 PMIC): Redmi Note 8/8T, Realme 5/5i/5s, Oppo A5/A9 2020, A52, Vivo Y50",
            "Qualcomm Flagship & Mid-Range Verified ICs: PM8350C-004 (Mi 11, S21 5G, OnePlus 9/9 Pro) | PM8550 (Xiaomi 13, S23 Ultra, OnePlus 11) | WCN7851-101 Wi-Fi 7 IC (Xiaomi 13/14, OnePlus 11/12, S24 Ultra) | [1205-006363] WCN3988 Wi-Fi IC (Galaxy A23 5G, A42 5G, A52 4G/5G, A72) | SMB1395-001 Charge Pump (Poco X3 Pro, Redmi Note 10 Pro, Mi 11 Lite) | PM7325 (Redmi Note 12 Pro+, Galaxy A52s 5G, M52 5G, Nothing Phone 1) | PM8150-103 (Poco F3, Poco X3 Pro, OnePlus 7 Pro/8, S20 FE 5G) | [1209-002780] AK09973D Hall Flip Sensor IC (Galaxy Z Fold3/4, Z Flip4)",
            "Audio Amplifier PA ICs: AW87319 / AW87318 / AW87339 (10-Pin Smart K-Charge Pump PA: Redmi 6A–9C, Note 7–9, Realme C2–C15, Oppo A5s–A15, Vivo Y12–Y20, Infinix Hot 8–10) | AW87359 / AW87519 / K318 (Class-D PA: Redmi Note 9 Pro–Note 13, Poco X3, Realme 6–C55, Oppo A53–A58, Hot 30/40) | NXP TFA9890 / TFA9872 / TFA9874 & Cirrus CS35L41 (Samsung A/S Series & iPhone)"
        ],
        "smartEn": "Crucial suffix rule: PMI632 902-00 includes internal LCD backlight boost + ±5.5V bias, while PMI632 502-00 (for AMOLED boards) lacks LCD boost and leaves IPS screens dark!",
        "smartUr": "PMI632 902-00 mein LCD light aur graphic section andar hota hai, jabke PMI632 502-00 (AMOLED) mein light section nahi hota—isliye LCD phone mein hamesha 902-00 hi lagayein!",
        "note": "🔬 IC-008 & Audio Rule: S2MU106X01 fixes water-damaged USB-C charging on Exynos A34/A35/A54/A55/M33/S23 FE. AW87319/K318 fixes 'Ringer OK, Tracks OK, But No Sound'.",
        "noteUr": "🔬 IC Usool: Samsung A34/A35/A54/A55 mein charging problem ke liye S2MU106X01 aur Android mein awaz band hone par AW87319/K318 Audio IC check karein."
    },
    {
        "type": "IC",
        "subCat": "IC",
        "title": "RF Network Transceiver & 4G/5G PA ICs: Qualcomm WTR2965, SDR660, SDR735, SDR425, MediaTek MT6177M vs MT6177W & MT6186MV",
        "size": "WTR2965 / SDR660 / SDR425 / MT6177",
        "conf": "High",
        "models": [
            "WTR2965 (Qualcomm 59-Ball WLCSP 4G LTE RF Transceiver IC — 100% Non-Encrypted Direct Swap): Redmi Note 4, Note 5, 5A, 4X, 6 Pro, 7, 7A, 8, 8A, Mi A1, Vivo Y53, Y55, Y71, Y85, Y91 (QCOM), Y93, Y95, Y11, Oppo A37, A57, A3s, A5, A7, A5 (2020), Realme 2, C1, 3i, Samsung Galaxy J4+, J6+, A01, A11, M11",
            "SDR660 (Qualcomm 140-Ball WLCSP RF Transceiver IC): Redmi Note 5 Pro, Note 6 Pro, Note 7, Note 7 Pro, Note 8, Note 8T, Note 9S, Note 9 Pro, Note 10 (4G), Poco M2 Pro, Poco M3, Redmi 9T, Mi A2, A3, Mi 8 Lite, Realme 2 Pro, 3 Pro, 5, 5i, 5 Pro, 6 Pro, 7i, 8i, C15 QCOM, C17, Oppo A9 (2020), A52, A53, A72, A74 4G, F11 Pro, F17, F19, Vivo V9, V11 Pro, V15 Pro, V17, V19, V20, Y20 (QCOM), Y50, Samsung A20s, A23, A52, A70, A71, A72, M31s, M51",
            "SDR425 Baseband / RF Transceiver IC: Oppo A32, Oppo A33, Oppo A41, Oppo A53, Oppo A73, Oppo A74, Oppo A95, Oppo F17, Realme 7i, Realme C15 Qcm, Realme C17, Vivo Y20 Qcm, Vivo Y20s Qcm, Vivo Y31 2021, Vivo Y51a, OnePlus Nord N100",
            "SDR735 / SDR735G (Qualcomm 5G / LTE Sub-6 RF Transceiver IC): Redmi Note 10 Pro, Note 11 Pro+ 5G, Note 12 Pro+ 5G, Note 13 Pro 5G, Poco X3 NFC, Poco X3 Pro, Poco F3, Poco F4, Poco X5 Pro, Poco X6 5G, Xiaomi Mi 10T, 11 Lite 5G NE, OnePlus Nord, Nord 2T, Nord CE 2/3, 8T, 9R, Samsung Galaxy A52s 5G (SM-A528B), A53 5G, A73 5G, M52 5G, M23 5G, F23 5G, S20 FE 5G (SM-G781B), S21 FE, Vivo V21e, Y200 5G, iQOO Z5/Z6 Pro, Nothing Phone (1)",
            "MT6177M vs MT6177W (MediaTek 4G RF Transceiver IC — Paired with MT6357CRV/MRV or MT6358W PMIC): Redmi 6, 6A, 9A, 9C, 9i, 9, Note 8 Pro, Note 9, 10A, 12C, Poco C3, C31, M2, Realme C2, C3, C11, C12, C15, C20, C21, C25, C55, 6i, 7i, Oppo A1k, A5s, A12, A15, A15s, A16, A17, A18, A31, A54, F9, F11, F15, Vivo Y12, Y15, Y17, Y19, Y20 MTK, Y21, Y30, S1, Samsung Galaxy A12 (SM-A125F), A02, A03s, A04e, A22 4G, A31, A32 4G, Infinix Smart 5/6/7, Hot 8–12, Tecno Spark 4–9 (❌ REJECTED TRAP: MT6177M and MT6177W have different internal pinouts and are NOT interchangeable!)",
            "MT6186MV / MT6190MV (MediaTek Helio G99/G100 & 5G Dimensity RF Transceiver IC): Redmi Note 10S, Note 10 5G, Note 11S, Note 11 Pro 4G/5G, Note 12 Pro 5G, Note 13 5G, Note 14 5G, Poco M4 Pro, X4 Pro, M6 Pro, X7, Realme 8, 8 5G, 9 Pro+, 10 4G, 11 5G, 11x, 12x, C65 5G, C67 5G, Oppo Reno5 Z–8 Z, A58, A78 5G, A79 5G, A98, A3 Pro, Samsung Galaxy A14 5G, A15 4G/5G, A16 4G/5G, A22 5G, A24, A32 5G, A34 5G, Infinix Note 30/40/50, Hot 40 Pro, Hot 50 Pro/Pro+, Tecno Pova 5/6, Spark 20 Pro",
            "4G / 2G Multiband RF Power Amplifier (PA) ICs: Skyworks SKY77916-21 = SKY77916-11 / SKY77643-21 / SKY77643-31 | Vanchip VC7643-62 = VC7643-63 / VC7916-51 | Qorvo QM56022 / QM77040 / RF5212A"
        ],
        "smartEn": "RF Transceivers (WTR2965, SDR660, SDR425, SDR735, MT6177M/W, MT6186MV) are NOT encrypted to the CPU and can be swapped cleanly from donor boards. Never mix MT6177M with MT6177W!",
        "smartUr": "Network ICs (WTR2965, SDR660, SDR425, MT6177M/W) kisi bhi donor board se nikal kar lagaye ja sakte hain. Dhyan rahe: MT6177M ki jagah MT6177W nahi chalta!",
        "note": "📡 RF Network Bench Rule: If Baseband is 'Unknown' or 'No Service', check 1.0V & 1.8V VREG RF supply rails from the PMIC before replacing the RF Transceiver.",
        "noteUr": "📡 Network Usool: 'No Service' ya 'Baseband Unknown' mein IC badalne se pehle Power IC se aane wale 1.0V aur 1.8V check karein."
    },
    {
        "type": "IC",
        "subCat": "IC",
        "title": "LCD Backlight Boost & 15-Ball Graphic Bias (±5.5V VSP/VSN) ICs, Samsung AMOLED SM3080 / S2DOS05, iPhone Board ICs & Camera LDOs (WL2866D = ET5907)",
        "size": "SM5109 / LM3697 / SM3080 / iPhone ICs",
        "conf": "High",
        "models": [
            "✅ SM5109 = NT50358A = TI TPS65132 = AW37501 = OCP2131 (15-Ball WLCSP 3x5 Dual-Output ±5.5V VSP/VSN LCD Graphic Bias Driver IC — 100% Direct Pin-to-Pin Swap Across All Android Brands!): Redmi 9A–14C, Note 8–10, Poco C3–C65, M2, M3, X3, Realme C2–C67, 5–9i, Oppo A5s–A98, Vivo Y11–Y75, Samsung A02s–A32 5G, M12–M33, Infinix Smart 5–20, Hot 8–60, Tecno Spark 5–40, itel A60/A70/P40/P55",
            "✅ LM3697 = KTD3137 = AW9961 = AW9962 = SGM3756 = MP3314 (6-Pin / 9-Ball WLCSP / DFN High-Voltage 22V–38V LED Backlight Boost Driver IC): Redmi 6A–13C, Note 9, Poco C3–M2, Realme C2–C55, Oppo A1k–A58, Vivo Y12–Y22, Y01–Y16, Samsung A02–A14, M12, Infinix Smart 6–9, Hot 10–50i, Tecno Spark 6–30, itel A60/P40",
            "SM3080 = S2DOS05 = S2DOS03 (Samsung Super AMOLED Octa Display PMIC — Generates ELVDD +4.6V, ELVSS -4.0V & AVDD +7.0V/+7.6V): Samsung Galaxy A15 4G/5G, A16 4G/5G, A22 4G, A24, A25, A26, A30–A36, A50–A56, A70–A73, M21, M30s, M31, M32, M51, S20–S25 Series",
            "Apple iPhone USB Charging, Tigris & Audio ICs: 1612A1 Hydra (iPhone 8–11 Pro Max, SE2) | 1614A1 Kraken (iPhone 12 Series) | 1616A0 (iPhone 13 Series) | 1618A0 (iPhone 14 Series) | SN2012027 USB-C Controller + 8N EEPROM (iPhone 15 & 16 Series) | SN2611 Tigris Charger (iPhone 11 & 12 Series) | 338S00739 Big Audio IC (iPhone 13, 14 & 15 Series) | 338S00537 Small Speaker Amp IC (iPhone 11, 12, 13, 14 & 15 Series)",
            "✅ WL2866D = ET5907 (20-Ball WLCSP 7-Channel Programmable Camera LDO Regulator — 1.05V/1.2V DVDD, 1.8V DOVDD, 2.8V AVDD): Shared across Xiaomi Redmi Note 10–14 Series, POCO X4–X6/M4–M6, Realme 8–12/C55, OPPO Reno/A-Series & Vivo"
        ],
        "smartEn": "The 15-ball Graphic Bias IC (SM5109 = NT50358A = TPS65132 = AW37501 = OCP2131) is 100% universal across all IPS LCD Android motherboards and generates the critical +5.5V (VSP) and -5.5V (VSN) rails.",
        "smartUr": "15-ball wali Graphic IC (SM5109 = NT50358A = TPS65132) har Android IPS LCD phone mein 100% same hoti hai aur +5.5V (VSP) / -5.5V (VSN) banati hai.",
        "note": "💡 Display & Backlight Golden Rule: Always inspect the 10uH/22uH Boost Coil and Schottky Rectifier Diode before replacing the Backlight IC!",
        "noteUr": "💡 Light IC Usool: Light IC badalne se pehle 10uH/22uH Boost Coil aur Diode zaroor check karein!"
    },

    // -------------------------------------------------------------------------
    // 6. SMD & FAST-CHARGING CIRCUIT REFERENCE TAB (TYPE: SMD)
    // -------------------------------------------------------------------------
    {
        "type": "SMD",
        "subCat": "SMD",
        "title": "SMD & Fast-Charging Circuit Reference: SC8551A/BQ25970, BQ25890H/SY6970, WS3210 28V OVP, 25V Bootstrap Cap (Fake Charge Fix), 1.0uH Coil & R010 Shunt",
        "size": "Charge Pumps, OVP, BTST Cap & Shunts",
        "conf": "High",
        "models": [
            "SMD-001 & SMD-002 — Dual-Phase Charge Pump ICs: SMB1395-001 / SMB1396 (Poco X3 Pro, Redmi Note 10 Pro, Mi 11 Lite) | SC8551A = TI BQ25970 = LN8000 (WLCSP-36 8A 2:1 Fast Charger Pump: Redmi Note 12/13 4G/5G, Poco X5, Realme 10 Pro+, Vivo V27)",
            "SMD-003 — TI BQ25890H = Silergy SY6970 = SGM41513 (WQFN-24 4x4mm I2C 3A–5A 18W Buck Charger + VPH_PWR IC): Xiaomi Redmi 10, Redmi 12, POCO M5, Realme C35, Realme C55, Tecno Spark 10/20, Infinix Hot 30/40",
            "SMD-004 — Willsemi WS3210 = Kinetic KTS1682 = FPF2280 = AW32905 (WLCSP-12 3x4-Ball 28V Over-Voltage Protection OVP Load Switch IC on USB-C VBUS): Redmi Note 13/14, Samsung Galaxy A15/A16/A26, OPPO A78/A79, Vivo Y20/Y28/Y29",
            "SMD-005 — CAP-0402-22NF-25V / 47nF 25V X5R/X7R (Charging IC Bootstrap Capacitor on BTST/BOOT to LX/SW Coil Node — All PMI632, PM7325, MT6360, MT6375, BQ25890, S2MU106 Boards): ⚠️ Degraded BTST cap causes 'Fake Charging' (icon shows, 0.00A–0.10A draw, % drops). Must replace with >=25V rated cap, NEVER a 6.3V cap!",
            "SMD-006 — IND-2016-1R0M-4A / 2520 1.0uH 4.5A Shielded Buck Inductor (VPH_PWR / VSYS Switching Coil): Open coil = 5V on VBUS but 0V on VPH_PWR (Dead phone)",
            "SMD-007 & SMD-008 — RES-0805-R010-1PCT / R005 (10mOhm / 5mOhm Current-Sense Shunt Resistor: Knocked-off shunt leaves phone dead on battery or stuck at 0% fuel gauge) | 10K/100K NTC Thermistor Divider (Fixes 'Battery Temperature Too Low / Too High') | 0-Ohm Battery Strip Fuse ('CLP'/'R010' fixes 'Works on Charger Only')"
        ],
        "smartEn": "70% of 'Fake Charging' faults (where charging icon appears but battery percentage never rises) are caused by a degraded 0402 22nF–47nF 25V Bootstrap Capacitor next to the VPH_PWR buck coil.",
        "smartUr": "70% 'Fake Charging' (charging nishan aata hai magar % nahi barhta) Charging IC ke paas lage chote 22nF–47nF 25V Bootstrap Capacitor (BTST) ko badalne se theek ho jati hai!",
        "note": "⚡ Technician Lifesaver: Never bypass a 28V OVP IC (WS3210) with a bare wire without installing a 5.6V Zener protection diode, or a bad car charger will fry the main PMIC!",
        "noteUr": "⚡ Usool: OVP IC (WS3210) par direct jumper lagane se bachain warna kharab charger seedha main Power IC jala dega."
    },

    // -------------------------------------------------------------------------
    // 7. FAULT & DIODE-MODE GR REFERENCE TAB (TYPE: GR — 12-SECTION MASTER VOLTAGE CHART)
    // -------------------------------------------------------------------------
    {
        "type": "GR",
        "subCat": "GR",
        "title": "12-Section Smartphone Motherboard Master Voltage & Cold Diode-Mode GR Chart: Power, PMIC, CPU, RAM, UFS, Display, Charging, Audio, Camera, RF, Sensors & Signals",
        "size": "12-Section Live Voltages (20V DC) & Cold GR",
        "conf": "High",
        "models": [
            "1. Power Section & Cold GR: VBAT (Battery) = 3.70V–4.40V (Cold GR 0.250V–0.600V; 0.000V = Short) | VPH_PWR (Power Path) = 3.70V–4.40V | VSYS (System Supply) = 3.70V–4.40V | RTC Power = 1.80V | Power Key (PWRKEY) = 1.80V | Battery ID Line = 0.60V | Battery NTC Thermistor = 0.50V–1.20V",
            "2. PMIC (Buck & LDO) Output Voltages: VDD_CORE = 0.80V | VDD_CPU = 0.90V | VDD_G3D (GPU) = 0.95V | VDD_MEM = 1.05V | VDDQ = 1.10V | VIO18_PMU / VDDIO = 1.80V | VIO28_PMU = 2.80V | VDD_SIM = 1.80V (or 3.0V) | VDD_RTC = 1.80V",
            "3. CPU / AP Section: VDD_CPU = 0.90V | VDD_CORE = 0.80V | VDD_G3D = 0.95V | VDD_MEM = 1.05V | VDDQ = 1.10V | VDDIO = 1.80V | VDD_APC = 1.80V",
            "4. RAM (LPDDR4X / LPDDR5) Section: VDD1 (Core) = 1.80V / 0.85V | VDD2 (Core) = 1.10V / 0.85V | VDDQ = 0.60V–1.10V | VPP1 / VPP2 = 1.80V | VREF_CA / VREF_DQ = 0.30V | CLK_VDD = 0.60V",
            "5. UFS / eMMC Flash Storage Section: UFS VCC = 2.80V (2.7V–3.6V) | UFS VCCQ = 1.20V | UFS VCCQ2 = 1.80V / 1.20V | UFS VCC_PLL = 1.00V | UFS VCC_PA / VCC_LDO / VCC_IO = 1.80V | UFS REF_CLK = 1.80V | UFS RESET_N = 1.80V",
            "6. Display Section (IPS LCD vs Super AMOLED): LCD VDD = 3.00V | LCD VDDIO = 1.80V | LCD AVDD / VSP = +5.50V to +6.00V | LCD AVEE / VSN = -5.50V to -6.00V | LCD VGH = +15.00V | LCD VGL = -10.00V | AMOLED AVDD = +5.50V to +7.00V | AMOLED ELVDD = +4.60V to +6.00V | AMOLED ELVSS = -4.00V to -6.00V | MIPI IOVDD = 1.80V | MIPI VDD = 1.20V | DISPLAY RESET = 1.80V",
            "7. Charging & USB-C Section: USB VBUS / CHG IC VIN = 5.00V (9V–20V PD/VOOC) | CHG IC SYS = 4.20V | CHG IC BAT = 3.70V–4.40V | CHG IC VDDP = 4.50V | USB D+ / D- Line = 0.60V (Cold GR 450–750mV symmetrical) | CC1 / CC2 Line = 1.20V | VCONN = 5.00V",
            "8. Audio Section: SPK AMP VDD = 6.00V | SPK AMP PVDD = 7.00V | CODEC AVDD = 1.80V | CODEC DVDD = 1.20V | MIC BIAS = 1.80V–2.80V | EARPIECE VDD = 1.80V | HP OUT / SPK OUT (DC) = 0.60V",
            "9. Camera Section: CAM AVDD = 2.80V | CAM DVDD = 1.05V–1.20V | CAM IOVDD = 1.80V | CAM AF VDD / AF Driver = 2.80V | FLASH VDD = 6.00V | MIPI IOVDD = 1.80V | MIPI VDD = 1.20V",
            "10. Network / RF Section: RF VDD / RF VDDIO / RF XO = 1.80V | PA VBAT = 3.70V–4.40V | PA VCC / LNA VCC / ANT SW VDD = 1.80V | SIM VCC / SIM CLK / SIM RESET / SIM IO = 1.80V",
            "11. Sensors & 12. Important Control Signals (All 1.80V Logic): Accelerometer / Gyro / Proximity / Light / Magnetic Hall / Barometer / Fingerprint VDD & IOVDD = 1.80V | Control Signals: PWRKEY = 1.80V, RESET_N = 1.80V, AP_PS_HOLD = 1.80V, SYS_OK = 1.80V, PON = 1.80V, INT_N = 1.80V, SPMI CLK / DATA = 1.80V, I2C SDA / SCL = 1.80V",
            "Keypad Hardware Solutions: Nokia BL-5C BSI = 82 kOhm | BL-4B BSI = 68 kOhm | Nokia 105 / itel 12-Pin White LCD Fix: Pins 2 & 3 = 1.8V VIO / 2.8V VLED, Pins 4–7 = SPI Data/Clock/CS/Reset (~450–650 GR)"
        ],
        "smartEn": "Complete 12-section bench voltage reference. For live voltage testing, set multimeter to 20V DC (Black probe on GND). For Cold Diode-Mode GR testing, disconnect battery/charger and place Red probe on GND.",
        "smartUr": "Poore motherboard ke 12 sections ka voltage chart. Voltage check karne ke liye meter 20V DC par rakhein (Black probe Ground par). Cold GR check karne ke liye battery nikal kar Red probe Ground par rakhein.",
        "note": "⚠️ 12-Section Voltage & GR Rule: Always check VPH_PWR / VSYS (3.7V–4.2V), PWRKEY (1.8V), and AP_PS_HOLD (1.8V) in sequence before reballing any PMIC or CPU!",
        "noteUr": "⚠️ Multimeter Usool: Kisi bhi IC ko utarne se pehle VPH_PWR (3.7V–4.2V), PWRKEY (1.8V) aur PS_HOLD (1.8V) zaroor napain!"
    },

    // -------------------------------------------------------------------------
    // 8. DIAGNOSTIC CODES & BGA STENCILS TAB (TYPE: CODE)
    // -------------------------------------------------------------------------
    {
        "type": "CODE",
        "subCat": "CODE",
        "title": "Verified USSD Hardware Diagnostic Codes: Samsung One UI 8, Xiaomi HyperOS CIT, OPPO/Realme, Sony Xperia, iPhone Secret Codes, Data-Wipe Warning & YCS Stencils",
        "size": "Hardware Test Codes & 50µm BGA Stencils",
        "conf": "High",
        "models": [
            "CDS-001 — Samsung Hardware Diagnostic Menu: Dial *#0*# (Tests RGB OLED pixels, Touch grid, Receiver, Speaker, Grip, S-Pen), *#0283# (Mic-to-Earpiece/Speaker Audio Loopback), *#1234# (AP/CP/CSC Firmware Version), *#12580*369# (SW & HW Mainboard Version), *#0808# (USB Settings), *#9090# / *#*#197328640#*#* (Service Mode) | ⚠️ On One UI 6/7/8 (2024–2026), turn OFF 'Auto Blocker' in Settings -> Security and Privacy first!",
            "CDS-002 — Xiaomi / Redmi / POCO CIT Hardware Test & Optical FP Calibration (MIUI / HyperOS 1–3): Dial *#*#6484#*#* or *#*#64663#*#* (Or tap 'Kernel version' 5x in Settings -> About Phone -> '...' menu -> Additional Tools for Proximity & Under-Display Fingerprint Calibration)",
            "CDS-003 — OPPO / Realme / OnePlus ProjectMenu / EngineerMode (ColorOS 11–16 / Realme UI / OxygenOS): Dial *#899# or *#808# -> 'Manual Test' / 'After-Sale Device Calibration' (Tests LCD/OLED, SuperVOOC Voltage/Current, Camera & PCB Version)",
            "CDS-004 — Sony Xperia Service Menu (Xperia 1 IV/V/VI, 5 IV/V, 10 V/VI): Dial *#*#7378423#*#* -> Service Tests (Touchscreen, Display, Speaker, Mic & Barometer Water-Resistance Pressure Test)",
            "CDS-005 — iPhone Essential Secret Codes: *#06# (IMEI / MEID) | *#07# (Legal & Regulatory Info) | *3001#12345#* (Field Test / Cellular RSRP & Network Info) | *#21# (Call Forwarding Status) | *#61# (No Answer Forwarding) | *#62# (Unreachable Forwarding) | *#67# (Busy Forwarding) | *#43# (Call Waiting Status) | *#33# (Call Barring Status)",
            "CDS-006 — MediaTek EngineerMode (*#*#3646633#*#* — Tecno, Infinix, itel, Lava) | Vivo/iQOO (*#558# or *#*#4838#*#*) | Motorola (##772# or ##2886#)",
            "🔴 CRITICAL DATA-WIPE WARNING CODES: *#*#7780#*#* (Factory Data Reset) & *2767*3855# (Full Factory Format / Deep EMMC Wipe — DO NOT DIAL on customer phones without backup & consent as it erases data immediately!)",
            "CDS-007 — YCS Mr.Yang Qualcomm Comprehensive BGA Reballing Stencil Set-05 (SKU: YDZGT9140107006 / AMA0E-QC-8G2-8G3 — 50µm AISI 304L Medical-Grade Steel): Fits Snapdragon 8 Gen 2 (SM8550), 8 Gen 3 (SM8650), 7+ Gen 3, 6 Gen 1, SA8775P, PM8350C, PM8550, PM7325 & WCN7851"
        ],
        "smartEn": "On Samsung One UI 6/7/8, USSD codes like *#0*# and *#0808# are blocked by default until you disable 'Auto Blocker' in Settings -> Security and Privacy.",
        "smartUr": "Samsung One UI 6/7/8 mein *#0*# code tab tak kaam nahi karta jab tak aap Settings -> Security and Privacy mein jakar 'Auto Blocker' ko OFF na kar dein!",
        "note": "🔢 Calibration Rule: Always run Xiaomi CIT (*#*#6484#*#*) or OPPO/Realme (*#899#) optical fingerprint calibration after replacing an AMOLED screen!",
        "noteUr": "🔢 Calibration Usool: AMOLED combo badalne ke baad Xiaomi mein *#*#6484#*#* aur OPPO/Realme mein *#899# se fingerprint calibrate zaroor karein!"
    }
    ,
    // -------------------------------------------------------------------------
    // 9. NOV 11 2026 DEEP RESEARCH BOARD EXPANSION: UFS 2.2/3.1, BGA-254 eMCP,
    //    IPHONE BGA-110/315 NAND, PM6225/PM6350, S2MU106X01 (#1203-009213),
    //    SC8547, 338S00817, SAMSUNG BTB SOCKETS & DIGITAL MICS
    // -------------------------------------------------------------------------
    {
        "type": "IC",
        "subCat": "IC",
        "title": "🆕 [11 NOV 2026 VERIFIED] BGA-153 UFS 2.1 / 2.2 / 3.1 & BGA-254 eMCP Cross-Brand Storage IC Matrix (Samsung, Kioxia, SK Hynix & Micron)",
        "size": "BGA-153 UFS & BGA-254 eMCP (64GB / 128GB / 256GB)",
        "conf": "High",
        "models": [
            "BGA-254 eMCP (64GB Storage + 4GB LPDDR4X RAM): Samsung KMDP6001DA-B425 = KMDP60018M-B425 = Micron MT29VZZZAD8GQFSL = SK Hynix H9HP52ACPMMDAR (Direct Swap on Redmi Note 8 Pro, Redmi 9, Redmi 9A/9C, Realme C3/C11/C12/C15, OPPO A15/A31/A54, Vivo Y12/Y15/Y17/Y20/Y30)",
            "BGA-254 eMCP (128GB Storage + 6GB/8GB LPDDR4X RAM): Samsung KMDH6001DA-B422 = KMGP6001BM-B514 = KMDV6001DM-B620 = Micron MT29VZZZCD9GQFSL (Verify MediaTek Preloader CID table in EasyJTAG / UFI / Medusa Pro II before soldering!)",
            "BGA-153 UFS 2.1 / 2.2 Dedicated 128GB Storage (No RAM Inside): Samsung KLUDG4UHDC-B0E1 = KLUDG4U1EA-B0C1 = Kioxia THGJFGT0T44BAIL = SK Hynix H28S7Q302BMR = Micron MT128GASAO4U21 (Used in Redmi Note 10 Pro, Note 11/12/13, POCO X3/X4 Pro/X5, Samsung Galaxy A34/A52/A53/A54, Realme 8/9/10/11)",
            "BGA-153 UFS 3.1 Dedicated 128GB / 256GB Storage: Samsung KLUDG8V1EE-B0C1 (128GB) / KLUEG8UHDB-C2D1 (256GB) = SK Hynix HN8T05DEHKX073 = Micron MT256GASAO8U31 (Used in POCO F3/F4/X3 Pro, Xiaomi 11T/12T, OnePlus 8T/9/9R/10R, Samsung S20 FE / S21 / S22)",
            "Apple iPhone BGA-110 vs BGA-315 PCIe NVMe NAND Generation Matrix: [BGA-110 Gen1: iPhone 8 / 8 Plus / X — Requires JC P13 / QianLi SysCfg programmer] | [BGA-110 PCIe Gen2: iPhone XR / XS / XS Max / 11 / 11 Pro / 11 Pro Max / SE 2020 — No programmer unbinding needed on iOS 15+ 3uTools/iTunes restore!] | [BGA-315: iPhone 12 / 13 / 14 / 15 / 16 Series — Kioxia K5A4RB6302CA12304 / SanDisk 128GB–512GB]"
        ],
        "smartEn": "BGA-254 combines storage + RAM (eMCP/uMCP), whereas BGA-153 is standalone storage (eMMC/UFS). On iPhone XR, XS, and 11 series, replacing or upgrading a BGA-110 NAND chip no longer requires programmer SysCfg unbinding—simply flash iOS via 3uTools or iTunes!",
        "smartUr": "BGA-254 mein memory aur RAM ikatthe hote hain (eMCP), jabke BGA-153 sirf memory hoti hai (UFS/eMMC). iPhone XR, XS aur 11 series mein naya NAND lagane par programmer ki zaroorat nahi hoti, seedha 3uTools se flash karein!",
        "note": "🔬 UFS / eMCP Swap Rule: On Qualcomm CPU boards, UFS LUN0–LUN5 partition configuration and RPMB state must be clean; on MediaTek boards, ensure the new eMCP CID is listed in the stock EMI/Preloader file.",
        "noteUr": "🔬 UFS / eMCP Usool: MediaTek phones mein naya IC lagate waqt Preloader mein uska CID supported hona zaroori hai, aur Qualcomm mein RPMB clean hona chahiye."
    },
    {
        "type": "IC",
        "subCat": "IC",
        "title": "🆕 [11 NOV 2026 VERIFIED] Qualcomm PM6225 (Snapdragon 680/685) vs PM6350 (5G), Samsung S2MU106X01 (#1203-009213 Extended), SMA1301 & Apple 338S00817",
        "size": "PM6225 / PM6350 / S2MU106X01 / SC8547",
        "conf": "High",
        "models": [
            "Qualcomm PM6225 (001 / 102 — Snapdragon 680 / 685 6nm Main PMIC): Xiaomi Redmi Note 11 4G, Redmi Note 12 4G, Redmi Note 13 4G, OPPO A36, OPPO A76, OPPO K10, Realme 9i, Vivo Y32, Vivo Y35 4G, Huawei Nova 9 SE, Huawei Mate 40 Pro 4G (⚠️ Distinct from older PM4250!)",
            "Qualcomm PM6350 (000 / 102 — Snapdragon 480 / 690 / 750G 5G Main PMIC): Xiaomi Redmi Note 9 5G / Note 9T 5G, Redmi Note 10 5G, Mi 10i / Mi 10T Lite 5G, OPPO A93 5G, OPPO A53s 5G, OPPO A54 5G, OnePlus Nord N10 5G, OnePlus Nord CE 5G, Samsung Galaxy A42 5G (SM-A426B), Galaxy A52 5G (SM-A526B), Motorola Moto G 5G, Honor V40 Lite",
            "Samsung S2MU106X01 (Official Samsung Part #1203-009213 — Extended 21-Model IF-PMIC & USB-C Charging Supervisor List): Samsung Galaxy A10 (SM-A105F), Galaxy A23 4G (SM-A235F), Galaxy A23 5G (SM-A236B), Galaxy A30 (SM-A305F), Galaxy A30s (SM-A307F), Galaxy A31 (SM-A315F), Galaxy A33 5G (SM-A336B), Galaxy A34 5G (SM-A346B), Galaxy A35 5G (SM-A356B), Galaxy A40 (SM-A405F), Galaxy A50 (SM-A505F), Galaxy A54 5G (SM-A546B), Galaxy A55 5G (SM-A556B), Galaxy M31s (SM-M317F), Galaxy M33 5G (SM-M336B), Galaxy XCover 5 (SM-G525F), Galaxy S10e / S10 / S10+, Galaxy S23 FE, Galaxy S24",
            "Samsung Legacy IF-PMICs (S2MU005X03 & S2MU004X-C): S2MU005X03 fits Galaxy J5 Pro (J530), J7 Pro (J730), J2 Prime (G532), J4+ (J415), J6+ (J610) | S2MU004X-C fits Galaxy J5 Prime (G570F), A3 2017 (A320F), A5 2017 (A520F), A7 2017 (A720F)",
            "Samsung SMA1301 (Official Audio Speaker Amplifier IC): Samsung Galaxy A10 (SM-A105F) = Galaxy A50 (SM-A505F) = Galaxy S10e (SM-G970F) = Galaxy S10 (SM-G973F) = Galaxy S10+ (SM-G975F)",
            "Southchip SC8547 (66W / SuperVOOC Fast Charge Pump IC) & Apple 338S00817 (iPhone 13 Wireless/Fast Charger IC): SC8547 fits Honor 50, Huawei Nova 8/9, OPPO Reno 6/7/8/9/10, Realme GT Master / 10 Pro+ / 11 Pro, Vivo V25/V27 | 338S00817 fits Apple iPhone 13, 13 mini, 13 Pro, 13 Pro Max"
        ],
        "smartEn": "Official Samsung part #1203-009213 (S2MU106X01) is verified across 21 Galaxy A, M, XCover, and S series models. PM6225 powers 6nm Snapdragon 680/685 boards (Note 11/12/13 4G) and must not be confused with PM4250.",
        "smartUr": "Samsung part #1203-009213 (S2MU106X01) 21 se zyada Samsung models (A10, A23, A30s, A31, A33, A34, A35, A50, A54, A55, S10, S24) mein charging aur power control karta hai!",
        "note": "🔬 Chip Revision Rule: Match PM6225 (001 vs 102) and PM6350 (000 vs 102) revision codes when pulling from donor boards.",
        "noteUr": "🔬 IC Revision Usool: Donor board se PM6225 ya PM6350 nikalte waqt 001/102 number zaroor milayein."
    },
    {
        "type": "FLEX",
        "subCat": "FLEX",
        "title": "🆕 [11 NOV 2026 VERIFIED] E-Matrix Samsung Official BTB Motherboard Sockets (2x12 Pin 70039079, 2x20 Pin 70039083, Battery BTB 70041716) & Digital SMD Mic (70039077)",
        "size": "24-Pin / 40-Pin / Battery BTB & SMD Mic",
        "conf": "High",
        "models": [
            "Samsung 2x12 Pin (24-Pin, 0.4mm Pitch) Board-to-Board FPC Socket (Part #70039079): Samsung Galaxy A04s (SM-A047F) = Galaxy A15 4G (SM-A155F) = Galaxy A15 5G (SM-A156B) = Galaxy A16 4G (SM-A165F) = Galaxy A16 5G (SM-A166B)",
            "Samsung 2x20 Pin (40-Pin, 0.4mm Pitch) Board-to-Board FPC Socket (Part #70039083): Samsung Galaxy A16 5G (SM-A166B) = Galaxy A25 5G (SM-A256B) = Galaxy A34 5G (SM-A346B) = Galaxy A35 5G (SM-A356B) = Galaxy A54 5G (SM-A546B) = Galaxy A55 5G (SM-A556B)",
            "Samsung Universal Battery BTB Motherboard Connector (Part #70041716): Samsung Galaxy A36 5G (SM-A366B) = Galaxy A37 = Galaxy A56 5G (SM-A566B) = Galaxy A57 = Galaxy S22 / S22+ / S22 Ultra = Galaxy S23+ / S23 Ultra = Galaxy S25 Edge",
            "Samsung Main Flex Motherboard Connector (Part #70038849): Samsung Galaxy A36 5G (SM-A366B) = Galaxy A56 5G (SM-A566B)",
            "Samsung Original Digital SMD Microphone Module (Part #70039077): Samsung Galaxy A16 5G (SM-A166B) = Galaxy A26 5G (SM-A266B) = Galaxy A35 5G (SM-A356B) = Galaxy A36 5G (SM-A366B) = Galaxy A54 5G (SM-A546B) = Galaxy A55 5G (SM-A556B) = Galaxy A56 5G (SM-A566B)"
        ],
        "smartEn": "Exact European service-center part numbers (#70039079, #70039083, #70041716, #70039077) for Samsung A-series and S-series motherboard BTB sockets and digital MEMS microphones.",
        "smartUr": "Samsung A04s se lekar A56 aur S22–S25 tak ke motherboard BTB connectors (24-pin, 40-pin, Battery jack) aur Digital Mic (#70039077) ka exact cross-match chart!",
        "note": "🎙️ SMD Mic & BTB Soldering Tip: When replacing Samsung Digital Mic #70039077 on a sub-board, seal the acoustic hole with Kapton tape and solder from the bottom of the PCB at 260°C—never let flux enter the mic port!",
        "noteUr": "🎙️ Digital Mic Tip: Samsung ka digital mic (#70039077) lagate waqt uske surakh par Kapton tape lagayein aur niche se heat dein taake paste andar na jaye!"
    }
    ,
    // -------------------------------------------------------------------------
    // 10. STEP 2 EXPANSION: DEAD SHORT KILLER, VOLTAGE INJECTION & MODEL-SPECIFIC SHORTED CAPS
    // -------------------------------------------------------------------------
    {
        "type": "SMD",
        "subCat": "SMD",
        "title": "🔥 [STEP 2 VERIFIED] Dead Short Killer & Safe Voltage Injection Protocol (Primary VBAT/VPH_PWR vs Secondary 1.8V/0.8V LDO Rails)",
        "size": "4.0V/3A vs 1.2V/2A Injection Rules",
        "conf": "High",
        "models": [
            "1. Primary Rail Short (VBAT / VPH_PWR / VSYS = 0.000V Cold GR, Immediate 3A–5A Draw on DC Supply BEFORE pressing Power): Inject 3.8V to 4.2V (3A–5A limit) directly onto VBAT+ or VPH_PWR coil after lifting the coil to isolate the Charging IC side from the Load side!",
            "2. Secondary Rail Short (VBAT GR is normal 300–550mV, 0.00A before Power, jumps to 150mA–600mA or drops to 0A AFTER pressing Power): Lift PMIC Buck Coils one by one to find the 0.000V shorted rail. ⚠️ NEVER inject 4.0V into a CPU/RAM buck rail! Inject ONLY 0.8V–1.1V (for VDD_CORE/MODEM/RAM) or 1.8V (for VIO18/VDDIO) at 1.5A–2.5A!",
            "3. Rosin Flux Smoke & Thermal Camera Method: Coat suspect PA / PMIC / Backlight capacitor bank with thick white rosin smoke (soldering iron at 350°C), tap DC supply ground probe briefly (0.5 sec pulses), and remove the first ceramic capacitor that melts the rosin!",
            "4. Half-Short / Leakage Diagnosis (DC Supply shows 0.01A–0.08A / 10mA–80mA automatic leakage before pressing Power): Usually caused by water-damaged 15-ball Graphic Bias IC (SM5109), Backlight Boost Diode, RF 4G PA (SKY77916 / VC7643), or OTG VBUS capacitor."
        ],
        "smartEn": "Always lift the VPH_PWR coil first to see which side of the pad is shorted to ground, and never inject more than 1.0V into low-voltage CPU/RAM secondary buck rails!",
        "smartUr": "Full shorting mein pehle VPH_PWR coil utar kar check karein ke shorting Charging IC wali side par hai ya agay board mein. CPU/RAM wali 0.8V/1.8V lines mein kabhi 4V inject na karein!",
        "note": "🔥 Short Killer Safety Rule: Never use a high-amp Short Killer box directly on the battery connector when the short is on the secondary PMIC output—it will burn PCB internal copper traces!",
        "noteUr": "🔥 Short Killer Usool: Secondary shorting mein battery connector par direct Short Killer na lagayein, warna board ke andar ki lines jal jayengi."
    },
    {
        "type": "SMD",
        "subCat": "SMD",
        "title": "🔥 [STEP 2 VERIFIED] Top 30 High-Failure Shorted Capacitors by Phone Model (Samsung, Redmi/POCO, Vivo, OPPO/Realme & Infinix/Tecno)",
        "size": "Model-Specific Shorted Cap Locations",
        "conf": "High",
        "models": [
            "Samsung Galaxy A12 (SM-A125F) / A02s / A03s / M12 Dead Short: 90% of full VPH_PWR shorts are caused by the two large 0603/0805 filter capacitors right next to the 4G RF PA (SKY77643) or the Backlight Boost Coil near the LCD BTB!",
            "Samsung Galaxy A20 / A30 / A30s / A50 / A51 / A32 / A52s Dead Short: Check the VBAT filter capacitor bank next to S2MU106X01 / SM3080 OCTA Display PMIC and the bottom sub-board flex BTB capacitor.",
            "Xiaomi Redmi 9A / 9C / 9i / 10A / POCO C3 / C31 Dead Short: Check the VPH_PWR capacitor next to MT6357CRV PMIC and the 2G/4G RF PA input capacitor (top right of board under RF shield).",
            "Xiaomi Redmi Note 9 Pro / Note 9S / Note 10 / Note 10 Pro / POCO X3 / M2 Pro Dead Short: Check the filter capacitors around PM7150 / PM7150A charging coil, Audio PA (AW87359/CS35L41) VPH rail, and Camera Flash LED driver capacitor.",
            "Xiaomi Redmi 12 / 12C / 13C / 14C / POCO C55 / C65 / C75 Dead Short: Inspect the VBUS 28V OVP (WS3210) output cap and VPH_PWR buck capacitor next to BQ25890H / SY6970 / MT6358W.",
            "Vivo Y12 / Y15 / Y17 / Y20 / Y21 / Y33s & OPPO A15 / A16 / A54 / A57 / Realme C11–C55 Dead Short: Check the 22V–38V Backlight Schottky Diode + output filter capacitor and the 15-ball Graphic Bias IC (SM5109) VPH input capacitor.",
            "Infinix Smart 6 / 7 / 8 & Hot 10 / 12 / 30 / 40 & Tecno Spark 7–20 Dead Short: Check the Audio Ringer PA (AW87319) VBAT filter capacitor and the main VBAT TVS surge diode right next to the battery BTB socket!"
        ],
        "smartEn": "Pinpoints the exact high-failure VBAT and VPH_PWR ceramic capacitors that short out most frequently on popular daily workshop models—saving you from lifting the main PMIC or CPU.",
        "smartUr": "Rozana dukan par aane wale Samsung, Redmi, Vivo, OPPO aur Infinix models mein sab se zyada short hone wale exact capacitors ki list—taake bina wajah Power IC na utarna pare!",
        "note": "⚡ Bench Tip: After removing a shorted VPH_PWR filter capacitor and confirming the short is gone (Cold GR returns to 300–500mV), always install a replacement capacitor from a donor board if it sits on a switching buck/boost rail.",
        "noteUr": "⚡ Tip: Short capacitor nikalne ke baad agar meter par GR wapas 300–500 aa jaye, toh buck/boost coil ke paas donor board se doosra capacitor zaroor lagayein."
    }
    ,
    // -------------------------------------------------------------------------
    // 11. V16.5 MASTER BOARD EXPANSION (13 NOV 2026): MICRON 128GB EMMC/UFS CODES,
    //     VC7645 & QDM2310 PA ICs, TSR 20-GROUP REDMI/POCO POWER FLEX, GUJJU TYPE-C
    //     JACKS & GOOGLE SEARCH CONSOLE BOARD DIAGNOSTICS
    // -------------------------------------------------------------------------
    {
        "type": "IC",
        "subCat": "IC",
        "title": "🆕 [13 NOV PHOTO VERIFIED] Micron 128GB eMMC / UFS Flash Storage Short-Code Decoder (16 Scrap Motherboard Identification Codes — GTech Verified)",
        "size": "Micron 128GB BGA eMMC / UFS Codes (JZ100–JZ496)",
        "conf": "High",
        "models": [
            "Chip Marking Example: 3PB2D JZ496 (H1NPVA7EONON / C.G.MVJOWEER608) = 128GB Micron eMMC / UFS Storage IC",
            "1. JZ100 = 128GB Micron eMMC / UFS Flash IC | 2. JZ103 = 128GB Micron eMMC / UFS Flash IC",
            "3. JZ144 = 128GB Micron eMMC / UFS Flash IC | 4. JZ150 = 128GB Micron eMMC / UFS Flash IC",
            "5. JZ151 = 128GB Micron eMMC / UFS Flash IC | 6. JZ152 = 128GB Micron eMMC / UFS Flash IC",
            "7. JZ153 = 128GB Micron eMMC / UFS Flash IC | 8. JZ154 = 128GB Micron eMMC / UFS Flash IC",
            "9. JZ156 = 128GB Micron eMMC / UFS Flash IC | 10. JZ244 = 128GB Micron eMMC / UFS Flash IC",
            "11. JZ234 = 128GB Micron eMMC / UFS Flash IC | 12. JZ341 = 128GB Micron eMMC / UFS Flash IC",
            "13. JZ380 = 128GB Micron eMMC / UFS Flash IC | 14. JZ386 = 128GB Micron eMMC / UFS Flash IC",
            "15. JZ494 = 128GB Micron eMMC / UFS Flash IC | 16. JZ496 (3PB2D) = 128GB Micron eMMC / UFS Flash IC"
        ],
        "smartEn": "Micron does not print '128GB' on mobile BGA memory chips—instead it prints short FBGA codes starting with 'JZ' (JZ100 to JZ496). Use this decoder to identify 128GB Micron storage chips on donor boards in 1 second!",
        "smartUr": "Micron ki memory ICs ke upar '128GB' nahi likha hota balki JZ100 se JZ496 tak yeh 16 short codes likhe hote hain. Is chart se aap scrap board par lagi 128GB IC foran pehchan sakte hain!",
        "note": "🔬 Micron FBGA Decoder Rule: Pair this Micron 128GB JZ-code list with our 64GB iPhone NAND JZ-code list (Note: JZ023/JZ049/JZ050/JZ109/JZ128/JZ167/JZ177/JZ178/JZ186/JZ442/JZ495 are 64GB Apple NAND, whereas Micron M-logo JZ100/103/144/150–156/234/244/341/380/386/494/496 are 128GB!).",
        "noteUr": "🔬 Micron IC Usool: IC ke upar 'M' (Micron) ka nishan aur JZ100–JZ496 code dekh kar 128GB memory confirm karein."
    },
    {
        "type": "IC",
        "subCat": "IC",
        "title": "🆕 [13 NOV PHOTO VERIFIED] Vanchip VC7645 (33-Model 4G PA IC) & Qualcomm QDM2310 (82-Model 5G RF Front-End Module PA IC) Master Compatibility List",
        "size": "VC7645 (4G PA) & QDM2310 (5G RF FEM)",
        "conf": "High",
        "models": [
            "Vanchip VC7645 RF Power Amplifier (PA) IC — 33 Verified Models: Tecno Camon 12 Air (CC6), Camon 15 (CD7), Camon 17P (CG7), Camon Ace (IN1), Camon SKY (IN1 Pro), Tecno F4, F4 Pro, R8S | Hotwav Pearl M5 | Infinix Hot 6 Pro (X608), Hot 6X (X623), Hot 8 (X650B/X650C), Hot 9 (X655C), Hot S3 (X573), Note 7 Lite (X656), S5 Lite (X652B), Smart 2 (X5515) | itel A62, itel S21 | Lenovo K10 Note, K5 Pro, K9 Pro, S5 (K520), Z14 Youth, Z6 Lite (L38111), Z6 Youth | Meizu M6 | Motorola Moto E5, E5 Play, E5 Plus, Moto G6 Play, Moto G7 Play",
            "Qualcomm QDM2310 5G RF Front-End Module / PA IC — 82 Verified Models: Realme (V15, X7 India) | Vivo (T1 5G, V21 5G, V25, V25 Pro, X50 5G, X50 Pro, X50 Pro+, X50e, X60, X70 Pro+, Y75 5G, Y76 5G) | Asus (ROG Phone ZS661KS, ZenFone 7 ZS670KS) | Huawei / Honor (Honor V40 Lite, Nova 9Z, P40 Pro, Enjoy 50 Plus) | Meizu (17 Pro, 18 Pro) | OnePlus Nord CE 3 Lite | OPPO (A72, A92s, Find X2 Lite, K10 5G China, Reno 3 Youth, Reno 4 5G, Reno 4Z 5G, Reno 5 5G) | Xiaomi / Redmi / POCO (Black Shark 3/4/4 Pro/4S Pro, Mi 10 5G, Mi 10 Pro 5G, Mi 10i 5G, Mi 10T, Mi 10T Pro, Mi 11, Mi 11 Lite 5G, Mi 11 Pro, Mi 11 Ultra, Mi 11i, Mi 11i 5G, Mi 11T Pro, Mi 11X, Mi 11X Pro, Mi 12, Mi 12 Lite, Mi 12 Pro, Mi 12T Pro, Civi, Civi 2, Mix 4, Mix Fold 2, Poco F4 Pro, Poco F3, Poco F5, Poco F5 Pro, Poco X4 GT, Poco X5 5G, Poco X5 Pro, Redmi K30 5G, K30 Pro, K30S, K40, K50i, Note 11 Pro MTK/Plus, Note 11T Pro/Pro+, Note 12 5G, Note 12 Pro/Pro+/Explorer/Turbo, Note 12R Pro) | ZTE nubia RedMagic 5G & RedMagic 5S",
            "Google Pixel Tensor PMICs & Baseband Reference: Pixel 6 / 6a / 6 Pro = S2MPG10 & S2MPG11 PMIC | Pixel 7 / 7a / 7 Pro = S2MPG12 & S2MPG13 PMIC | Pixel 8 / 8a / 8 Pro = S2MPG14 & S2MPG15 PMIC"
        ],
        "smartEn": "VC7645 is a direct-swap 4G RF PA across 33 Tecno, Infinix, itel, Lenovo, and Moto boards; QDM2310 is a universal 5G RF front-end module shared across 82 Xiaomi, POCO, Vivo, OPPO, Realme, and ROG 5G flagships!",
        "smartUr": "VC7645 Network PA IC 33 Tecno, Infinix, itel aur Moto models mein lagta hai; aur QDM2310 5G Network IC 82 Xiaomi, Poco, Vivo, OPPO aur Realme 5G phones mein 100% same hai!",
        "note": "📡 RF PA Swap Rule: If a 4G/5G phone shows 'Emergency Calls Only' or weak network after a drop or water damage, check VPH_PWR on VC7645 / QDM2310 before replacing the IC at 340°C.",
        "noteUr": "📡 Network PA Usool: 'No Service' ya network week hone par VC7645 / QDM2310 ke paas VPH_PWR voltage check karein."
    },
    {
        "type": "FLEX",
        "subCat": "FLEX",
        "title": "🆕 [13 NOV PHOTO & SEARCH CONSOLE VERIFIED] TSR 20-Group Xiaomi Redmi / POCO Universal Power/Volume Flex Master Chart & Samsung A50 / Vivo Y71 / Realme C21Y BTB Connectors",
        "size": "20 Redmi/POCO Power Flex Groups & 40-Pin BTB",
        "conf": "High",
        "models": [
            "TSR Group 1 [Note 9 Series]: Redmi Note 9 Pro Max = Redmi Note 9 Pro = Redmi Note 10 Lite = POCO M2 Pro | TSR Group 2 [M6 / 13 Series]: POCO M6 Pro = Redmi 13 5G | TSR Group 3 [Redmi 12 / 13 Series]: Redmi 12 4G = Redmi 13 5G",
            "TSR Group 4 [Redmi 9A Series]: Redmi 9A = Redmi 9i = Redmi 9C = POCO C3 = POCO C31 | TSR Group 5 [Redmi 9 / M2 Series]: Redmi 9 Prime = Redmi 9 = POCO M2 | TSR Group 6 [Redmi 13C / C65 Series]: Redmi 13C 4G = Redmi 13C 5G = POCO C65 5G",
            "TSR Group 7 [Note 7 / Note 8 Series]: Redmi Note 7 = Redmi Note 7 Pro = Redmi Note 7S = Redmi Note 8 | TSR Group 8 [Redmi 11X Series]: Redmi 11X = Redmi 11X Pro | TSR Group 9 [Redmi Y3 / 7 Series]: Redmi Y3 = Redmi 7",
            "TSR Group 10 [Redmi 9 Power Series]: Redmi 9 Power = POCO M3 | TSR Group 11 [Redmi 11 Prime Series]: Redmi 11 Prime = Redmi 10 5G | TSR Group 12 [Redmi Note 5 Series]: Redmi Note 5 = Redmi Note 5 Pro",
            "TSR Group 13 [Note 11 / M4 Pro Series]: Redmi Note 11 = Redmi Note 11S 4G = POCO M4 Pro 4G | TSR Group 14 [Redmi Note 10 Series]: Redmi Note 10 = Redmi Note 10S | TSR Group 15 [Redmi 5 / 4A Series]: Redmi 5 = Redmi 4A",
            "TSR Group 16 [POCO X3 Series]: POCO X3 = POCO X3 Pro | TSR Group 17 [Redmi K20 Series]: Redmi K20 = Redmi K20 Pro | TSR Group 18 [A1 / C65 Series]: Redmi A1 = Redmi A1 Plus = POCO C65 4G = POCO C51",
            "TSR Group 19 [Redmi 8 Series]: Redmi 8 = Redmi 8A = Redmi 8A Dual | TSR Group 20 [10C / C40 & 6 & A3 Series]: Redmi 10C = POCO C40 | Redmi 6 = Redmi 6A | Redmi A3 = POCO C61",
            "Search Console Top Queries — Flex & BTB Connectors: Realme C21Y (RMX3261) = Realme C25Y (RMX3265) = Realme C11 2021 = Realme C20 On-Board 40-Pin LCD BTB Connector (Pin 40 Model 31) | Samsung Galaxy A50 (SM-A505F) Main CTC Rev 0.5 Interconnect Ribbon = Keep distinct from A50s (SM-A507F) & A30 (SM-A305F)! | Vivo Y71 = Vivo Y71i Main Board-to-Sub-Board Flex & Power/Volume Key Flex"
        ],
        "smartEn": "Complete 20-group visual cross-reference for Xiaomi Redmi and POCO On/Off + Volume flex ribbons, plus Search Console solutions for Realme C21Y/C25Y 40-pin LCD connector, Galaxy A50 Main CTC ribbon, and Vivo Y71 flex.",
        "smartUr": "Xiaomi Redmi aur POCO ke 20 Power/Volume On-Off patto ka mukammal chart, aur Realme C21Y/C25Y ka 40-pin LCD board jack.",
        "note": "🎗️ Power Flex Tip: Stocking these 20 Xiaomi/POCO power-volume strips covers 55+ models from Redmi 4A up to Redmi 13 5G and POCO M6 Pro!",
        "noteUr": "🎗️ On-Off Patti Tip: Yeh 20 strips rakhne se Redmi 4A se lekar Redmi 13 5G aur Poco M6 Pro tak 55+ models cover ho jate hain!"
    },
    {
        "type": "PORT",
        "subCat": "PORT",
        "title": "🆕 [13 NOV PHOTO VERIFIED] Gujju Mobile 4-Group Universal Type-C Charging Connectors: Samsung A20–A70/M20, Samsung A14–A54 5G, OPPO A16–A95/Realme 6–7i & Redmi 8–Note 9T",
        "size": "4 High-Volume Type-C Solder Jack Groups",
        "conf": "High",
        "models": [
            "Group 1 — Premium Samsung A20 Universal Type-C Connector (Photo #18 Verified): Samsung Galaxy A20 (SM-A205F) = Galaxy A30 (SM-A305F) = Galaxy A30s (SM-A307F) = Galaxy A50 (SM-A505F) = Galaxy A50s (SM-A507F) = Galaxy A31 (SM-A315F) = Galaxy A21s (SM-A217F) = Galaxy A70 (SM-A705F — check 25W pins) = Galaxy M20 (SM-M205F)",
            "Group 2 — Samsung A14 5G Universal Type-C Connector (Photo #19 Verified): Samsung Galaxy A14 5G = Galaxy A15 5G = Galaxy A25 5G = Galaxy A34 5G = Galaxy A54 5G = Galaxy M14 5G = Galaxy M34 5G = Galaxy F14 5G",
            "Group 3 — OPPO A16 / Realme 6 Universal Type-C Connector (Photo #17 Verified): OPPO A16 = OPPO A32 = OPPO A52 = OPPO A72 = OPPO A92 = OPPO A53 = OPPO A54 = OPPO A95 = Realme 6 = Realme 6i = Realme 7 = Realme 7i",
            "Group 4 — Xiaomi Redmi 8 / Note 7–9 Universal Type-C Connector (Photo #16 Verified): Xiaomi Redmi 8 = Redmi 8A = Redmi 9 = Redmi 10X 4G = Redmi Note 7 = Redmi Note 7 Pro = Redmi Note 8 = Redmi Note 8 Pro = Redmi Note 8T = Redmi Note 9 = Redmi Note 9 Pro 4G = Redmi Note 9S = Redmi Note 9T"
        ],
        "smartEn": "Four photo-verified universal USB Type-C solder jack footprints covering 42 daily workshop models across Samsung A/M/F series, OPPO A-series, Realme 6/7 series, and Xiaomi Redmi 8 to Note 9 Pro.",
        "smartUr": "Gujju Mobile ke 4 verified Type-C charging jacks jo Samsung A20–A70, Samsung A14–A54 5G, OPPO A16–A95/Realme 6–7i aur Redmi 8–Note 9 Pro (42 Models) mein lagte hain!",
        "note": "🔌 Solder Jack Tip: Pre-tin the rear SMD pins with 183°C leaded paste and inspect under microscope so OTG and fast-charge CC1/CC2 lines make solid contact.",
        "noteUr": "🔌 Jack Tip: Jack lagane se pehle piche ki pins ko 183°C paste se Kali (tin) kar lein taake fast charging pehli bar mein kaam kare."
    },
    {
        "type": "PANIC",
        "subCat": "PANIC",
        "title": "🆕 [SEARCH CONSOLE TOP QUERIES SOLVED] iPhone 15 Plus SMC BSC 262144 (0x40000), iPhone 14 0.3A–0.5A Boot Short, POCO C31 NV Data Corrupted, Moto G64 TP1 & Vivo T1 Pro 5G EDL",
        "size": "Real Technician Search Queries Solved",
        "conf": "High",
        "models": [
            "1. iPhone 15 Plus 'SMC BSC failure ... sensor array 0x40000 (decimal 262144)' 3-Minute Restart Fix: Decimal 262144 equals Hex 0x40000! Correlates with the USB-C Charging Port Dock Flex / Barometric Sensor I2C bus. Unplug aftermarket charging dock flex and test with an original pulled OEM dock flex.",
            "2. 'iPhone 14 cannot power on and DC power supply on charge/boot is stuck at 0.3A to 0.5A (300mA–500mA) — Is it shorted?': YES, a 300mA–500mA spike or plateau indicates a Secondary Rail Short (such as VDD_MAIN /PP_VDD_BOOST or NAND 2.5V/0.9V rail) or an I2C bus hang. Check with thermal camera around PMIC / Audio / Charging IC (1618A0) before heating CPU!",
            "3. 'POCO C31 / Redmi 9A / 9C NV Data is Corrupted' (Stuck in Recovery Loop): Caused by damaged NVRAM/NVDATA partition after eMMC replacement or interrupted flashing, OR missing 1.8V RF supply rail to MT6177M RF IC. If baseband version works in normal boot after flashing stock ROM, restore original backed-up calibration data.",
            "4. 'Moto G64 5G TP1 / Test Point on Motherboard' & 'Vivo T1 Pro 5G (V2151) EDL 9008 Point': Moto G64 5G (Dimensity 7025) uses MediaTek BROM mode (Disconnect battery -> Hold Vol Up + Vol Down while plugging USB cable, or short TP1/CLK near CPU shield to GND) | Vivo T1 Pro 5G (Snapdragon 778G) EDL 9008 Test Point = Two gold dots right next to the Battery BTB connector!",
            "5. 'OPPO Model M13 on Charging Flex Using Flat Coil' & 'OnePlus Nord Optical Screen Calibration': After replacing an AMOLED display on OnePlus Nord / OPPO / Realme, dial *#899# -> After-Sale Device Calibration -> FingerPrint Optical Calibration (use white + black rubber calibration tool)."
        ],
        "smartEn": "Direct engineering answers for the exact diagnostic queries technicians searched on Google to find MobiMatch Pro (iPhone 15 Plus 262144/0x40000 panic, iPhone 14 0.3A–0.5A short, Poco C31 NV data, Moto G64 TP1, and Vivo T1 Pro EDL).",
        "smartUr": "Google par search kiye gaye exact maslon ka hal: iPhone 15 Plus 262144 (0x40000 = Charging patta), iPhone 14 0.3A–0.5A shorting, Poco C31 NV Data Corrupted, aur Vivo T1 Pro 5G EDL point.",
        "note": "🔍 Search Console Driven Diagnostics: Decimal sensor values in iOS 17/18 panic logs can be converted to Hex (e.g., 262144 = 0x40000, 524288 = 0x80000, 1048576 = 0x100000) to match our SMC Bitmask Decoder!",
        "noteUr": "🔍 Tip: Panic log mein 262144 ka matlab Hex 0x40000 (Charging Dock Flex) aur 524288 ka matlab 0x80000 (Proximity Flex) hota hai!"
    }
    ,
    // -------------------------------------------------------------------------
    // 12. V16.6 MASTER BOARD EXPANSION (14 NOV 2026 REVISION 2):
    //     TI DATASHEET REPLACEMENT CAUTIONS (BQ25890 VS BQ25892, TPS65132A VS
    //     TPS65132A0 VS TPS65132W), PRIMARY TEARDOWN DONOR ICs (ONEPLUS 2 &
    //     MOTO X 2013) & FLE88426 / 2C39F02 FLEX UPDATES
    // -------------------------------------------------------------------------
    {
        "type": "IC",
        "subCat": "IC",
        "title": "🆕 [14 NOV TI DATASHEET & TEARDOWN VERIFIED] Engineering Replacement Cautions (BQ25890 vs BQ25892, TPS65132A vs TPS65132A0 vs TPS65132W) & Primary Teardown Donor ICs (OnePlus 2 & Moto X)",
        "size": "BQ25890/25892, TPS65132A/A0/W & Teardown ICs",
        "conf": "High",
        "models": [
            "❌ TI Datasheet Caution #1 — BQ25890 vs BQ25892 (24-Pin WQFN Single-Cell Charger — NO Automatic Substitution!): On BQ25890, Pin 2 is D+ (USB D+/D- input current detection), whereas on BQ25892, Pin 2 is PSEL (Power Source Selection)! Never swap BQ25892 onto a BQ25890 pad without checking Pin 2 routing!",
            "❌ TI Datasheet Caution #2 — TPS65132A (15-Ball DSBGA) vs TPS65132W (20-Pin WQFN LCD Bias IC): Not a direct footprint replacement! TPS65132A/A0 are 15-ball BGA chips, whereas TPS65132W is a 20-pin QFN package.",
            "⚠️ TI Datasheet Caution #3 — TPS65132A (+5.4V / -5.4V Default) vs TPS65132A0 (+5.0V / -5.0V Default): Both share the 15-ball DSBGA package, but default startup VSP/VSN rail magnitudes differ (5.4V vs 5.0V). Confirm suffix and board startup requirements before swapping!",
            "🔬 Primary Teardown Donor Observations #1 — OnePlus 2 (iFixit Teardown Verified): NXP TFA9890 (Audio Amplifier), Qualcomm WCD9330 (Audio Codec), Qualcomm WTR3905 (RF Transceiver) [PRIMARY_TEARDOWN_IDENTIFICATION — Replacement untested]",
            "🔬 Primary Teardown Donor Observations #2 — Motorola Moto X 2013 (iFixit Teardown Verified): NXP TFA9890 (Audio Amplifier), Qualcomm WCD9310 (Audio Codec), Qualcomm WCN3680 (Wi-Fi / Bluetooth / FM) [PRIMARY_TEARDOWN_IDENTIFICATION]",
            "🟡 Donor Candidate Pair [CANDIDATE_ONLY — TFA9890]: OnePlus 2 ↔ Motorola Moto X (2013) both use the NXP TFA9890 audio amplifier family, but require full marking, package, pinout, board revision, and firmware checks before donor substitution!"
        ],
        "smartEn": "Enforces three critical Texas Instruments datasheet cautions (BQ25890 Pin 2 D+ vs BQ25892 Pin 2 PSEL; TPS65132A 15-ball DSBGA vs TPS65132W 20-pin WQFN; TPS65132A 5.4V vs TPS65132A0 5.0V) and adds 6 primary teardown IC observations.",
        "smartUr": "TI Datasheet ke 3 ahem cautions: BQ25890 (Pin 2 = D+) ki jagah BQ25892 (Pin 2 = PSEL) direct nahi chalta! TPS65132A (15-ball BGA, 5.4V) vs TPS65132A0 (5.0V) vs TPS65132W (20-pin QFN) ka farq zaroor dekhein.",
        "note": "📋 Revision 2 Engineering Rule: Teardown IC identification (TFA9890, WCD9330, WTR3905, WCD9310, WCN3680) confirms chip family presence on the board, not automatic donor interchangeability without suffix and package verification.",
        "noteUr": "📋 Engineering Usool: Teardown mein IC ka naam milne ka matlab yeh nahi ke bina suffix aur ball-out dekhe donor swap kar diya jaye."
    },
    {
        "type": "FLEX",
        "subCat": "FLEX",
        "title": "🆕 [14 NOV REVISION 2 VERIFIED] SkyStarTrade FLE88426 (Samsung A02s / A03 / A03s / M02s Power-Volume Flex) & Imatica 2C39F02 (Samsung A52 / A52 5G / A52s 5G Main Flex Conflict Lead)",
        "size": "FLE88426 Side Key & 2C39F02 Main Flex",
        "conf": "Conditional",
        "models": [
            "SkyStarTrade SKU FLE88426 [Power + Volume Button Flex Cable — 4 Models]: Samsung Galaxy A02s = Samsung Galaxy M02s = Samsung Galaxy A03 = Samsung Galaxy A03s (Unmapped listing code block: A025A/AZ/F/G/M/R4/T/U/U1/V, S124DL)",
            "🟡 Imatica Los Palacios SKU 2C39F02 [Main Interconnect Flex — REVIEW_REQUIRED & Conflict Pending]: Lists Samsung Galaxy A52 4G (SM-A525F / SM-A525M) ↔ Samsung Galaxy A52 5G (SM-A526B / SM-A5260) ↔ Samsung Galaxy A52s 5G (SM-A528B) (EAN: 8806087017540)",
            "⚠️ Active Conflict Notice on Galaxy A52 Series Main Flex (conflicts_to_research.csv): While Imatica 2C39F02 lists A52 / A52 5G / A52s 5G together as a supplier-specific replacement part, a contrary eBay search excerpt (item 336266626615) claims non-compatibility across revisions. Do NOT generalize 2C39F02 to original OEM pulled donor flexes—always verify exact FPC revision on the bench!"
        ],
        "smartEn": "Adds SkyStarTrade FLE88426 (confirming Galaxy A03 shares the A02s/A03s/M02s power-volume flex) and documents the supplier-specific Imatica 2C39F02 main flex for Galaxy A52/A52 5G/A52s 5G alongside its pending revision conflict.",
        "smartUr": "SkyStarTrade FLE88426 se tasdeeq hoti hai ke Samsung A02s, M02s, A03 aur A03s ka Power/Volume patta same hai. Aur Samsung A52 / A52 5G / A52s 5G ke main patte (2C39F02) mein revision check karna laazmi hai.",
        "note": "🎗️ Flex Governance Rule: Supplier-specific multi-model replacement flexes (like Imatica 2C39F02) are engineered to bridge multiple sub-variants, whereas original factory OEM donor pulls may differ by 4G/5G revision.",
        "noteUr": "🎗️ Patta Usool: Market ka universal main patta (2C39F02) A52 4G/5G/A52s par chal sakta hai, magar original board se nikala hua OEM patta lagane se pehle revision code milayein."
    }
    ,
    // -------------------------------------------------------------------------
    // 13. V16.8 MASTER BOARD EXPANSION (16 NOV 2026):
    //     OFFICIAL SAP FLEX, FINGERPRINT, WIRELESS COIL, LT RUBBER & SCREW SPECS,
    //     PLUS 156-MODEL OFFICIAL USSD FACTORY DIAGNOSTIC & CALIBRATION ROUTES
    // -------------------------------------------------------------------------
    {
        "type": "FLEX",
        "subCat": "FLEX",
        "title": "🆕 [16 NOV OFFICIAL SAP MANUAL VERIFIED] Transsion Main Flex, Side-Key Flex, Fingerprint Sensor, Flash Flex, Wireless Coil, LT Rubber & Screw SAP Codes (+ Quarantined Conflicts)",
        "size": "SAP 2300 / 1760 / 1900 / 3740 / 2340",
        "conf": "High",
        "models": [
            "Cross-Brand Main Interconnect Flex SAP 23002440 & Side-Key Power/Volume Flex SAP 23002444: TECNO SPARK 30 Pro (KL7) = itel S25 (S685LN) (Both phones share the exact same Main Flex 23002440 and Side-Key Flex 23002444 in official manuals!)",
            "Infinix NOTE 50 Series Shared Flex, Fingerprint & Wireless Coil Group: Infinix NOTE 50 Pro (X6855) = Infinix NOTE 50 (X6858) share Main Flex [SAP 23002492], Side-Key Flex [SAP 23002490], Fingerprint Sensor [SAP 17601243], and Wireless Charging Coil [SAP 19001322]!",
            "Cross-Brand Fingerprint Sensor SAP 17601242 (4 Flagship Models): TECNO CAMON 40 4G (CM5) = TECNO CAMON 40 Pro 5G (CM7) = TECNO CAMON 40 Premier 5G (CM8) = Infinix HOT 60 Pro+ (X6886)",
            "Cross-Brand Fingerprint Sensor SAP 17601107: TECNO SPARK 30 (KL6) = itel A50 (A667L)",
            "CAMON 40 Series Flash Flex & Rear LT-Sensor Rubber: Flash Flex [SAP 23002501] fits TECNO CAMON 40 (CM5) = CAMON 40 Pro 4G (CM6) | Rear LT-Sensor Rubber [SAP 37400327] fits CAMON 40 (CM5) = CAMON 40 Pro 4G (CM6) = CAMON 40 Pro 5G (CM7)",
            "Official Keypad & Feature-Phone Screw SAP Specifications: Black Self-Tapping Screw [SAP 23401127 — T1.6 × L4.0; Head D2.7 × H0.8] fits TECNO T455 = T528New = T302 = T353 | Silver Machine Screw [SAP 23401076 — M1.4 × L3.5; Head D2.5 × H0.5] fits itel Flip1 = TECNO T455",
            "🚫 Quarantined Official Diagram Conflicts (Do NOT Auto-Match!): [SAP 12113276: KL6 & KL7 duplicate Main-PCBA code excluded] | [SAP 12204879: itel S666LN Main PCBA vs Sub-PCBA conflict] | [SAP 23002500: CM5/CM6 Main FPC vs SIM FPC mismatch] | [SAP 23002532: CM7 Flash FPC vs Side-Key FPC conflict] | [SAP 23002196: X6836 Main FPC vs Side-Key FPC conflict] | [SAP 2300254: X6857 incomplete 7-digit Key-FPC code] | [SAP 38101431: itel S681LN Upper vs Lower Frame overlap]"
        ],
        "smartEn": "Establishes cross-brand SAP flex and sensor matches (SPARK 30 Pro KL7 = itel S25 S685LN Main Flex 23002440 & Side Key 23002444; Camon 40 = Hot 60 Pro+ Fingerprint 17601242) and isolates 7 diagram code conflicts.",
        "smartUr": "Official manual ke mutabiq TECNO Spark 30 Pro (KL7) aur itel S25 (S685LN) ka Main patta (23002440) aur On-Off patta (23002444) 100% same hai! Aur Camon 40 / Pro / Premier aur Hot 60 Pro+ ka Fingerprint (17601242) same hai!",
        "note": "🎗️ Disassembly Protection Rule: Disconnect the flash LED connector before lifting the upper housing on CM6, and protect the side fingerprint flex while lifting the middle housing on BG6, BG7, KJ5, KJ6, KI5m, KL4, KL5n, KL6, KM6, KN3, and A667L!",
        "noteUr": "🎗️ Housing Kholne Ka Usool: CM6 ki haddi uthate waqt flash connector pehle utarein, aur Spark/Pop models mein side fingerprint patta katne se bachayein."
    },
    {
        "type": "CODE",
        "subCat": "CODE",
        "title": "🆕 [16 NOV 156-MODEL OFFICIAL MANUAL AUDIT] Transsion *#*#90#*#* / *#*#80#*#* / *#*#900#*#* / *#900# Factory Test Codes, Sensor Rules & 12-Brand Calibration Routes",
        "size": "*#*#90#*#*, *#*#80#*#*, *#900# & Calibration",
        "conf": "High",
        "models": [
            "Transsion Official Manual Testing Entry *#*#90#*#* (Verified Across 80+ Carlcare Service Manuals): Infinix [Hot 30i X669, Hot 30 X6831, Hot 30 Play X6835, Hot 40 X6836, Hot 40 Pro X6837, Hot 50 X6882, Hot 50 5G X6720, Hot 50i X6531, X6881, Hot 50 Pro+ X6880, Hot 60i X6728B, Hot 60i 5G X6730, Hot 60 Pro X6885, Hot 60 Pro+ X6886, Smart 7 HD X6516, Smart 8 X6525, Smart 8+ X6526, Smart 9 HD X6532C, Note 50 X6858, Note 50 Pro X6855, Note 50X X6857, X6870, X6873, GT 30 Pro X6876, Note Edge X6887] | TECNO [Spark 10C KI5m, KI5q, BF6, BF7, Pop 8 BG6, Spark 20C BG7, Spark 20 KJ5, Spark 20 Pro KJ6, Pop 9 KL4/KL4h, Spark 30C KL5n, Spark 30 KL6, Spark 30 Pro KL7, Camon 40 CM5, Camon 40 Pro 4G CM6, Camon 40 Pro 5G CM7, Camon 40 Premier CM8, Pova 7/Neo LJ6, Pova 7 5G LJ7, Pova 7 Pro 5G LJ8/LJ8k, Pova 7 Ultra LJ9, KM4, KM6, Spark Go 3 KN3, Keypad T302/T315/T353/T455/T528New] | itel [S25 S685LN, S25 Ultra S686LN, A95 5G A671N, Power 70 P673L, A100 A673L, A100C A6611L, City 100 C671L, City 200 C681L, P671L, P551W, A671LC, A669L, A666L, A665L, A663L, A661W/L, S681LN, S667LN, S666LN, S663L, S662L, P683L, P682L, P665L, P661N, Flip1]",
            "itel Model-Specific Testing & Fingerprint Calibration Exceptions: itel A50 (A667L) Manual Testing Code = *#*#80#*#* | itel A90 (A6610L) Manual Testing Code = *#*#900#*#* | itel S25 Ultra (S686LN) Fingerprint Calibration Bulletin (id=630) Fallback Code = *#900# (Do NOT confuse *#900# with *#*#900#*#*!) | Also Carlcare App -> 'Phone Detection'",
            "Mandatory Camera & Sensor Test Procedures During *#*#90#*#*: (1) Secondary/Dummy Rear Camera Test [X669, X6516, X6835, BG6, BG7, KJ5, KJ6, BF6, BF7, KI5m, KI5q, KL5n, KL6, KL7]: Initially cover/obscure rear camera lenses until Secondary/Dummy Camera reports PASS, then uncover! (2) Camon 40 Series [CM5, CM6, CM7, CM8] Proximity-2 & Light Sensor: Cover/uncover camera area for Proximity-2 (if failed, inspect rear LT-sensor rubber SAP 37400327); shade completely with cloth then uncover for Light Sensor. (3) Note 50 Pro [X6855] Oximeter: Requires dark environment + gray card.",
            "Apple iPhone 12 to 16 & SE3 Official Repair Assistant Calibration (S01): Requires Wi-Fi, battery > 20%, and latest iOS. Calibrates iPhone 12/13 (Battery, Display, Front/Rear Camera) and iPhone 14/15/16 (adds Back Glass).",
            "Samsung EU Repair Guide Diagnostics & Self Repair Assistant (S04–S05 & 11 Verified A-Series Manuals — A05s, A15 4G/5G, A16 4G/5G, A25, A26, A35, A36, A55, A56 & S25): Run Samsung Members -> Support -> Phone diagnostics -> Test all; after part replacement use Self Repair Assistant (let app skip absent fold/optical-FP sensors).",
            "Xiaomi / Redmi / POCO 2025–2026 CIT Function Test (S07–S08): Explicitly documented via *#*#6484#*#* (or 5x tap on Kernel Version) for Redmi 13C, Xiaomi 14T, Xiaomi 15, Xiaomi 15 Ultra, Redmi Note 14 / 14 5G / 14 Pro / 14 Pro 5G / 14 Pro+ 5G, Redmi A5, POCO M7 Pro 5G, POCO F7 Pro & POCO F7 Ultra (⚠️ Xiaomi 15T/15T Pro, Xiaomi 17/17 Ultra & POCO F8 Pro/Ultra manuals link to the dated guide without yet listing those 6 names in the table).",
            "Google Pixel, realme, vivo, HONOR & HUAWEI Official Diagnostic Routes (S03, S06, S14–S19): Google Pixel 6a to 9a / 9 Pro XL / 9 Pro Fold [Pixel Diagnostics + UDFPS Fingerprint Calibration Tool + Android 14+ Repair Mode requiring >=2GB free space] | realme 14 5G / 14T 5G (RMX5078) / P3 5G (RMX5079) / 14x / C71 / C75 / C100 / 16 Series / GT 7 & GT 8 Pro [Phone Manager -> Diagnostics & History] | vivo X300 Ultra, Y04, Y29s 5G, Y21d, Y21e, Y31 5G, Y31e 5G [vivo Store / vivo.com -> Support -> Hardware Test -> Self-Calibration] | HONOR [My HONOR -> Service -> Smart Diagnosis vs KSA Agent-Assisted Remote Diagnosis] | HUAWEI [My HUAWEI App -> Support -> Smart Diagnosis; old Support/HiCare app retired Jan 2024]"
        ],
        "smartEn": "Consolidates 156 model-specific diagnostic and post-repair calibration routes across 12 brands, including Transsion's *#*#90#*#*, itel A50 *#*#80#*#*, itel A90 *#*#900#*#*, and itel S25 Ultra *#900#.",
        "smartUr": "Infinix, TECNO aur itel ke 80+ naye models ka official factory test code *#*#90#*#* hai (itel A50 = *#*#80#*#*, itel A90 = *#*#900#*#*, aur S25 Ultra fingerprint calibration = *#900#).",
        "note": "🔢 Post-Repair Quality Rule: Testing entry codes (*#*#90#*#* / *#*#6484#*#*) verify hardware function, whereas post-repair calibration (Apple Repair Assistant, Samsung Self Repair Assistant, Pixel UDFPS tool) is a separate step. Always record Pass, Fail, Not Tested, or Not Applicable separately!",
        "noteUr": "🔢 Usool: Code (*#*#90#*#*) se part check hota hai, jabke fingerprint/sensor calibration alag step hai. Bina SIM dale network test ko 'Pass' na likhein balki 'Not Tested' mark karein."
    }
]);
