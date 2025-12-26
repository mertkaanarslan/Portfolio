// Scroll to top on page load/refresh
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// Also scroll to top when page is shown (back/forward navigation)
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        window.scrollTo(0, 0);
    }
});

// Scroll to top immediately on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.scrollTo(0, 0);
    });
} else {
    window.scrollTo(0, 0);
}

// Mobile Menu Toggle
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

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Language Toggle
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

// Navbar Scroll Effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Intersection Observer for Animations - Optimized for faster loading
const observerOptions = {
    threshold: 0.01, // Trigger earlier
    rootMargin: '0px 0px 100px 0px' // Start animation 100px before element is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            // Stop observing once animated
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Separate observer for timeline items (faster)
const timelineObserverOptions = {
    threshold: 0.01,
    rootMargin: '0px 0px 150px 0px' // Even earlier for timeline
};

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            timelineObserver.unobserve(entry.target);
        }
    });
}, timelineObserverOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Regular elements
    const animateElements = document.querySelectorAll('.project-card, .skill-category, .education-card, .stat-item');
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.4s ease ${index * 0.05}s, transform 0.4s ease ${index * 0.05}s`;
        observer.observe(el);
    });
    
    // Timeline items - animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ease ${index * 0.03}s, transform 0.5s ease ${index * 0.03}s`;
        timelineObserver.observe(el);
    });
});

// Skill Bars Animation
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.querySelector('.skills-grid');
    if (skillsSection) {
        skillObserver.observe(skillsSection);
    }
});

// Contact Form Handling with EmailJS
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('form-message');
const submitBtn = document.getElementById('submit-btn');

// Get current language
function getCurrentLanguage() {
    const activeLangBtn = document.querySelector('.lang-btn.active');
    return activeLangBtn ? activeLangBtn.getAttribute('data-lang') : 'en';
}

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        const currentLang = getCurrentLanguage();
        
        // Disable submit button
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = currentLang === 'tr' ? 'Gönderiliyor...' : 'Sending...';
        }
        
        // Hide previous messages
        if (formMessage) {
            formMessage.style.display = 'none';
        }
        
        // Form will submit normally to Formspree
        // We'll show success message after redirect or handle it with JavaScript
        
        // Set _replyto to user's email before submit
        const emailInput = document.getElementById('email');
        const replyToInput = contactForm.querySelector('input[name="_replyto"]');
        if (emailInput && replyToInput) {
            replyToInput.value = emailInput.value;
        }
        
        // Set subject with user's subject
        const subjectInput = document.getElementById('subject');
        const subjectHidden = contactForm.querySelector('input[name="_subject"]');
        if (subjectInput && subjectHidden) {
            subjectHidden.value = 'Portfolio Contact Form - ' + subjectInput.value;
        }
        
        // If form has action (Formspree), let it submit normally
        // Otherwise show error
        const formAction = contactForm.getAttribute('action');
        
        if (!formAction || formAction.includes('YOUR_FORM_ID')) {
            e.preventDefault();
            
            // Error message - Formspree not configured
            if (formMessage) {
                formMessage.style.display = 'block';
                formMessage.className = 'form-message error';
                formMessage.textContent = currentLang === 'tr' 
                    ? '❌ Form henüz yapılandırılmamış. Lütfen Formspree Form ID\'nizi ekleyin veya doğrudan arslanmertkaan09@gmail.com adresine mail gönderin.'
                    : '❌ Form not configured yet. Please add your Formspree Form ID or send an email directly to arslanmertkaan09@gmail.com';
            }
            
            // Re-enable submit button
            if (submitBtn) {
                submitBtn.disabled = false;
                if (currentLang === 'tr') {
                    submitBtn.innerHTML = '<span class="lang-en" style="display: none;">Send Message</span><span class="lang-tr">Mesaj Gönder</span>';
                } else {
                    submitBtn.innerHTML = '<span class="lang-en">Send Message</span><span class="lang-tr" style="display: none;">Mesaj Gönder</span>';
                }
            }
        }
        // If Formspree is configured, form will submit normally
        // Formspree will redirect to a thank you page
    });
    
    // Handle Formspree redirect (if configured)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        const currentLang = getCurrentLanguage();
        if (formMessage) {
            formMessage.style.display = 'block';
            formMessage.className = 'form-message success';
            formMessage.textContent = currentLang === 'tr' 
                ? '✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.'
                : '✅ Message sent successfully! I will get back to you soon.';
        }
    }
}

// Scroll to Top Functionality
let scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    border: none;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    z-index: 999;
`;

scrollToTopBtn.addEventListener('mouseenter', () => {
    scrollToTopBtn.style.transform = 'translateY(-5px)';
    scrollToTopBtn.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
});

scrollToTopBtn.addEventListener('mouseleave', () => {
    scrollToTopBtn.style.transform = 'translateY(0)';
    scrollToTopBtn.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Active Navigation Link
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// Add active class styling
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

