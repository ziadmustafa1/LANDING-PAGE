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