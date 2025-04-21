// Get references to the mobile menu button and the navigation links container
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

// Handle mobile menu toggle (hamburger ↔ close icon)
mobileMenuBtn.addEventListener('click', () => {
    // Toggles the 'active' class to show/hide navigation links (CSS controlled)
    navLinks.classList.toggle('active');

    // Dynamically changes the button icon based on the menu state
    // Using innerHTML allows inserting raw HTML (Font Awesome icons)
    // ⚠️ Caution: innerHTML can be unsafe if the content is not static or trusted
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active')
        ? '<i class="fas fa-times"></i>'  // Close icon when menu is active
        : '<i class="fas fa-bars"></i>';  // Hamburger icon when menu is inactive
});


// Cart count logic
let cartCount = 0;
const cartCountElement = document.getElementById('cartCount');

// Function to simulate adding an item to the cart
function addToCart() {
    cartCount++; // Increments the cart item count

    // Updates the cart count displayed on the page
    cartCountElement.textContent = cartCount;

    // Adds a scale animation to visually indicate a change
    cartCountElement.style.transform = 'scale(1.5)';

    // Restores the original scale after a short delay
    setTimeout(() => {
        cartCountElement.style.transform = 'scale(1)';
    }, 300);

    // Note: The count is not persisted. On page reload, it resets to 0.
    // We need localStorage or server-side storage.
}
