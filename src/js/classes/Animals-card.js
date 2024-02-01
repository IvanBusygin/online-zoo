import createElement from '../lib/create-element.js';

export default class AnimalsCard {

  constructor(animal) {
    this.animal = animal;
    this._elem = createElement(`
      <div class="card">
        <img class="card__picture" src="${this.animal.picture}" alt="${this.animal.picture}">
        <div class="card__block ">
          <div class="card__content">
              <p class="card__title">${this.animal.title}</p>
              <p class="card__text">${this.animal.text}</p>
          </div>
          <img class="${this.animal.image.includes('banana-bamboo') ? 'card__icon--grass' : 'card__icon--meet'}" src="${this.animal.image}" alt="icon">
        </div>
      </div>
  `);
  }

  get elem() {
    return this._elem;
  }
}