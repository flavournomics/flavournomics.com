document.addEventListener('DOMContentLoaded', function() {

    // Smooth Scrolling
    const links = document.querySelectorAll("a[href^='#']");
    
    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const href = this.getAttribute('href');
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Responsive Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('nav ul');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
});
