# Workshop Page - Formspree Setup Instructions

## ❓ Frequently Asked Questions

### 1. What does Formspree actually do?
Formspree is a **form backend service**. Think of it as the "receiver" for your form:
- When someone submits your form → Formspree receives the data
- It sends the submission to your email
- Stores submissions in a dashboard you can view
- Handles spam protection automatically
- **You don't need any server or backend code!**

### 2. What happens if someone fills the form NOW (before setup)?
The form will **fail with an error**:
- The action URL currently points to `YOUR_FORM_ID` (a placeholder)
- Formspree won't know where to send the data
- User will see an error instead of your thank-you page
- ⚠️ **You MUST complete setup before going live!**

### 3. Do I need to create HTML fields on Formspree?
**NO!** You only need to:
1. Create a **blank form** on Formspree (just give it a name)
2. Copy the Form ID
3. Paste it into your code (step 3 below)
4. Formspree **automatically detects** all your fields from the HTML
5. After the first submission, all fields appear in Formspree's dashboard

You don't need to recreate the fields - Formspree reads them from your HTML!

### 4. How do I change the Saturday dates monthly?
See the complete guide: [HOW_TO_UPDATE_DATES.md](HOW_TO_UPDATE_DATES.md)

**Quick answer**: Edit lines 251-253 in `/src/pages/workshop.astro`

---

## ✅ What's Been Created

1. **Main Workshop Page**: `/workshop` 
   - Hero section with workshop title and tagline
   - "What You'll Learn" section with 6 feature cards
   - Workshop Details (Date, Location, Pricing)
   - "What to Bring" section
   - Registration form with all requested fields

2. **Thank You Page**: `/workshop/thank-you`
   - Confirmation message displayed after form submission
   - Next steps information
   - Links back to home and portfolio

3. **Navigation Updated**: Workshop link added to header and footer

## 🔧 Setup Formspree (Required)

### Step 1: Create Formspree Account
1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for a free account (free plan includes 50 submissions/month)
3. Verify your email address

### Step 2: Create New Form
1. Click "New Form" in your Formspree dashboard
2. Give it a name: "3D Printing Workshop Registration"
3. Copy the Form ID (looks like: `xyzabc12`)

### Step 3: Update Workshop Page
✅ **ALREADY COMPLETED!** The form is configured with your Formspree ID:

```html
<form 
  action="https://formspree.io/f/xqeezkka" 
  method="POST"
```

Your form is ready to receive submissions!

### Step 4: Configure Email Notifications (Optional)
In your Formspree dashboard:
1. Go to Settings → Email Notifications
2. Add your email address where you want to receive registrations
3. Customize the email template if desired

### Step 5: Test the Form
1. Visit: `http://localhost:4321/workshop`
2. Fill out the registration form
3. Click "Save My Seat!"
4. You should be redirected to the thank-you page
5. Check your email for the submission notification

## 📋 Form Fields Included

### Required Fields (*)
1. **👤 Full Name*** (text input)
2. **📧 Email Address*** (email input)
3. **📅 Select a Saturday*** (dropdown)
   - Saturday, 17th Jan 2026
   - Saturday, 24th Jan 2026
   - Saturday, 31st Jan 2026

### Optional Fields
4. **📱 Phone Number** (tel input)
5. **🖨️ Experience Level** (radio buttons)
   - Never
   - A Little
   - Yes, I know the basics
6. **✨ What to Create** (radio buttons)
   - Keychain
   - Jewelry
   - Image → 3D Art
   - Cookie Cutter
   - Brand Merchandise
   - Just curious / exploring
7. **💡 Have an Idea?** (radio buttons)
   - Yes
   - No
8. **🔍 Referral Source** (dropdown)
   - Instagram
   - Website
   - Word of mouth

## 🎨 Design Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark mode support
- ✅ Custom success message on thank-you page
- ✅ Spam protection (honeypot field)
- ✅ Focus states and hover effects
- ✅ Icon-based learning sections
- ✅ Clear call-to-action button

## 🔒 Security Features

- **Honeypot field**: `_gotcha` field (hidden, catches bots)
- **Custom subject**: Email subject line set to "New Workshop Registration"
- **Redirect**: Users redirected to custom thank-you page after submission

## 💡 Customization Options

### Change Success Message
Edit `/src/pages/workshop/thank-you.astro` to customize the confirmation message.

### Add More Form Fields
Add new fields in `/src/pages/workshop.astro` inside the `<form>` tag.

### Change Button Text
Find the submit button (line ~454) and modify the text.

### Add Google Maps
If you want to add a location map, I can help you integrate Google Maps embed.

## 📧 Suggested Confirmation Email

You can customize your Formspree email template to say:

**Subject**: Workshop Registration Confirmed - January 2026

**Body**:
```
Hi {{name}},

Thank you for registering for the Free 3D Printing Workshop!

Workshop Details:
- Date: {{workshop-date}}
- Time: 2:00 PM - 5:00 PM
- Location: [Address will be shared 48 hours before the event]

We're excited to have you join us! You'll receive the exact location details 2 days before your selected workshop date.

What to bring:
- Laptop (optional)
- Images or ideas (optional)
- Just yourself and your curiosity!

Looking forward to seeing you there!

Best regards,
tattva-3d Team
```

## 🚀 Next Steps

1. Set up your Formspree account
2. Get your Form ID
3. Update line ~232 in `/src/pages/workshop.astro`
4. Test the form
5. Launch! 🎉

## 🆘 Need Help?

If you run into any issues:
- Check the Formspree documentation: https://help.formspree.io/
- Make sure the Form ID is correct
- Check browser console for any errors
- Ensure you're using the correct email format

---

**Your workshop page is live at**: `http://localhost:4321/workshop`
