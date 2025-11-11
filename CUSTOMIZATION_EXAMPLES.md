# 🎨 Customization Examples

Quick copy-paste examples for common changes!

## 🎨 Color Schemes

### Blue & Silver Wedding
In `style.css`, replace these colors:

```css
/* Replace hot pink with royal blue */
#FF1493 → #4169E1

/* Replace gold with silver */
#FFD700 → #C0C0C0

/* Replace light pink with light blue */
#FFB6C1 → #ADD8E6

/* Replace turquoise with navy */
#00CED1 → #000080
```

### Burgundy & Rose Gold
```css
#FF1493 → #800020  /* burgundy */
#FFD700 → #B76E79  /* rose gold */
#FFB6C1 → #E6B8C1  /* soft pink */
#00CED1 → #8B4513  /* saddle brown */
```

### Sage Green & Cream
```css
#FF1493 → #9CAF88  /* sage green */
#FFD700 → #F5F5DC  /* cream */
#FFB6C1 → #DDE5D5  /* light sage */
#00CED1 → #8FBC8F  /* dark sea green */
```

---

## 📝 Adding New Content Blocks

### Add a "Our Story" Section
Paste this after the Home section in `index.html`:

```html
<section id="our-story">
    <div class="content-box">
        <h2>💕 Our Story 💕</h2>
        <p>
            We met in [YEAR] at [PLACE]...
        </p>
        <p>
            [He/She] proposed on [DATE] and we've been planning 
            this amazing day ever since!
        </p>
    </div>
</section>
```

Don't forget to add the nav link:
```html
<a href="#our-story">Our Story</a> |
```

### Add a "Bridal Party" Section
```html
<section id="bridal-party">
    <div class="content-box">
        <h2>👰 Meet the Bridal Party 🤵</h2>
        
        <h3>Bridesmaids</h3>
        <ul>
            <li>Sarah - Maid of Honor</li>
            <li>Emily - Bridesmaid</li>
            <li>Jessica - Bridesmaid</li>
        </ul>
        
        <h3>Groomsmen</h3>
        <ul>
            <li>Mike - Best Man</li>
            <li>Tom - Groomsman</li>
            <li>Dave - Groomsman</li>
        </ul>
    </div>
</section>
```

### Add a Countdown Timer
In `index.html`, add after the header:

```html
<div style="text-align: center; background: #FFD700; padding: 15px; margin: 20px; border: 3px solid #FF1493;">
    <h3>Countdown to the Big Day! ⏰</h3>
    <div id="countdown" style="font-size: 1.5em; font-weight: bold;"></div>
</div>
```

Then add this to the bottom of `script.js`:

```javascript
// Countdown Timer
function updateCountdown() {
    const wedding = new Date('June 15, 2026 15:00:00').getTime();
    const now = new Date().getTime();
    const distance = wedding - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
    document.getElementById('countdown').innerHTML = 
        days + " days, " + hours + " hours, " + minutes + " minutes";
    
    if (distance < 0) {
        document.getElementById('countdown').innerHTML = "The Wedding is Here! 🎉";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();
```

---

## 🖼️ Photo Gallery Options

### Simple Photo Grid
Replace the photo section content with:

```html
<div class="photo-grid">
    <img src="photo1.jpg" alt="Photo 1">
    <img src="photo2.jpg" alt="Photo 2">
    <img src="photo3.jpg" alt="Photo 3">
    <img src="photo4.jpg" alt="Photo 4">
    <img src="photo5.jpg" alt="Photo 5">
    <img src="photo6.jpg" alt="Photo 6">
</div>
```

Add this CSS to `style.css`:

```css
.photo-grid img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border: 4px solid #FF1493;
    box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s;
}

.photo-grid img:hover {
    transform: scale(1.05);
}
```

### Photo Captions
```html
<div class="photo-with-caption">
    <img src="photo1.jpg" alt="Photo">
    <p class="caption">Our first date - Summer 2020</p>
</div>
```

Add CSS:
```css
.photo-with-caption {
    margin: 20px 0;
}

.caption {
    background: #FFD700;
    padding: 10px;
    text-align: center;
    font-style: italic;
    border: 2px solid #FF1493;
}
```

---

## 🎵 Music & Entertainment

### Add Spotify Playlist Embed
```html
<section id="music">
    <div class="content-box">
        <h2>🎵 Our Wedding Playlist 🎵</h2>
        <p>Check out the songs we'll be dancing to!</p>
        <iframe 
            src="https://open.spotify.com/embed/playlist/YOUR_PLAYLIST_ID" 
            width="100%" 
            height="380" 
            frameborder="0" 
            allowtransparency="true" 
            allow="encrypted-media">
        </iframe>
    </div>
</section>
```

---

## 📍 Map Integration

### Add Google Maps
Replace location text with:

```html
<h3>📍 Venue Location</h3>
<p><strong>Beautiful Garden Venue</strong><br>
123 Wedding Lane, City, ST 12345</p>

<iframe 
    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE" 
    width="100%" 
    height="300" 
    style="border: 3px solid #FF1493; margin: 20px 0;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

To get embed code:
1. Go to Google Maps
2. Search for your venue
3. Click "Share" → "Embed a map"
4. Copy the iframe code

---

## 🎨 Font Changes

### Use Different Fonts

In `style.css`, change the body font-family:

**For a more elegant look:**
```css
font-family: 'Georgia', 'Garamond', serif;
```

**For a modern look:**
```css
font-family: 'Arial', 'Helvetica', sans-serif;
```

**For a fun look (keep 90s vibe):**
```css
font-family: 'Comic Sans MS', 'Marker Felt', cursive;
```

**Use Google Fonts:**
Add to `<head>` in index.html:
```html
<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
```

Then in CSS:
```css
font-family: 'Pacifico', cursive;
```

---

## 🎉 Animation Effects

### Add Floating Hearts
Add to bottom of `script.js`:

```javascript
// Floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💕';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.bottom = '-50px';
    heart.style.fontSize = '30px';
    heart.style.opacity = '0.7';
    heart.style.pointerEvents = 'none';
    heart.style.animation = 'float 4s ease-in';
    heart.style.zIndex = '1000';
    
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 4000);
}

setInterval(createHeart, 3000);
```

Add to `style.css`:
```css
@keyframes float {
    0% {
        bottom: -50px;
        opacity: 0.7;
    }
    100% {
        bottom: 120%;
        opacity: 0;
    }
}
```

### Rainbow Text Effect
Add this class to `style.css`:

```css
.rainbow-text {
    background: linear-gradient(to right, 
        #FF1493, #FFD700, #00CED1, #FF69B4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: rainbow-shift 3s infinite;
}

@keyframes rainbow-shift {
    0%, 100% { filter: hue-rotate(0deg); }
    50% { filter: hue-rotate(360deg); }
}
```

Use it:
```html
<h2 class="rainbow-text">Our Wedding Day!</h2>
```

---

## 🎯 Quick Tips

### Remove Sparkle Effect
In `script.js`, delete or comment out (add `//` at start):
```javascript
// document.addEventListener('click', function(e) {
//     createSparkle(e.pageX, e.pageY);
// });
```

### Remove Marquee Scroll
In `index.html`, delete the entire top-bar div or change marquee to regular text:
```html
<div class="top-bar">
    <p style="text-align: center; padding: 5px;">Welcome to Joe's Wedding!</p>
</div>
```

### Make Less "90s"
For a more modern, elegant look:
1. Remove marquee
2. Change font to Georgia or Arial
3. Use softer colors (pastels)
4. Remove border effects (change `ridge` to `solid`)
5. Remove text-shadow effects

---

## 💡 Need More Ideas?

- Browse other wedding websites for inspiration
- Check out Pinterest for wedding website designs
- Keep it simple - less is often more!
- Make sure all important info is easy to find

**Remember**: Save your original files before making major changes! You can always start over. 🎉


