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

// Get the post form and chatbox elements
const postForm = document.querySelector('.post-form');
const chatbox = document.querySelector('.chatbox');

// Get the post and chat buttons
const postButton = document.querySelector('#post-button');
const chatButton = document.querySelector('#chat-button');

// Hide the post form and chatbox initially
postForm.style.display = 'block';
postButton.style.backgroundColor = 'blue';
chatbox.style.display = 'none';

// Add click event listener to the post button
postButton.addEventListener('click', () => {
  // Toggle the visibility of the post form
  if (postForm.style.display === 'none') {
    postForm.style.display = 'block';
    postButton.style.backgroundColor = 'blue';
    chatButton.style.backgroundColor = 'black';
    chatbox.style.display = 'none';
  }
});

// Add click event listener to the chat button
chatButton.addEventListener('click', () => {
  // Toggle the visibility of the chatbox
  if (chatbox.style.display === 'none') {
    chatbox.style.display = 'block';
    postButton.style.backgroundColor = 'black';
    chatButton.style.backgroundColor = 'blue';
    postForm.style.display = 'none';
  }
});

