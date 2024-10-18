// Afficher le sélecteur de couleur lorsque le bouton est cliqué
document.getElementById('color-picker-button').addEventListener('click', function() {
    document.getElementById('color-picker').click();
});

// Changer la couleur de fond de la page en fonction de la sélection
document.getElementById('color-picker').addEventListener('input', function() {
    const selectedColor = this.value;
    document.body.style.backgroundColor = selectedColor;
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for Fade-In Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('.hidden').forEach(section => {
    observer.observe(section);
});

// Form Validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('form-message');

    if (name && email && message) {
        formMessage.textContent = "Message envoyé avec succès!";
        formMessage.style.color = "green";
    } else {
        formMessage.textContent = "Veuillez remplir tous les champs.";
        formMessage.style.color = "red";
    }
});

// Carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

document.getElementById('next').addEventListener('click', function() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
});

document.getElementById('prev').addEventListener('click', function() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
});

slides[currentSlide].classList.add('active');
