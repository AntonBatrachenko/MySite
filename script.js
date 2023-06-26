// JSON-дані для слайдів
var slides = [
    { image: 'slider/slider1.jpg', caption: 'Слайд 1' },
    { image: 'slider/slider2.jpg', caption: 'Слайд 2' },
    { image: 'slider/slider3.jpg', caption: 'Слайд 3' }
];

var currentSlide = 0;
var slider = document.getElementsByClassName('slider1');
var prevButton = document.getElementById('prev-button');
var nextButton = document.getElementById('next-button');

function showSlide(slideIndex) {
    var slide = slides[slideIndex];
    slider.innerHTML = `
      <img src="${slide.image}" alt="Slide Image">
      <div class="caption">${slide.caption}</div>
    `;
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Показати перший слайд при завантаженні сторінки
showSlide(currentSlide);

function registration() {
    window.location.href = "registration.html";
}

function login() {
    window.location.href = "login.html";
}