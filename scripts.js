document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById("hamburger");
    const modal = document.getElementById("myModal");
    const closeBtn = document.querySelector(".close");

    // Function to toggle modal visibility
    function toggleModal() {
        modal.classList.toggle('show');
        hamburger.setAttribute('aria-expanded', modal.classList.contains('show'));
    }

    // Hamburger menu click event
    hamburger.addEventListener('click', function () {
        console.log('Hamburger clicked');
        toggleModal();
    });

    // Close button click event
    closeBtn.addEventListener('click', function () {
        console.log('Close button clicked');
        toggleModal();
    });

    // Close modal when clicking outside modal content
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            console.log('Clicked outside modal content');
            toggleModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            console.log('Escape key pressed');
            toggleModal();
        }
    });
});
