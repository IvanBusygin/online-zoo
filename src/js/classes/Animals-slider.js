import AnimalsCard from './Animals-card.js';
import animals from '../db/animals.js';
import {randomArray} from "../lib/funs-random";

// let currentIndex = 0;

export default class AnimalsSlider {

  constructor(amount) {
    this.randomArr = randomArray(amount, 0, animals.length - 1);
    this.elem = this.render();
  }

  // changeCurrentIndex(n) {
  //     console.log('currentIndex', currentIndex)
  //     currentIndex = (n + animals.length) % animals.length;
  // }
  // nextIndex(n) {
  //     this.changeCurrentIndex(n + 1);
  // }

  render() {
    const animalsCards = document.createElement('div');
    animalsCards.classList.add('animals__cards');

    for (const randomNum of this.randomArr) {
      const animalsCard = new AnimalsCard(animals[randomNum]);
      animalsCards.append(animalsCard.elem);
    }

    // for (let i = 0; i < this.amount; i++) {
    //     const animalsCard = new AnimalsCard(animals[currentIndex]);
    //     this.nextIndex(currentIndex)
    //     animalsCards.append(animalsCard.elem)
    // }
    return animalsCards;
  }
}
