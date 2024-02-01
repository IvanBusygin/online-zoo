const btnHeader = document.querySelector('.header__burger');
const burMenu = document.querySelector('.bur-menu');
const btnBurMenuClose = document.querySelector('.bur-menu__close');
const overlay = document.querySelector('.bur-menu');

btnHeader.onclick = openBurMenu;

btnBurMenuClose.onclick = closeBurMenu;

overlay.onclick = function ({target}) {
  if (target === overlay) {
    closeBurMenu();
  }
};

function openBurMenu() {
  burMenu.style.display = 'block';
  document.querySelector('body').style.overflow = 'hidden';
}

function closeBurMenu() {
  burMenu.style.display = 'none';
  document.querySelector('body').style.overflow = 'visible';
}
