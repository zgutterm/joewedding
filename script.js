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
    
    // JUMP TO TOP (mobile) - show after scrolling, scroll to top on click
    const jumpToTopBtn = document.getElementById('jumpToTop');
    if (jumpToTopBtn) {
        function toggleJumpToTop() {
            if (window.innerWidth <= 768 && window.scrollY > 300) {
                jumpToTopBtn.classList.remove('hidden');
            } else {
                jumpToTopBtn.classList.add('hidden');
            }
        }
        window.addEventListener('scroll', toggleJumpToTop);
        toggleJumpToTop();
        jumpToTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // QUAKER CEREMONY COLLAPSIBLE
    const ceremonyToggleBtn = document.getElementById('ceremonyToggleBtn');
    const ceremonyToggleContent = document.getElementById('ceremonyToggleContent');
    if (ceremonyToggleBtn && ceremonyToggleContent) {
        ceremonyToggleBtn.addEventListener('click', function() {
            const isExpanded = ceremonyToggleContent.hidden;
            ceremonyToggleContent.hidden = !isExpanded;
            ceremonyToggleBtn.setAttribute('aria-expanded', isExpanded);
            ceremonyToggleBtn.textContent = isExpanded ? 'Show less ▲' : 'Learn more about the Quaker ceremony ▼';
        });
    }
    
    // MOBILE NAV TOGGLE
    const navToggle = document.getElementById('navToggle');
    const nav = document.querySelector('nav');
    if (navToggle && nav) {
        navToggle.addEventListener('click', function() {
            nav.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', nav.classList.contains('open'));
        });
        document.querySelectorAll('.nav-links a').forEach(function(link) {
            link.addEventListener('click', function() {
                nav.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
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
    
    // VISITOR COUNTER - Using Firebase
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
        
        // Use Firebase if configured, otherwise fallback to localStorage
        if (window.database) {
            const counterRef = window.database.ref('visitorCount');
            
            // Increment the counter
            counterRef.transaction(function(currentCount) {
                return (currentCount || 0) + 1;
            }).then(function(result) {
                if (result.committed) {
                    animateCounter(result.snapshot.val());
                }
            }).catch(function(error) {
                console.log('Firebase counter error:', error);
                // Fallback to localStorage
                let visitorCount = parseInt(localStorage.getItem('visitorCount') || '0');
                visitorCount++;
                localStorage.setItem('visitorCount', visitorCount.toString());
                animateCounter(visitorCount);
            });
        } else {
            // Firebase not configured, use localStorage
            let visitorCount = parseInt(localStorage.getItem('visitorCount') || '0');
            visitorCount++;
            localStorage.setItem('visitorCount', visitorCount.toString());
            animateCounter(visitorCount);
        }
    }
    
    // COMMENTS SECTION
    const commentForm = document.getElementById('commentForm');
    const commentsContainer = document.getElementById('commentsContainer');
    
    if (commentForm && commentsContainer) {
        // Function to display a comment
        function displayComment(commentId, commentData) {
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment-item';
            commentDiv.dataset.commentId = commentId;
            
            const date = new Date(commentData.timestamp);
            const dateString = date.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric',
                hour: 'numeric',
                minute: '2-digit'
            });
            
            commentDiv.innerHTML = `
                <div class="comment-header">
                    <span class="comment-author">${escapeHtml(commentData.name)}</span>
                    <span class="comment-date">${dateString}</span>
                </div>
                <div class="comment-text">${escapeHtml(commentData.message)}</div>
            `;
            
            return commentDiv;
        }
        
        // Function to escape HTML to prevent XSS
        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }
        
        // Load existing comments
        function loadComments() {
            if (window.database) {
                const commentsRef = window.database.ref('comments');
                
                commentsRef.orderByChild('timestamp').limitToLast(50).on('value', function(snapshot) {
                    commentsContainer.innerHTML = '';
                    
                    if (!snapshot.exists()) {
                        commentsContainer.innerHTML = '<p class="no-comments">No messages yet! Be the first to leave one! 💕</p>';
                        return;
                    }
                    
                    const comments = [];
                    snapshot.forEach(function(childSnapshot) {
                        comments.push({
                            id: childSnapshot.key,
                            data: childSnapshot.val()
                        });
                    });
                    
                    // Display in reverse order (newest first)
                    comments.reverse().forEach(function(comment) {
                        commentsContainer.appendChild(displayComment(comment.id, comment.data));
                    });
                });
            } else {
                // Firebase not configured
                commentsContainer.innerHTML = '<p class="no-comments">Comments require Firebase configuration. See console for setup instructions.</p>';
            }
        }
        
        // Handle comment form submission
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('commentName').value.trim();
            const message = document.getElementById('commentMessage').value.trim();
            
            if (!name || !message) {
                alert('Please fill in both your name and message! 💕');
                return;
            }
            
            if (window.database) {
                const commentsRef = window.database.ref('comments');
                const newComment = {
                    name: name,
                    message: message,
                    timestamp: Date.now()
                };
                
                commentsRef.push(newComment)
                    .then(function() {
                        // Clear the form
                        commentForm.reset();
                        alert('Thanks for your message! 💕 It means so much to us!');
                    })
                    .catch(function(error) {
                        console.error('Error posting comment:', error);
                        alert('Oops! There was an error posting your message. Please try again.');
                    });
            } else {
                alert('Comments require Firebase configuration. Please set up Firebase to enable this feature.');
            }
        });
        
        // Load comments on page load
        loadComments();
    }
    
});

// Fun console message for curious visitors
console.log('💒 Welcome to our wedding website! 💒');
console.log('Made with love and 90s nostalgia! ✨');
console.log('');
console.log('🔥 Firebase Setup Instructions:');
console.log('1. Go to https://console.firebase.google.com/');
console.log('2. Create a new project (or use existing)');
console.log('3. Add a web app to your project');
console.log('4. Copy the config and replace in index.html');
console.log('5. Enable Realtime Database in Firebase Console');
console.log('6. Set database rules to allow read/write (for testing) or implement proper security rules');


