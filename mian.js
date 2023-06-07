const menuButton = document.querySelector('.menu-button');
const closeButton = document.querySelector('.close-button');
const menu = document.querySelector('.menu');
menuButton.addEventListener('click', () => {
  menu.classList.add('show');
  menuButton.classList.add('hide');
});
closeButton.addEventListener('click', () => {
  menu.classList.remove('show');
  menuButton.classList.remove('hide');
});
ScrollReveal({ reset: true,
    distance :'80px',
    duration : 2000,
    delay : 200
    });
    ScrollReveal().reveal('.l, .text-4xl, .text-center ', { origin: 'top' });
    ScrollReveal().reveal('.text-slate-300, h3 , .card1 , .grid , .container, .svg-wrapper', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });