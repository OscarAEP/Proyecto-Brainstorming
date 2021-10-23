// Navegation Menu
let btnMenu = document.querySelector('.btn-menu');
let barIconX = document.querySelector('.btn-menu i');
let menu = document.querySelector('.list-container');
let menuContent = document.querySelector('.menu');
var activador = true;

btnMenu.addEventListener('click', (event) => {

    if (activador) {
        menu.style.left = '0%';
        menu.style.transition = '0.5s';

        activador = false;
    } else {
        activador = false;
        menu.style.left = '-100%';

        activador = true;
    }

});

// Add class "active"
let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach((element) => {

    element.addEventListener('click', (event) => {
        enlaces.forEach((link) => {
            link.classList.remove('active');
        });
        event.target.classList.add('active');

    });

});

//Scroll Efect

let prevScrollPos = window.pageYOffset;
let goTop = document.querySelector('.go-top');

window.onscroll = () => {

    //Hide & Show - Scroll Menu (Function)
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        menuContent.style.top = '0px';
        menuContent.style.transition = '0.5s';
    } else {
        menuContent.style.top = '-70px';
        menuContent.style.transition = '0.5s';
    }
    prevScrollPos = currentScrollPos;

    //Scoll Menu & Go Top & See Down (Styles)
    let arriba = window.pageYOffset;

}

//Go Top Click
goTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

let abajo = document.querySelector('#abajo');

abajo.addEventListener('click', () => {
    document.body.scrollTop = 870;
    document.documentElement.scrollTop = 870;

});