document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById("hamburger");
    const modal = document.getElementById("myModal");
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-link");
    const closeBtn = document.querySelector(".close");

    function toggleModal() {
        modal.classList.toggle('show');
        hamburger.setAttribute('aria-expanded', modal.classList.contains('show'));
        console.log('Modal visibility toggled:', modal.classList.contains('show'));
    }

    function handleViewportChange() {
        if (window.innerWidth > 768) {
            modal.classList.remove('show');
            navbar.style.display = 'block';
        } else {
            navbar.style.display = 'none';
            if (!modal.classList.contains('show')) {
                modal.style.display = 'none';
            }
        }
        console.log('Viewport change handled, width:', window.innerWidth);
    }

    hamburger.addEventListener('click', toggleModal);

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            console.log('Nav link clicked:', link.textContent);
            event.preventDefault();
            if (window.innerWidth <= 768) {
                toggleModal();
            }
            // Simulate navigation
            const target = link.getAttribute('href');
            console.log('Navigating to:', target);
            window.location.href = target;
        });
    });

    closeBtn.addEventListener('click', toggleModal);

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            toggleModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            toggleModal();
        }
    });

    document.querySelector('.modal-content').addEventListener('click', function(e) {
        e.stopPropagation();
    });

    handleViewportChange();
    window.addEventListener('resize', handleViewportChange);
});
