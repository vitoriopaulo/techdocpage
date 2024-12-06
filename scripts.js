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

// Close modal when a link is clicked
var navLinks = document.querySelectorAll("#navbar .nav-link");
navLinks.forEach(function(link) {
    link.onclick = function() {
        modal.style.display = "none"; // Close the modal
    };
});