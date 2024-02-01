import TestimonialsCard from './Testimonials-card.js';
import {randomArray} from "../lib/funs-random";

export default class TestimonialsSlider {

  constructor(testimonials) {
    this.testimonialsArray = testimonials;
    this.lengthArr = testimonials.length;
    this.randomArr = randomArray(this.lengthArr, 0, this.lengthArr - 1);
    this.elem = this.render();
  }

  render() {
    const testimonialsCards = document.createElement('div');
    testimonialsCards.classList.add('testimonials');

    for (const randomNum of this.randomArr) {
      const testimonialsCard = new TestimonialsCard(this.testimonialsArray[randomNum]);
      testimonialsCards.append(testimonialsCard.elem);
    }

    // for (const testimonial of this.testimonialsArray) {
    //     const testimonialsCard = new TestimonialsCard(testimonial);
    //     testimonialsCards.append(testimonialsCard.elem)
    // }

    return testimonialsCards;
  }
}
