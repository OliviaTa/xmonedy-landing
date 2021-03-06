// burger menu for mobile
let menuIcon = document.querySelector('.page-header .menu-icon');
let mainNav = document.querySelector('.page-header .main-nav');
let body = document.querySelector('body');
let mainNavElements = document.querySelectorAll('.page-header .main-nav a');

menuIcon.onclick = function () {
    mainNav.classList.remove('opacity');
    menuIcon.classList.toggle('change');
    mainNav.classList.toggle('change');
    body.classList.toggle('change');
}

for (let element of mainNavElements) {
    element.onclick = function () {
        if (mainNav.classList.contains('change')) {
            menuIcon.classList.remove('change');
            mainNav.classList.remove('change');
            body.classList.remove('change');
            mainNav.classList.add('opacity');
        }
    }
}

function upperButton() {
    // Yandex.Metrika
    ym(72874123, 'reachGoal', 'upperButton');
    return true;
    // Yandex.Metrika
}

function lowerButton() {
    // Yandex.Metrika
    ym(72874123, 'reachGoal', 'lowerButton');
    return;
    // Yandex.Metrika
}

