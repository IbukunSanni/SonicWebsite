// const hamburger = document.getElementById('hamburger');
// const navMenu = document.getElementById('nav-menu');
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

