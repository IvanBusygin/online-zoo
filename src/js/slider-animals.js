import AnimalsSlider from './classes/Animals-slider';

let isEnabled = true;

const animalsItem = document.querySelector('.animals');

addSlider();

function addSlider() {
  const slider = new AnimalsSlider(getAmountCards());
  const sliderItem = slider.elem;
  sliderItem.classList.add('animals__cards', 'active');
  animalsItem.append(sliderItem);
  // let items = document.querySelectorAll('.animals__cards');
  // console.log('items.length', items.length)
}

const arrowR = document.querySelector('.animals__arrow-r');

arrowR.addEventListener('click', function () {
  if (isEnabled) {
    nextItem();
  }
});

const arrowL = document.querySelector('.animals__arrow-l');

arrowL.addEventListener('click', function () {
  if (isEnabled) {
    previousItem();
  }
});

function addNewSlider() {
  const slider = new AnimalsSlider(getAmountCards());
  const sliderItem = slider.elem;
  sliderItem.classList.add('animals__cards');
  animalsItem.append(sliderItem);
}

function nextItem() {
  addNewSlider();
  hideItem('to-left');
  showItem('from-right');

}

function previousItem() {
  addNewSlider();
  hideItem('to-right');
  showItem('from-left');
}


function hideItem(direction) {
  const items = document.querySelectorAll('.animals__cards');

  isEnabled = false;

  items[0].classList.add(direction);
  items[0].addEventListener('animationend', function () {
    this.remove();
  });
}

function showItem(direction) {
  const items = document.querySelectorAll('.animals__cards');

  items[1].classList.add('next', direction);
  items[1].addEventListener('animationend', function () {
    this.classList.remove('next', direction);
    this.classList.add('active');
    isEnabled = true;
  });
}

function getAmountCards() {
  // return document.documentElement.clientWidth > 965 ? 6 : 4
  return 6;
}
