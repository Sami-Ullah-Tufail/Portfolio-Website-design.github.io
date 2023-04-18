const hamBurger = document.querySelector('#nav-button');
const cloSerX = document.querySelector('#close-navlist');
const mariMarzi = document.querySelector('#nav-list');
const navListItems = document.querySelectorAll('#nav-list > ul > li');
hamBurger.addEventListener('click', () => {
  mariMarzi.classList.remove('hide');
  mariMarzi.classList.add('mobile-menu');
});
cloSerX.addEventListener('click', () => {
  mariMarzi.classList.add('hide');
  mariMarzi.classList.remove('mobile-menu');
});

navListItems.forEach((item) => item.addEventListener('click', () => {
  mariMarzi.classList.add('hide');
  mariMarzi.classList.remove('mobile-menu');
}));