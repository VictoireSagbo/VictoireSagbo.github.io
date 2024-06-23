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

// Function to scroll to the top of the page smoothly
function scrollToTop() {
    document.querySelector('body').scrollIntoView({
        behavior: 'smooth'
    });
}
// Event listener to update the footer with the current year
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('year').textContent = new Date().getFullYear();
});

// use document.querySelector('#home').scrollIntoView({ behavior: 'smooth' }); to scroll the page to the item with home ID smoothly.
function scrollToTop() {
    document.querySelector('#home').scrollIntoView({
        behavior: 'smooth'
    });
}
