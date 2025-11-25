// ================================
// SIMPLE WEDDING WEBSITE JAVASCRIPT
// ================================

// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // RANDOM QUOTE DISPLAY
    const quotes = [
        '"In a heart there are windows and doors<br>You can let the light in<br>You can feel the wind blow" <br> <strong>Warren Zevon</strong>',
        '"If not for you<br>Winter would have no spring<br>Couldn\'t hear the robin sing<br>I just wouldn\'t have a clue<br>If not for you" <br> <strong>Bob Dylan</strong>',
        '"If you know what life is worth, you will look for yours on earth" <br> <strong>Bob Marley</strong>'
    ];
    
    const quoteElement = document.getElementById('quote');
    if (quoteElement) {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteElement.innerHTML = '<em>' + randomQuote + '</em>';
    }
    
    // RSVP FORM HANDLING
    const rsvpForm = document.getElementById('rsvpForm');
    
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual form submission
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const guests = document.getElementById('guests').value;
            const fridayAttending = document.querySelector('input[name="fridayAttending"]:checked');
            const saturdayAttending = document.querySelector('input[name="saturdayAttending"]:checked');
            const karaoke = document.getElementById('karaoke').value;
            const dietary = document.getElementById('dietary').value;
            const camping = document.querySelector('input[name="camping"]:checked');
            
            // Check if required fields are filled
            if (!fridayAttending) {
                alert('Please let us know if you can attend Friday night! 💕');
                return;
            }
            if (!saturdayAttending) {
                alert('Please let us know if you can attend Saturday! 💕');
                return;
            }
            
            // Show confirmation message
            let confirmMessage = `🎉 Thanks ${name}! We've recorded your RSVP:\n\n` +
                                `- Email: ${email}\n` +
                                `- Number of guests: ${guests}\n` +
                                `- Friday welcome reception: ${fridayAttending.value}\n` +
                                `- Saturday ceremony & reception: ${saturdayAttending.value}\n`;
            
            if (karaoke) {
                confirmMessage += `- Karaoke request: ${karaoke}\n`;
            }
            if (dietary) {
                confirmMessage += `- Special requests: ${dietary}\n`;
            }
            if (camping) {
                confirmMessage += `- Camping: ${camping.value}\n`;
            }
            
            confirmMessage += `\nSee you at the wedding! 💒`;
            
            alert(confirmMessage);
            
            // Optional: Reset form after submission
            rsvpForm.reset();
            
            // ===================================
            // TO ACTUALLY SEND THIS DATA TO GOOGLE FORMS:
            // 1. Get your Google Form's pre-filled link
            // 2. Extract the entry IDs (entry.123456789) for each field
            // 3. Replace the form action and field names below
            // 4. Remove e.preventDefault() above
            //
            // Example:
            // <form action="https://docs.google.com/forms/d/e/FORM_ID/formResponse" method="POST">
            //   <input name="entry.123456789" ... > (for name field)
            //   <input name="entry.987654321" ... > (for email field)
            // ===================================
        });
    }
    
    // SMOOTH SCROLL TO SECTIONS (backup for browsers that don't support CSS scroll-behavior)
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ADD SPARKLE EFFECT ON CLICK (fun extra feature!)
    document.addEventListener('click', function(e) {
        createSparkle(e.pageX, e.pageY);
    });
    
    function createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.fontSize = '20px';
        sparkle.style.animation = 'sparkle 1s forwards';
        sparkle.style.zIndex = '9999';
        
        document.body.appendChild(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
    
    // Add sparkle animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkle {
            0% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
            100% {
                opacity: 0;
                transform: translateY(-50px) scale(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    // RANDOMIZE PHOTO GALLERY
    // Add all available images here
    const allPhotos = [
        'images/joe1.jpg',
        'images/joe2.jpg',
        'images/joe3.JPEG',
        'images/joe4.JPG',
        'images/joe5.jpg',
        'images/joe6.jpg',
        'images/joe7.jpg',
        'images/joe8.jpg',
        'images/joe9.jpg',
        'images/joe10.jpg',
        'images/joe11.jpg',
        'images/joe12.jpg',
        'images/joe13.jpg',
        'images/joe14.jpg',
        'images/joe15.jpg',
        'images/joe16.jpg'
    ];
    
    // Function to shuffle array
    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
    
    // Function to update photo gallery
    function updatePhotoGallery() {
        const photoGrid = document.querySelector('.photo-grid');
        if (photoGrid) {
            // Shuffle photos
            const shuffledPhotos = shuffleArray(allPhotos);
            
            // Get all img elements in photo grid
            const photoImages = photoGrid.querySelectorAll('img');
            
            // Update each image with shuffled photos (show 4 random)
            photoImages.forEach((img, index) => {
                if (index < shuffledPhotos.length && index < 4) {
                    // Add a quick fade effect
                    img.style.opacity = '0';
                    setTimeout(() => {
                        img.src = shuffledPhotos[index];
                        img.alt = `Liz & Joseph - Photo ${index + 1}`;
                        img.style.opacity = '1';
                    }, 150);
                }
            });
        }
    }
    
    // Initialize photo gallery on page load
    updatePhotoGallery();
    
    // Add click event to refresh button
    const refreshButton = document.getElementById('refreshPhotos');
    if (refreshButton) {
        refreshButton.addEventListener('click', function() {
            updatePhotoGallery();
            // Add a fun animation to the button
            this.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                this.style.transform = 'rotate(0deg)';
            }, 500);
        });
    }
    
    // MUSIC PLAYER CONTROLS
    const bgMusic = document.getElementById('bgMusic');
    const audioSource = document.getElementById('audioSource');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const equalizer = document.getElementById('equalizer');
    const songTitle = document.getElementById('songTitle');
    const songArtist = document.getElementById('songArtist');
    
    // Array of available songs
    const songs = [
        {
            title: 'Jokerman',
            artist: 'Bob Dylan',
            file: 'music/blowin-in-the-wind.mp3',
            startTime: 0
        },
        {
            title: 'You\'re Still The One',
            artist: 'Shania Twain',
            file: 'music/you-are-still-the-one.mp3',
            startTime: 21
        }
    ];
    
    // Randomly select a song
    const randomSong = songs[Math.floor(Math.random() * songs.length)];
    
    // Set up the music player
    if (bgMusic && audioSource && playBtn && pauseBtn && songTitle && songArtist) {
        // Load the random song
        audioSource.src = randomSong.file;
        bgMusic.load();
        
        // Update song info display
        songTitle.innerHTML = '<strong>' + randomSong.title + '</strong>';
        songArtist.innerHTML = '<em>' + randomSong.artist + '</em>';
        
        // Set start time when song loads
        bgMusic.addEventListener('loadedmetadata', function() {
            bgMusic.currentTime = randomSong.startTime;
        });
        
        playBtn.addEventListener('click', function() {
            // Set the start time before playing
            if (bgMusic.currentTime === 0 || bgMusic.currentTime < randomSong.startTime) {
                bgMusic.currentTime = randomSong.startTime;
            }
            bgMusic.play();
            playBtn.style.display = 'none';
            pauseBtn.style.display = 'block';
            if (equalizer) {
                equalizer.style.display = 'flex';
            }
        });
        
        pauseBtn.addEventListener('click', function() {
            bgMusic.pause();
            pauseBtn.style.display = 'none';
            playBtn.style.display = 'block';
            if (equalizer) {
                equalizer.style.display = 'none';
            }
        });
        
        // Handle when song ends (though it's set to loop)
        bgMusic.addEventListener('ended', function() {
            // Reset to start time for looping
            bgMusic.currentTime = randomSong.startTime;
            pauseBtn.style.display = 'none';
            playBtn.style.display = 'block';
            if (equalizer) {
                equalizer.style.display = 'none';
            }
        });
    }
    
    // MOBILE MUSIC PLAYER CONTROLS
    const musicPlayer = document.getElementById('musicPlayer');
    const musicClose = document.getElementById('musicClose');
    const musicToggle = document.getElementById('musicToggle');
    
    if (musicClose && musicPlayer) {
        musicClose.addEventListener('click', function(e) {
            e.stopPropagation();
            musicPlayer.classList.add('minimized');
        });
    }
    
    if (musicToggle && musicPlayer) {
        musicToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            musicPlayer.classList.remove('minimized');
        });
    }
    
    // VISITOR COUNTER - Global tracking via API with localStorage fallback
    const counterDigits = document.querySelectorAll('.counter-digit');
    
    if (counterDigits.length > 0) {
        // Function to animate the counter
        function animateCounter(visitorCount) {
            const countString = visitorCount.toString().padStart(6, '0');
            
            counterDigits.forEach((digit, index) => {
                const finalDigit = parseInt(countString[index]);
                let currentDigit = 0;
                
                const speed = 50 + Math.random() * 100;
                const iterations = 10 + Math.floor(Math.random() * 10);
                
                const interval = setInterval(() => {
                    currentDigit = Math.floor(Math.random() * 10);
                    digit.textContent = currentDigit;
                }, speed);
                
                setTimeout(() => {
                    clearInterval(interval);
                    digit.textContent = finalDigit;
                }, speed * iterations);
            });
        }
        
        // Using a reliable free counter service: visitor-badge API
        // This service is actively maintained and provides simple REST API
        const pageId = encodeURIComponent('joe-liz-wedding-2026');
        const counterUrl = `https://visitor-badge.laobi.icu/badge?page_id=${pageId}&format=json`;
        
        fetch(counterUrl, {
            method: 'GET'
        })
        .then(response => {
            if (!response.ok) throw new Error('Service unavailable');
            return response.text();
        })
        .then(text => {
            // Try to parse as JSON
            try {
                const data = JSON.parse(text);
                const count = parseInt(data.count || data.views || data.visitors || '1');
                animateCounter(count);
            } catch (e) {
                // If not JSON, try to extract number from text/SVG
                const match = text.match(/\d+/);
                if (match) {
                    animateCounter(parseInt(match[0]));
                } else {
                    throw new Error('Could not parse count');
                }
            }
        })
        .catch(error => {
            // Fallback to localStorage if API is unavailable
            console.log('Using localStorage for visitor count (API unavailable)');
            let visitorCount = parseInt(localStorage.getItem('visitorCount') || '0');
            visitorCount++;
            localStorage.setItem('visitorCount', visitorCount.toString());
            animateCounter(visitorCount);
            
            // For production: Consider setting up Google Analytics or similar
            console.log('For accurate global tracking, consider Google Analytics or Plausible');
        });
    }
    
});

// Fun console message for curious visitors
console.log('💒 Welcome to our wedding website! 💒');
console.log('Made with love and 90s nostalgia! ✨');


