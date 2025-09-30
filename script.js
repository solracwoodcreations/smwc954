document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.js-card-opener');
    const confettiContainer = document.querySelector('.confetti-container');

    cardContainer.addEventListener('click', () => {
        cardContainer.classList.toggle('open');
        
        if (cardContainer.classList.contains('open')) {
            createConfetti();
        }
    });

    function createConfetti() {
        const colors = ['var(--confetti-color-1)', 'var(--confetti-color-2)', 'var(--confetti-color-3)'];
        for (let i = 0; i < 50; i++) {
            const piece = document.createElement('div');
            piece.classList.add('confetti-piece');
            piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            piece.style.left = `${Math.random() * 100}vw`;
            piece.style.setProperty('--x', `${(Math.random() - 0.5) * 200}px`);
            piece.style.setProperty('--y', `${window.innerHeight + 100}px`);
            piece.style.setProperty('--deg', `${Math.random() * 360}deg`);
            
            confettiContainer.appendChild(piece);
        }

        // Clean up confetti pieces after animation
        setTimeout(() => {
            confettiContainer.innerHTML = '';
        }, 3000);
    }
});











 
