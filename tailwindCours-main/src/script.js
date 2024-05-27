let sun = document.querySelector('#sun');
let moon = document.querySelector('#moon');

let root = document.documentElement;

const changeMode = () => {
    root.classList.toggle('dark');
}

sun.addEventListener('click', changeMode);
moon.addEventListener('click', changeMode);

let bar = document.querySelector('#burger');
let menuMobile = document.querySelector('#navMenu');
bar.addEventListener('click', () => {
    menuMobile.classList.toggle("scale-y-0");
})