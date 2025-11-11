# 💒 Joe's Wedding Website - 90s Nostalgia Edition

A fun, retro-styled static wedding website that's easy to customize and maintain!

## 📁 Files Included

- `index.html` - Main website structure and content
- `style.css` - All the styling (colors, fonts, layout)
- `script.js` - Interactive features (RSVP form, smooth scrolling, sparkles)
- `README.md` - This file with instructions

## 🎨 Features

- **90s Aesthetic**: Bright colors, fun fonts, animated effects
- **Fully Responsive**: Looks great on phones, tablets, and desktops
- **Easy to Edit**: Clear comments throughout the code
- **Sections Included**:
  - Home/Welcome
  - Wedding Details
  - RSVP Form
  - Gift Registry
  - Photo Gallery
  - Travel Information
  - FAQ
- **Fun Extras**: Scrolling marquee, sparkle effects, smooth scrolling

## 🚀 Hosting Options (All Free!)

### Option 1: Neocities (Recommended for 90s vibe!)
1. Go to https://neocities.org/
2. Sign up for a free account
3. Upload your files (index.html, style.css, script.js)
4. Your site will be live at `yourusername.neocities.org`
5. **Best part**: Has a built-in HTML editor - no coding required to update!

### Option 2: GitHub Pages
1. Create a GitHub account at https://github.com/
2. Create a new repository named `wedding` (or anything)
3. Upload your files
4. Go to Settings > Pages
5. Enable GitHub Pages
6. Your site will be at `yourusername.github.io/wedding`

### Option 3: Netlify
1. Go to https://www.netlify.com/
2. Sign up for free
3. Drag and drop your folder
4. Get a custom URL like `joe-wedding.netlify.app`
5. Can connect a custom domain if needed

### Option 4: Vercel
1. Go to https://vercel.com/
2. Sign up and import your project
3. Deploy with one click

## ✏️ How to Customize (For Joe!)

### Updating Text
1. Open `index.html` in any text editor (Notepad, TextEdit, VS Code, etc.)
2. Find the section you want to change
3. Edit the text between the tags
4. Save and re-upload to your hosting

**Example**: To change the wedding date:
```html
<strong>Date:</strong> Saturday, June 15, 2026
```
Just change "June 15, 2026" to your actual date!

### Changing Colors
1. Open `style.css`
2. Search for color codes like `#FF1493` (hot pink) or `#FFD700` (gold)
3. Replace with your preferred colors
4. Use a color picker: https://htmlcolorcodes.com/

**Main colors used:**
- `#FF1493` - Hot Pink (main accent)
- `#FFD700` - Gold (borders and highlights)
- `#FFB6C1` - Light Pink (backgrounds)
- `#8B008B` - Dark Magenta (text)
- `#00CED1` - Turquoise (navigation)

### Adding Photos
1. Upload your photos to the same folder as your HTML file
2. In `index.html`, find the Photos section
3. Replace the placeholder divs with:
```html
<img src="photo1.jpg" alt="Description" style="width: 100%; border: 3px solid #FF1493;">
```

### Changing Fonts
In `style.css`, find this line:
```css
font-family: 'Comic Sans MS', 'Arial', sans-serif;
```
Change to any font you like!

### Adding New Sections
Copy any existing `<section>` block and paste it where you want. Update the ID and content:
```html
<section id="new-section">
    <div class="content-box">
        <h2>Your New Section Title</h2>
        <p>Your content here...</p>
    </div>
</section>
```

## 📝 Setting Up RSVP Form (Actually Works!)

The current form shows a popup but doesn't save data. To make it functional:

### Option 1: Formspree (Easiest!)
1. Go to https://formspree.io/
2. Sign up (free for 50 submissions/month)
3. Create a new form
4. In `index.html`, find `<form id="rsvpForm">` and change it to:
```html
<form id="rsvpForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
5. In `script.js`, remove or comment out the `e.preventDefault();` line
6. RSVPs will be emailed to you!

### Option 2: Google Forms
1. Create a Google Form with your questions
2. Click "Send" and get the link
3. Either embed it or link to it from your page

### Option 3: Netlify Forms (if using Netlify)
1. Add `netlify` attribute to your form tag:
```html
<form name="rsvp" method="POST" netlify>
```
2. Deploy to Netlify
3. Responses appear in your Netlify dashboard

## 🔧 Troubleshooting

**Problem**: Images not showing
- **Solution**: Make sure image files are in the same folder as index.html
- Check that filenames match exactly (case-sensitive!)

**Problem**: CSS not loading
- **Solution**: Verify style.css is in the same folder as index.html

**Problem**: Form not submitting
- **Solution**: See "Setting Up RSVP Form" section above

## 📱 Testing Your Site

1. Open `index.html` in a web browser
2. Test on your phone (responsive design!)
3. Click all links to make sure they work
4. Try the RSVP form
5. Check on different browsers (Chrome, Safari, Firefox)

## 🎯 Quick Checklist Before Going Live

- [ ] Update all placeholder text (dates, times, locations)
- [ ] Change email addresses to real ones
- [ ] Update registry links
- [ ] Add real hotel information
- [ ] Set up working RSVP form
- [ ] Add photos (optional)
- [ ] Test on mobile phone
- [ ] Share URL with a friend to test

## 💡 Tips for Maintaining the Site

1. **Keep it Simple**: Don't overcomplicate things
2. **Update Regularly**: Keep travel info and details current
3. **Test After Changes**: Always view your site after editing
4. **Backup Your Files**: Keep copies of your HTML/CSS/JS files
5. **Use Comments**: Add notes in the code for future reference

## 🌟 Need Help?

- **HTML/CSS Basics**: https://www.w3schools.com/
- **Color Picker**: https://htmlcolorcodes.com/
- **Free Images**: https://unsplash.com/
- **Emoji Reference**: https://emojipedia.org/

## 📞 Support

If Joe needs help later:
- Most hosting platforms have built-in editors (especially Neocities!)
- YouTube has tons of "HTML basics" tutorials
- The code has lots of comments to guide you

## 🎉 Have Fun!

This website is yours to customize! Don't be afraid to experiment. You can always undo changes or start over.

**Remember**: The most important thing is celebrating your special day with loved ones. This website is just a fun way to share information! 💕

---

Made with love and 90s nostalgia ✨


