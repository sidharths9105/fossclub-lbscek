// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active'); // Toggle the active class
            menuToggle.classList.toggle('active'); // Add active state to the toggle button
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove('active'); // Remove active class
                menuToggle.classList.remove('active'); // Remove active state from the toggle button
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active'); // Remove active class
                menuToggle.classList.remove('active'); // Remove active state from the toggle button
            });
        });
    } else {
        console.error('Menu toggle or nav links not found in the DOM.');
    }
});

// Team scroll functionality
document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.team-scroll');
    const prevBtn = document.querySelector('.scroll-btn.prev');
    const nextBtn = document.querySelector('.scroll-btn.next');

    if (scrollContainer && prevBtn && nextBtn) {
        // Scroll left
        prevBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        });

        // Scroll right
        nextBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        });

        // Show/hide scroll buttons based on scroll position
        scrollContainer.addEventListener('scroll', () => {
            const isAtStart = scrollContainer.scrollLeft === 0;
            const isAtEnd = scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1;

            prevBtn.style.display = isAtStart ? 'none' : 'flex';
            nextBtn.style.display = isAtEnd ? 'none' : 'flex';
        });

        // Initial button visibility
        prevBtn.style.display = 'none';
    }
});

// Gallery filtering functionality


document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    function setActiveLink() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 150) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    }

    // Set active link on scroll
    window.addEventListener('scroll', setActiveLink);
    // Set active link on page load
    setActiveLink();
});

// Scroll functionality
        document.addEventListener('DOMContentLoaded', function() {
            const prevBtn = document.querySelector('.scroll-btn.prev');
            const nextBtn = document.querySelector('.scroll-btn.next');
            const teamScroll = document.querySelector('.team-scroll');

            if (prevBtn && nextBtn && teamScroll) {
                prevBtn.addEventListener('click', () => {
                    teamScroll.scrollBy({
                        left: -300,
                        behavior: 'smooth'
                    });
                });

                nextBtn.addEventListener('click', () => {
                    teamScroll.scrollBy({
                        left: 300,
                        behavior: 'smooth'
                    });
                });

                teamScroll.addEventListener('scroll', () => {
                    const isAtStart = teamScroll.scrollLeft === 0;
                    const isAtEnd = teamScroll.scrollLeft + teamScroll.clientWidth >= teamScroll.scrollWidth - 1;

                    prevBtn.style.display = isAtStart ? 'none' : 'flex';
                    nextBtn.style.display = isAtEnd ? 'none' : 'flex';
                });

                // Initial button visibility
                prevBtn.style.display = 'none';
            }
        });
