var menu = document.getElementById('btnMenu');
var close = document.getElementById('closeMenu');

function showMenu(event){
    if(event.type === 'touchstart') event.preventDefault();
    var nav = document.getElementById('nav');
    var main = document.getElementById('main');
    nav.classList.toggle('active');
    main.classList.toggle('opac');
}

menu.addEventListener('click', showMenu);
menu.addEventListener('touchstart', showMenu);
close.addEventListener('click', showMenu);
close.addEventListener('touchstart', showMenu);