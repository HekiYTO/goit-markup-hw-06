document.addEventListener('DOMContentLoaded', function() {
    let burger = document.querySelector('.mobilemenubutton');
    let mobileMenu = document.querySelector('.mom');
    let momClose = document.querySelector('.mom-close');
    let window = document.querySelector('.overlay-window');
    let openWindow = document.querySelector('.section-one-button');
    let closeWindow = document.querySelector('.s-one-overlay-close')

    openWindow.addEventListener('click', function() {
        window.classList.add('is-open');
    });

    closeWindow.addEventListener('click', function() {
        window.classList.remove('is-open');
    });

    burger.addEventListener('click', function() {
        mobileMenu.classList.add('is-open');
    });

    momClose.addEventListener('click', function() {
        mobileMenu.classList.remove('is-open');
    });
});