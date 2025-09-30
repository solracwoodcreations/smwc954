document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const confettiContainer = document.querySelector('.confetti-container');

    card.addEventListener('click', () => {
        card.classList.toggle('open');
        if (card.classList.contains('open')) {
            setTimeout(createConfetti, 500); // Start confetti after card opens
        }
    });

    function createConfetti() {
        const colors = ['#f0f', '#0ff', '#ff0', '#0f0', '#f00', '#00f'];
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = Math.random() * 2 + 3 + 's'; // Random duration between 3 and 5 seconds
            confetti.style.animationDelay = Math.random() * 1 + 's'; // Random delay
            confettiContainer.appendChild(confetti);

            // Remove confetti after animation to prevent DOM clutter
            confetti.addEventListener('animationend', () => {
                confetti.remove();
            });
        }
    }
});





 











 
