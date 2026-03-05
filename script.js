/**
 * Inizializzazione Librerie
 */
// Inizializza le icone Lucide
lucide.createIcons();

// Inizializza le animazioni allo scroll (AOS)
AOS.init({ 
    duration: 1000, 
    once: true 
});

/**
 * Gestione Navbar allo Scroll
 */
const nav = document.getElementById('main-nav');
window.addEventListener('scroll', () => {
    // Se lo scroll supera i 50px, aggiunge la classe 'nav-scrolled'
    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});

/**
 * Gestione Menu Mobile (Open/Close)
 */
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const overlay = document.getElementById('mobile-menu-overlay');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Funzione per aprire il menu
menuToggle.onclick = () => overlay.classList.add('active');

// Funzione per chiudere il menu
menuClose.onclick = () => overlay.classList.remove('active');

// Chiude il menu quando si clicca su un link
mobileLinks.forEach(link => {
    link.onclick = () => overlay.classList.remove('active');
});

/**
 * Slider Hero Automatico
 */
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

setInterval(() => {
    // Rendi invisibile la slide attuale
    slides[currentSlide].classList.replace('opacity-100', 'opacity-0');
    
    // Calcola l'indice della prossima slide
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Rendi visibile la nuova slide
    slides[currentSlide].classList.replace('opacity-0', 'opacity-100');
}, 5000); // Cambio ogni 5 secondi