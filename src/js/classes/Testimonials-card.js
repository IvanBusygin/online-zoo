import createElement from '../lib/create-element.js';

export default class TestimonialsCard {
  constructor(testimonial) {
    this.dataObject = testimonial;
    this.elem = this.render();
  }

  render() {
    const card = createElement(`
    <div class="testimonial">
      <div class="testimonial__header">
        <img class="testimonial__icon" src="${this.dataObject.image}" alt="user_icon">
        <div class="testimonial__info">
          <div class="testimonial__name">${this.dataObject.name}</div>
          <span class="testimonial__location">${this.dataObject.location}</span> • <span
              class="testimonial__date">${this.dataObject.date}</span>
        </div>
      </div>
      <div class="testimonial__text">${this.dataObject.text}</div>
  </div>
    `);

    return card;
  }

}
