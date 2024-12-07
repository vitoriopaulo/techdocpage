// Get modal element
var modal = document.getElementById("myModal");

// Get hamburger menu icon
var hamburger = document.getElementById("hamburger");

// Get close button
var closeBtn = document.getElementsByClassName("close")[0];

// Show modal when hamburger is clicked
hamburger.onclick = function() {
    modal.style.display = "block";
}

// Close modal when close button is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside of modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Close modal when a link is clicked and prevent default behavior
var navLinks = document.querySelectorAll("#navbar .nav-link");
navLinks.forEach(function(link) {
    link.onclick = function(event) {
        event.preventDefault(); // Prevent default link behavior
        var targetId = this.getAttribute('href'); // Get target section ID
        var targetSection = document.querySelector(targetId); // Find target section
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to section
        }
        
        // Close the modal only if it's open (for mobile view)
        if (modal.style.display === "block") { 
            modal.style.display = "none"; // Close the modal
        }
        
        // Ensure navbar remains visible in desktop mode
        // No need to hide the navbar here, as it should stay fixed.
    };
});