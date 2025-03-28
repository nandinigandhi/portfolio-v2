let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
const slidesContainer = document.querySelector('.slides');
const totalSlides = slides.length;
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            // Set the container height to the active image's height
            const slideHeight = slide.offsetHeight;
            slidesContainer.style.height = `${slideHeight}px`;
            // Position buttons based on active image height
            prevButton.style.top = `${slideHeight / 2}px`;
            nextButton.style.top = `${slideHeight / 2}px`;
            prevButton.style.transform = 'translateY(-50%)';
            nextButton.style.transform = 'translateY(-50%)';
        }
    });
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    showSlide(currentSlide);
}

// Show the first slide on load
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});

// Add click event listeners
prevButton.addEventListener('click', () => changeSlide(-1));
nextButton.addEventListener('click', () => changeSlide(1));