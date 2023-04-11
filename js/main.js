const burgeur = document.querySelector('.burgeur');
const navbar = document.querySelector('header');
const links = document.querySelectorAll('.check');
burgeur.addEventListener('click', () => {
  navbar.classList.toggle('active');
  burgeur.classList.toggle('bx-x');
});
links.forEach((link) => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});