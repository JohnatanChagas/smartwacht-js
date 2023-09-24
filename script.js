let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('color');
    } else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('color');
    }
};

let menu = document.querySelector('#menu-icon');
let links = document.querySelector('.links');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    links.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    links.classList.remove('open');
};