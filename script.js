document.addEventListener('DOMContentLoaded', function() {
    const birthdayCard = document.getElementById('birthdayCard');
    const backContent = birthdayCard.querySelector('.back');

    birthdayCard.addEventListener('click', function() {
        birthdayCard.classList.toggle('flipped');
        // Toggle visibility of back content to ensure it's displayed only when flipped
        if (birthdayCard.classList.contains('flipped')) {
            backContent.classList.remove('hidden');
        } else {
            backContent.classList.add('hidden');
        }
    });
});
