// Function to show/hide scroll to top button based on scroll position
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // Show button when scrolled down 20px from the top
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        // Hide button when at the top of the page
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}

// Function to scroll to the top of the page
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Event listener to update the footer with the current year
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('year').textContent = new Date().getFullYear();
});
