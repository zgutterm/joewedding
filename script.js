// ================================
// SIMPLE WEDDING WEBSITE JAVASCRIPT
// ================================

// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // RSVP FORM HANDLING
    const rsvpForm = document.getElementById('rsvpForm');
    
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual form submission
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const attending = document.querySelector('input[name="attending"]:checked');
            const guests = document.getElementById('guests').value;
            const message = document.getElementById('message').value;
            
            // Check if attending option is selected
            if (!attending) {
                alert('Please let us know if you can attend! 💕');
                return;
            }
            
            // Show confirmation message
            const attendingValue = attending.value;
            let confirmMessage = '';
            
            if (attendingValue === 'yes') {
                confirmMessage = `🎉 Yay! Thanks ${name}! We're so excited to celebrate with you!\n\n` +
                                `We've recorded:\n` +
                                `- Email: ${email}\n` +
                                `- Number of guests: ${guests}\n` +
                                `${message ? '- Special requests: ' + message : ''}\n\n` +
                                `See you at the wedding! 💒`;
            } else {
                confirmMessage = `😢 Thanks for letting us know, ${name}. We'll miss you!\n\n` +
                                `You'll be in our thoughts! 💕`;
            }
            
            alert(confirmMessage);
            
            // Optional: Reset form after submission
            rsvpForm.reset();
            
            // ===================================
            // TO ACTUALLY SEND THIS DATA:
            // Option 1: Use Formspree (https://formspree.io/)
            //   - Sign up, get an endpoint
            //   - Add action="https://formspree.io/f/YOUR_FORM_ID" to the form tag
            //   - Remove e.preventDefault() above
            //
            // Option 2: Use Google Forms
            //   - Create a Google Form
            //   - Use form action to point to it
            //
            // Option 3: Use Netlify Forms
            //   - Add netlify attribute to form tag
            //   - Deploy to Netlify
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
    
});

// Fun console message for curious visitors
console.log('💒 Welcome to our wedding website! 💒');
console.log('Made with love and 90s nostalgia! ✨');


