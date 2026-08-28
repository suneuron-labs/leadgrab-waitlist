### What We Are Building & Why

**Product Name:** WA LeadGrab (Chrome Extension)

**One-Liner:** A lightweight, 1-click Chrome extension that extracts contacts, unsaved numbers, and group members from WhatsApp Web into clean, formatted Excel/CSV files with zero data corruption.

* **Why We Are Building It:** Real estate agents, B2B sales reps, and community managers manage active client relationships on WhatsApp Web. Existing market tools with 20,000+ users suffer from poor ratings (1.6★–3.1★) because they break after UI updates, impose deceptive 10-contact paywalls, or corrupt Excel formatting with scientific notation.  
* **The Opportunity:** A clean, maintained tool with upfront trial limits and smart pre-export filtering captures users dissatisfied with existing options.

---

### Core Pain Points & Solutions

* **Pain Point 1: Aggressive Bait-and-Switch Paywalls.** Competitors advertise "Free," then silently cap downloads after 10 rows.  
* **Our Solution:** A transparent free tier (50 total lifetime export credits free), followed by clear subscription pricing.  
* **Pain Point 2: Brittle DOM Selectors & Inactive Maintenance.** Extensions stop working whenever WhatsApp Web updates its class names.  
* **Our Solution:** Standardized parsing logic with committed hotfixes within 24–48 hours of UI updates.  
* **Pain Point 3: Corrupted Spreadsheet Data.** Phone numbers frequently lose leading zeroes or convert to scientific notation (e.g., `+6.5912E+11`) in Excel.  
* **Our Solution:** Pre-formatted strings with dedicated columns for country codes, clean local numbers, display names, and source group names  
* **Pain Point 4: Unfiltered Contact Dumps.** Users are forced to manually clean exported sheets to remove admins or foreign country codes.  
* **Our Solution:** An interactive pre-export preview drawer allowing 1-click exclusion of admins, unsaved-only filtering, and manual checkbox selection.

---

### Feature Breakdown

**Free Tier Features:**

* 1-Click extraction for the first 50 lifetime contacts.  
* Direct `.csv` export.  
* Basic auto-formatting for phone numbers and international country codes.

**Pro Tier Features ($12/month or $89/year):**

* **Unlimited Exports:** No group size or contact limits.  
* **Interactive Preview Drawer:** View extracted contacts inside WhatsApp Web before exporting.  
* **Granular Select/Deselect:** Checkbox selection to exclude specific members before downloading.  
* **Smart Filter Toggles:** 1-click buttons for *Only Unsaved Numbers*, *Exclude Admins*, and *Filter by Country Code*.  
* **Multi-Format Export:** Download as `.xlsx` (Excel), `.csv`, or `.vcf` (Google Contacts/iOS address book import).  
* **Guaranteed Maintenance:** Fast selector patches following WhatsApp Web releases.

### Addressing the "Fake Door" Dilemma

The concern about frustrating potential users is valid. A deceptive "fake door" that leads to a dead link creates a poor first impression.

Instead of an empty checkout, frame the landing page as an **Exclusive Private Beta / Waitlist**:

* **How to Handle the CTA:** When a user clicks **"Add to Chrome"**, open a clean modal:

>   
> *"We are rolling out WA LeadGrab in private batches of 50 users to ensure stability with the latest WhatsApp Web updates. Enter your work email below to get immediate access in the next rollout batch."*  
> 

* **Why This Works:** It sets professional expectations, captures qualified lead emails, and protects reputation without building full payment and backend infrastructure upfront.