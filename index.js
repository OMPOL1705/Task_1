// Get the menu toggle button and the navigation menu
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

// Add event listener to the menu toggle button
menuToggle.addEventListener('click', () => {
  // Toggle the 'open' class on the navigation menu
  nav.classList.toggle('open');
});
