// Get the menu toggle button and the navigation menu
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

// Add event listener to the menu toggle button
menuToggle.addEventListener('click', () => {
  // Toggle the 'open' class on the navigation menu
  nav.classList.toggle('open');
});

window.addEventListener('scroll', function() {
  var header = document.getElementById('main-header');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 0) {
    header.classList.add('scrolled');
    header.classList.remove('transparent');
  } else {
    header.classList.add('transparent');
    header.classList.remove('scrolled');
  }
});

