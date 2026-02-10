
// Preloader
window.addEventListener('load', function () {
    setTimeout(function () {
        document.querySelector('.preloader').classList.add('hidden');
    }, 2000);
});

// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor--follower');

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

function animateFollower() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;

    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';

    requestAnimationFrame(animateFollower);
}
animateFollower();

// Cursor hover effect
const hoverElements = document.querySelectorAll('a, button, .btn');
hoverElements.forEach(function (el) {
    el.addEventListener('mouseenter', function () {
        cursor.classList.add('hover');
        cursorFollower.classList.add('hover');
    });
    el.addEventListener('mouseleave', function () {
        cursor.classList.remove('hover');
        cursorFollower.classList.remove('hover');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu
const mobileToggle = document.querySelector('.navbar__toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileClose = document.querySelector('.mobile-menu__close');
const mobileOverlay = document.querySelector('.mobile-overlay');
const mobileLinks = document.querySelectorAll('.mobile-menu__nav a');

function openMobileMenu() {
    mobileMenu.classList.add('active');
    mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

mobileToggle.addEventListener('click', openMobileMenu);
mobileClose.addEventListener('click', closeMobileMenu);
mobileOverlay.addEventListener('click', closeMobileMenu);
mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMobileMenu);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
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

// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: true,
    offset: 100
});

// Initialize Fancybox
Fancybox.bind('[data-fancybox]', {});

// Form submission
document.querySelector('.appointment__form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Rezervasyon talebiniz için teşekkür ederiz! Randevunuzu onaylamak için kısa süre içinde sizinle iletişime geçeceğiz.');
    this.reset();
});
