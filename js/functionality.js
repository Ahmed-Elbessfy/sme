//variables
const toggleBtn = document.querySelector('.toggle-nav'),
  nav = document.querySelector('nav');

// events
document.addEventListener('DOMContentLoaded', () => {
  toggleBtn.addEventListener('click', () => {
    nav.querySelector('ul.nav-links').style.opacity = 1;
    nav.classList.toggle('show');
  })
})