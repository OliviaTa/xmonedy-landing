// burger menu for mobile
let menuIcon = document.querySelector('.page-header .menu-icon');
let mainNav = document.querySelector('.page-header .main-nav');
let body = document.querySelector('body');

menuIcon.onclick = function() {
    menuIcon.classList.toggle('change');
    mainNav.classList.toggle('change');
    body.classList.toggle('change');
}