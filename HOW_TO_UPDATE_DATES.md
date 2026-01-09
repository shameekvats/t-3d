# 📅 How to Update Workshop Dates Monthly

## Current Dates (January 2026)
The dates are located in `/src/pages/workshop.astro` at **lines 251-253**

## Step-by-Step Instructions

### 1. **Find the Saturday Dates Section**
Open: `/src/pages/workshop.astro`
Go to: **Lines 251-253**

You'll see:
```html
<option value="2026-01-17">Saturday, 17th Jan 2026</option>
<option value="2026-01-24">Saturday, 24th Jan 2026</option>
<option value="2026-01-31">Saturday, 31st Jan 2026</option>
```

### 2. **Update the Dates**
Replace those 3 lines with the new month's Saturdays:

**Format:**
```html
<option value="YYYY-MM-DD">Saturday, DDth Month YYYY</option>
```

**Example for February 2026:**
```html
<option value="2026-02-07">Saturday, 7th Feb 2026</option>
<option value="2026-02-14">Saturday, 14th Feb 2026</option>
<option value="2026-02-21">Saturday, 21st Feb 2026</option>
<option value="2026-02-28">Saturday, 28th Feb 2026</option>
```

### 3. **Ordinal Number Rules**
- 1st, 21st, 31st → use "st"
- 2nd, 22nd → use "nd"
- 3rd, 23rd → use "rd"
- Everything else → use "th" (4th, 5th, 6th, 7th, 8th, 9th, 10th, 11th, 12th, 13th, etc.)

---

## 📆 2026 Saturday Reference Guide

### **February 2026** (4 Saturdays)
```html
<option value="2026-02-07">Saturday, 7th Feb 2026</option>
<option value="2026-02-14">Saturday, 14th Feb 2026</option>
<option value="2026-02-21">Saturday, 21st Feb 2026</option>
<option value="2026-02-28">Saturday, 28th Feb 2026</option>
```

### **March 2026** (5 Saturdays)
```html
<option value="2026-03-07">Saturday, 7th Mar 2026</option>
<option value="2026-03-14">Saturday, 14th Mar 2026</option>
<option value="2026-03-21">Saturday, 21st Mar 2026</option>
<option value="2026-03-28">Saturday, 28th Mar 2026</option>
```

### **April 2026** (4 Saturdays)
```html
<option value="2026-04-04">Saturday, 4th Apr 2026</option>
<option value="2026-04-11">Saturday, 11th Apr 2026</option>
<option value="2026-04-18">Saturday, 18th Apr 2026</option>
<option value="2026-04-25">Saturday, 25th Apr 2026</option>
```

### **May 2026** (5 Saturdays)
```html
<option value="2026-05-02">Saturday, 2nd May 2026</option>
<option value="2026-05-09">Saturday, 9th May 2026</option>
<option value="2026-05-16">Saturday, 16th May 2026</option>
<option value="2026-05-23">Saturday, 23rd May 2026</option>
<option value="2026-05-30">Saturday, 30th May 2026</option>
```

### **June 2026** (4 Saturdays)
```html
<option value="2026-06-06">Saturday, 6th Jun 2026</option>
<option value="2026-06-13">Saturday, 13th Jun 2026</option>
<option value="2026-06-20">Saturday, 20th Jun 2026</option>
<option value="2026-06-27">Saturday, 27th Jun 2026</option>
```

### **July 2026** (4 Saturdays)
```html
<option value="2026-07-04">Saturday, 4th Jul 2026</option>
<option value="2026-07-11">Saturday, 11th Jul 2026</option>
<option value="2026-07-18">Saturday, 18th Jul 2026</option>
<option value="2026-07-25">Saturday, 25th Jul 2026</option>
```

### **August 2026** (5 Saturdays)
```html
<option value="2026-08-01">Saturday, 1st Aug 2026</option>
<option value="2026-08-08">Saturday, 8th Aug 2026</option>
<option value="2026-08-15">Saturday, 15th Aug 2026</option>
<option value="2026-08-22">Saturday, 22nd Aug 2026</option>
<option value="2026-08-29">Saturday, 29th Aug 2026</option>
```

### **September 2026** (4 Saturdays)
```html
<option value="2026-09-05">Saturday, 5th Sep 2026</option>
<option value="2026-09-12">Saturday, 12th Sep 2026</option>
<option value="2026-09-19">Saturday, 19th Sep 2026</option>
<option value="2026-09-26">Saturday, 26th Sep 2026</option>
```

### **October 2026** (5 Saturdays)
```html
<option value="2026-10-03">Saturday, 3rd Oct 2026</option>
<option value="2026-10-10">Saturday, 10th Oct 2026</option>
<option value="2026-10-17">Saturday, 17th Oct 2026</option>
<option value="2026-10-24">Saturday, 24th Oct 2026</option>
<option value="2026-10-31">Saturday, 31st Oct 2026</option>
```

### **November 2026** (4 Saturdays)
```html
<option value="2026-11-07">Saturday, 7th Nov 2026</option>
<option value="2026-11-14">Saturday, 14th Nov 2026</option>
<option value="2026-11-21">Saturday, 21st Nov 2026</option>
<option value="2026-11-28">Saturday, 28th Nov 2026</option>
```

### **December 2026** (4 Saturdays)
```html
<option value="2026-12-05">Saturday, 5th Dec 2026</option>
<option value="2026-12-12">Saturday, 12th Dec 2026</option>
<option value="2026-12-19">Saturday, 19th Dec 2026</option>
<option value="2026-12-26">Saturday, 26th Dec 2026</option>
```

---

## 🎯 Quick Update Process

1. Open [/src/pages/workshop.astro](../src/pages/workshop.astro)
2. Search for: "Select a Saturday"
3. Find lines 251-253
4. Copy the new month's dates from above
5. Replace the 3 option lines
6. Save the file
7. The dev server will auto-reload! ✅

---

## 💡 Pro Tip

Set a monthly reminder to update these dates at the end of each month. This way, users always see upcoming workshops!
