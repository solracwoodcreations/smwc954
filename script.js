const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');

let currentSlide = 0;
const totalSlides = slides.length;

function updateSlide(position) {
  track.style.transform = `translateX(-${position * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlide(currentSlide);
}

// Button event listeners
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Auto-slide (optional)
let autoSlide = true;
let slideInterval;

function startAutoSlide() {
  slideInterval = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}

if (autoSlide) {
  startAutoSlide();
  track.addEventListener('mouseenter', stopAutoSlide);
  track.addEventListener('mouseleave', startAutoSlide);
}

// --- Touch swipe support ---
let startX = 0;
let isSwiping = false;

track.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isSwiping = true;

  // Stop auto-slide during touch
  if (autoSlide) stopAutoSlide();
}, { passive: true });

track.addEventListener('touchmove', (e) => {
  if (!isSwiping) return;

  const currentX = e.touches[0].clientX;
  const diffX = currentX - startX;

  // Optional: prevent accidental scroll
  if (Math.abs(diffX) > 10) e.preventDefault();
}, { passive: false });

track.addEventListener('touchend', (e) => {
  if (!isSwiping) return;

  const endX = e.changedTouches[0].clientX;
  const diffX = endX - startX;

  if (diffX > 50) {
    prevSlide(); // swipe right
  } else if (diffX < -50) {
    nextSlide(); // swipe left
  }

  isSwiping = false;

  // Restart auto-slide
  if (autoSlide) startAutoSlide();
});



 





 





 











 
