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
    burgeur.classList.remove('bx-x');
  });
});

const work = document.querySelector('#works');
function togglePopup() {
  work.classList.toggle('active');
}

document.querySelectorAll('.see_project').forEach((link) => {
  link.addEventListener('click', togglePopup);
});
document.querySelector('.close_btn').addEventListener('click', () => {
  work.classList.remove('active');
});