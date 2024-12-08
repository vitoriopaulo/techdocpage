document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById("hamburger");
    const modal = document.getElementById("myModal");
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-link");

    // Toggle modal
    function toggleModal() {
        modal.classList.toggle('show');
        hamburger.setAttribute('aria-expanded', modal.classList.contains('show'));
    }

    // Hamburger click event
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleModal();
    });

    // Handle link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                toggleModal();
            }
        });
    });

    // Close when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && 
            modal.classList.contains('show') && 
            !navbar.contains(e.target) && 
            !hamburger.contains(e.target)) {
            toggleModal();
        }
    });
});