const menuToggle = document.querySelector('.main-nav__toggle');
const menu = document.querySelector('.main-nav');


menuToggle.addEventListener('click', function() {
  menu.classList.toggle('main-nav--closed');

  if (menuToggle.classList.contains('main-nav__toggle--close')) {
    menuToggle.classList.remove('main-nav__toggle--close');
    menuToggle.classList.add('main-nav__toggle--open');
  }

  else {
    menuToggle.classList.add('main-nav__toggle--close');
    menuToggle.classList.remove('main-nav__toggle--open');
  }
}
)