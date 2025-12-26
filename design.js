// Design Portfolio JavaScript

// Scroll to top on page load/refresh
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// Language toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLang = 'en';

    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang !== currentLang) {
                currentLang = lang;
                switchLanguage(lang);
                langButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            }
        });
    });

    function switchLanguage(lang) {
        const enElements = document.querySelectorAll('.lang-en');
        const trElements = document.querySelectorAll('.lang-tr');

        if (lang === 'tr') {
            enElements.forEach(el => {
                if (el.style) el.style.display = 'none';
            });
            trElements.forEach(el => {
                if (el.style) el.style.display = 'inline';
            });
        } else {
            enElements.forEach(el => {
                if (el.style) el.style.display = 'inline';
            });
            trElements.forEach(el => {
                if (el.style) el.style.display = 'none';
            });
        }
    }

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
});
