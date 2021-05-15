//variables
const toggleBtn = document.querySelector('.toggle-nav'),
  navLinks = document.querySelector('.nav-links');

// events
document.addEventListener('DOMContentLoaded', () => {
  toggleBtn.addEventListener('click', () => {
    navLinks.style.opacity = 1;
    navLinks.classList.toggle('show');
  })
})