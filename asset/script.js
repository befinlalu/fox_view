// script.js
let currentSlide = 0;

// Function to show a specific slide
function showSlide(index) {
  const slides = document.querySelector('.slides');
  const dots = document.querySelectorAll('.dot');
  const totalSlides = dots.length;

  // Update the index for circular sliding
  currentSlide = (index + totalSlides) % totalSlides;

  // Move the slides container to show the current slide
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Update dot indicators
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentSlide].classList.add('active');
}

// Function to move to the next slide automatically
function nextSlide() {
  showSlide(currentSlide + 1);
}

// Initialize the slider
document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);

  // Enable automatic sliding every 3 seconds
  setInterval(nextSlide, 3000);
});
