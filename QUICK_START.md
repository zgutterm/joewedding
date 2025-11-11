# 🚀 Quick Start Guide - Get Your Site Online in 10 Minutes!

## For Joe (or anyone new to websites)

### Step 1: Choose Your Hosting (Pick One!)

#### 🌟 Neocities (Easiest - Recommended!)
1. Go to **neocities.org**
2. Click "Sign Up"
3. Choose a username (like "joe-wedding")
4. Click on "Edit Site"
5. Delete the default index.html
6. Upload your 3 files: `index.html`, `style.css`, `script.js`
7. Done! Your site is at `joe-wedding.neocities.org`

**To update later**: Just log in and click "Edit" - you can edit right in your browser!

---

#### 🐱 GitHub Pages (Free + Professional)
1. Go to **github.com** and sign up
2. Click "New Repository"
3. Name it `wedding` (or anything)
4. Make it public
5. Upload your files
6. Go to Settings → Pages
7. Select "main" branch and save
8. Your site is at `yourusername.github.io/wedding`

---

#### ⚡ Netlify (Drag & Drop Easy)
1. Go to **netlify.com**
2. Sign up (can use GitHub/email)
3. Drag your entire folder onto the page
4. Done! Get a URL like `random-name-12345.netlify.app`
5. Can change the URL in settings

---

## Step 2: Customize Your Content

### Essential Updates (Do These First!)

Open `index.html` and find/replace:

1. **Names**: Replace "Joe & Partner" with real names
2. **Date**: Change "June 15, 2026" to your date
3. **Location**: Update "Beautiful Garden Venue" and address
4. **Email**: Change "joe@example.com" to real email
5. **Hashtag**: Update "#JoeGetsMarried" to your hashtag

### Color Scheme (Optional)

Don't like pink and gold? Open `style.css` and use Find/Replace:

- Find: `#FF1493` (hot pink) → Replace with your color
- Find: `#FFD700` (gold) → Replace with your color

Get colors from: **htmlcolorcodes.com**

---

## Step 3: Make RSVP Form Work

### Option A: Use Formspree (Recommended)

1. Go to **formspree.io**
2. Sign up (free for 50 RSVPs/month)
3. Click "New Form"
4. Copy your form ID
5. In `index.html`, line 77, change:
   ```html
   <form id="rsvpForm">
   ```
   to:
   ```html
   <form action="https://formspree.io/f/YOUR_ID_HERE" method="POST">
   ```
6. In `script.js`, line 14, add `//` in front to comment out:
   ```javascript
   // e.preventDefault();
   ```
7. Re-upload files
8. Done! RSVPs will email to you

### Option B: Link to Google Form

1. Create a Google Form
2. In `index.html`, replace entire RSVP section with:
   ```html
   <p><a href="YOUR_GOOGLE_FORM_LINK" target="_blank">
   Click here to RSVP via Google Forms</a></p>
   ```

---

## Step 4: Add Photos

1. Save photos in the same folder as your HTML file
2. Name them simply: `photo1.jpg`, `photo2.jpg`, etc.
3. In `index.html`, find the Photos section (around line 193)
4. Replace photo placeholder with:
   ```html
   <img src="photo1.jpg" alt="Photo" 
        style="width:100%; border:3px solid #FF1493;">
   ```
5. Upload everything to your host

---

## Step 5: Test Everything

- [ ] Click every link
- [ ] Test RSVP form
- [ ] View on your phone
- [ ] Share with a friend to test

---

## Common Issues & Fixes

### "My CSS isn't working!"
→ Make sure `style.css` is in the same folder as `index.html`

### "Images aren't showing!"
→ Check that image files are in the same folder
→ Make sure filename matches exactly (case-sensitive!)

### "Form isn't submitting!"
→ Did you set up Formspree? See Step 3 above

### "Site looks weird on mobile"
→ Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)

---

## Quick Edits Cheat Sheet

### Change Wedding Date
Search for: `June 15, 2026`
Replace with your date

### Change Color Scheme
In `style.css`:
- Line 14: Body background
- Line 20-23: Top bar colors
- Line 27-33: Header colors

### Add a New Section
1. Copy any `<section>` block in `index.html`
2. Paste where you want it
3. Change the `id` and content
4. Add a nav link at the top

### Remove a Section
Delete the entire `<section id="whatever">...</section>` block

---

## You're All Set! 🎉

Remember: You can always edit and re-upload. Nothing is permanent!

**Need More Help?**
- Watch "HTML basics" on YouTube
- Neocities has a built-in editor (no downloading needed!)
- The code has lots of helpful comments

**Most Important**: Have fun and don't stress! This is just a fun way to share info about your big day! 💕


