document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        mainNav.classList.toggle('show');
    });

    // Close mobile menu when a nav link is clicked
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('show')) {
                mainNav.classList.remove('show');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Dynamic menu population
    const menuItems = [
        { name: "Espresso", description: "A classic shot of rich, concentrated coffee." },
        { name: "Latte", description: "Espresso with steamed milk and a thin layer of foam." },
        { name: "Cappuccino", description: "Equal parts espresso, steamed milk, and milk foam." },
        { name: "Americano", description: "Espresso shots diluted with hot water." },
        { name: "Cold Brew", description: "Smooth, low-acid coffee steeped for 24 hours." },
        { name: "Pastries", description: "Freshly baked pastries and snacks." }
    ];

    const menuList = document.querySelector('.menu-item-list');
    if (menuList) {
        menuItems.forEach(item => {
            const menuItemDiv = document.createElement('div');
            menuItemDiv.classList.add('menu-item');
            menuItemDiv.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            `;
            menuList.appendChild(menuItemDiv);
        });
    }

    // Dynamic location display
    const locationElement = document.getElementById('todays-location');
    const liveMapLink = document.getElementById('live-map-link');

    // Simulate fetching a daily location
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, etc.

    let todaysLocation = "";
    let mapUrl = "#";

    switch (dayOfWeek) {
        case 1:
            todaysLocation = "Today: Corporate Park Plaza (8am - 12pm)";
            mapUrl = "https://maps.google.com/?q=Corporate+Park+Plaza";
            break;
        case 2:
            todaysLocation = "Today: University Campus (9am - 2pm)";
            mapUrl = "https://maps.google.com/?q=University+Campus";
            break;
        case 3:
            todaysLocation = "Today: Downtown Market (10am - 4pm)";
            mapUrl = "https://maps.google.com/?q=Downtown+Market";
            break;
        case 4:
            todaysLocation = "Today: City Hall Square (8am - 1pm)";
            mapUrl = "https://maps.google.com/?q=City+Hall+Square";
            break;
        case 5:
            todaysLocation = "Today: Lakeside Park Festival (11am - 6pm)";
            mapUrl = "https://maps.google.com/?q=Lakeside+Park+Festival";
            break;
        default:
            todaysLocation = "Closed for private events or weekend rest.";
            mapUrl = "#";
            liveMapLink.style.display = "none"; // Hide link if no public location
    }

    if (locationElement) {
        locationElement.textContent = todaysLocation;
    }
    if (liveMapLink) {
        liveMapLink.href = mapUrl;
    }
});





 





 











 
