let burgeur = document.querySelector('.burgeur');
let navbar = document.querySelector('header');
let links = document.querySelectorAll('.check');
burgeur.addEventListener('click',() => {
    navbar.classList.toggle('active');
});
links.forEach(link => { link.addEventListener('click',() => {
        navbar.classList.remove('active');
    });
});