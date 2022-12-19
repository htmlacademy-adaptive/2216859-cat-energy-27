let nav = document.querySelector ('.nav');
let toggle = document.querySelector('.nav__toggle');

nav.classList.remove ('nav--nojs');
nav.classList.remove ('nav--opened');
nav.classList.add ('nav--closed');

toggle.addEventListener('click', function(){
  if (nav.classList.contains('nav--opened')) {
    nav.classList.remove('nav--opened');
    nav.classList.add('nav--closed');
  } else {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
  }
})
