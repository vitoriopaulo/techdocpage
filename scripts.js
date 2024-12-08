/* Disfunctional code to be debuged

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("myModal");
    const hamburger = document.getElementById("hamburger");
    const closeBtn = document.querySelector(".close");
    const navLinks = document.querySelectorAll("#navbar .nav-link");

    // Function to toggle modal visibility
    function toggleModal(display) {
        modal.style.display = display;
        if (display === "block") {
            modal.setAttribute('aria-hidden', 'false');
            hamburger.setAttribute('aria-expanded', 'true');
        } else {
            modal.setAttribute('aria-hidden', 'true');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    }

    // Show modal when hamburger is clicked
    hamburger.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleModal("block");
    });

    // Close modal when close button is clicked
    closeBtn.addEventListener('click', function() {
        toggleModal("none");
    });

    // Close modal when clicking outside of modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            toggleModal("none");
        }
    });

    // Handle navigation link clicks
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Extract the section ID (remove the # if present)
            const targetId = this.getAttribute('href').replace('#', '');
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Smooth scroll to the section
                targetSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Keep modal open for desktop/laptop view
                // Only close on mobile
                if (window.innerWidth <= 768) {
                    toggleModal("none");
                }
            }
        });
    });

    // Add keyboard support for closing modal
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            toggleModal("none");
        }
    });

    // Initial modal state
    toggleModal("none");
});

*/

/* Minimal disganostic code to start debuging the issue //

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");
    const modal = document.getElementById("myModal");
    const hamburger = document.getElementById("hamburger");
    const navbar = document.getElementById("navbar");
    
    console.log("Modal element:", modal);
    console.log("Hamburger element:", hamburger);
    console.log("Navbar element:", navbar);
    
    if (modal) {
        modal.style.display = "block";
        console.log("Modal display set to block");
    }
    
    if (navbar) {
        navbar.style.display = "block";
        console.log("Navbar display set to block");
    }
    
    // Basic hamburger click handler for testing
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            console.log("Hamburger clicked");
            if (modal) modal.style.display = "block";
            if (navbar) navbar.style.display = "block";
        });
    }
});
*/

// Updated Javascript for testing new interactions //

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");
    
    const modal = document.getElementById("myModal");
    const hamburger = document.getElementById("hamburger");
    const navbar = document.getElementById("navbar");
    const mainDoc = document.getElementById("main-doc");
    
    console.log("Modal element:", modal);
    console.log("Hamburger element:", hamburger);
    console.log("Navbar element:", navbar);
    console.log("Main document element:", mainDoc);
    
    // Ensure modal and navbar are visible
    if (modal) {
        modal.style.display = "block";
        console.log("Modal display set to block");
    }
    
    if (navbar) {
        navbar.style.display = "block";
        console.log("Navbar display set to block");
    }
    
    // Responsive navigation toggle
    if (hamburger && navbar) {
        hamburger.addEventListener('click', function() {
            console.log("Hamburger clicked");
            
            // Toggle open class for mobile view
            navbar.classList.toggle('open');
            
            // Ensure modal and navbar are displayed
            if (modal) modal.style.display = "block";
            if (navbar) navbar.style.display = "block";
        });
    }
    
    // Additional logging for troubleshooting
    if (mainDoc) {
        console.log("Main document margin-left:", window.getComputedStyle(mainDoc).marginLeft);
    }
});