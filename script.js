//hamburger menu
function showSidebar(){
            const sidebar = document.querySelector('.sidebar')
            sidebar.style.display = 'flex'
        }
        function hideSidebar(){
            const sidebar = document.querySelector('.sidebar')
            sidebar.style.display = 'none'
        }


//birthday card
document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.card-container');
    const openCardBtn = document.querySelector('.open-card-btn');
    const confettiContainer = document.querySelector('.confetti-container');

    // Handle card opening
    openCardBtn.addEventListener('click', () => {
        cardContainer.classList.add('open');
        setTimeout(() => {
            createConfetti(100);
        }, 500); // Start confetti after the card begins to open
    });

    // Create a burst of confetti
    function createConfetti(count) {
        const colors = ['#ff69b4', '#ffb6c1', '#ffff00', '#00ff00']; // Match CSS colors
        for (let i = 0; i < count; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.animationDelay = `${Math.random() * 2}s`;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confettiContainer.appendChild(confetti);
        }
    }
});


//card carousel
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.querySelectorAll('.carousel-slide'));
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    const indicatorsContainer = document.querySelector('.carousel-indicators');

    let currentSlideIndex = 0;

    // Generate indicators dynamically based on the number of slides
    slides.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        indicator.addEventListener('click', () => moveToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });

    const indicators = Array.from(indicatorsContainer.querySelectorAll('.indicator'));

    const updateCarousel = () => {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.scrollLeft = slideWidth * currentSlideIndex;
        updateIndicators();
    };

    const updateIndicators = () => {
        indicators.forEach((indicator, index) => {
            if (index === currentSlideIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    };

    const moveToSlide = (targetIndex) => {
        currentSlideIndex = targetIndex;
        updateCarousel();
    };

    nextButton.addEventListener('click', () => {
        if (currentSlideIndex < slides.length - 1) {
            moveToSlide(currentSlideIndex + 1);
        } else {
            moveToSlide(0); // Loop to the beginning
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentSlideIndex > 0) {
            moveToSlide(currentSlideIndex - 1);
        } else {
            moveToSlide(slides.length - 1); // Loop to the end
        }
    });
    
    // Listen for manual scrolling to update indicators
    track.addEventListener('scroll', () => {
        const slideWidth = slides[0].getBoundingClientRect().width;
        const scrollPosition = track.scrollLeft;
        const newIndex = Math.round(scrollPosition / slideWidth);
        if (newIndex !== currentSlideIndex) {
            currentSlideIndex = newIndex;
            updateIndicators();
        }
    });

    // Initialize the carousel
    updateCarousel();
});






 



 





 





 











 
