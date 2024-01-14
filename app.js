document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });

      // Close the navigation menu after clicking a link (for mobile view)
      const checkbox = document.getElementById('click');
      checkbox.checked = false;
    });
  });
});

const toggleButton = document.getElementById('toggle-button');
const navLinks = document.querySelectorAll('nav a');

toggleButton.addEventListener('click', function() {
  navLinks.forEach(function(link) {
    link.classList.toggle('hide');
  });
});


// Add active class to the navigation link corresponding to the current section
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  let currentSection = '';

  sections.forEach(function(section) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight/2) {
      currentSection = section.getAttribute('id');
    }
  });

  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(function(link) {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === currentSection) {
      link.classList.add('active');
    }
  });
});

// JavaScript for index.html

// Get the "See More" link
const seeMoreLink = document.querySelector('.see-more-link');

// Add a click event listener to the "See More" link
seeMoreLink.addEventListener('click', () => {
  // Apply the desired transition effect here
  window.location.href = 'projects.html'; // Redirect to projects.html
});

const educationButton = document.getElementById('education-button');
const workButton = document.getElementById('work-button');
const educationContent = document.getElementById('education-content');
const workContent = document.getElementById('work-content');

educationButton.addEventListener('click', () => {
  educationContent.classList.add('show');
  workContent.classList.remove('show');
});

workButton.addEventListener('click', () => {
  educationContent.classList.remove('show');
  workContent.classList.add('show');
});











