const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const arrowToggle = document.querySelector('.arrow-toggle');
const menu = document.querySelector('.menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu_visible')
})

arrowToggle.addEventListener('click', () => {
    menu.classList.toggle('menu_visible');
})