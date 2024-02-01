import TestimonialsSlider from "./classes/Testimonials-slider";
import testimonials from './db/testimonials';

const testimonialsSlider = new TestimonialsSlider(testimonials);

const blockTestimonials = document.querySelector('.section5-block__testimonials');

blockTestimonials.append(testimonialsSlider.elem);

// const widthCards = document.querySelector('.testimonials').clientWidth;
// const widthCardsBlock = document.querySelector('.section5-block__testimonials').clientWidth;

const input = document.querySelector('#input-testimonials');

// input.setAttribute('max', widthCards - widthCardsBlock)

const testimonialsCardsContainer = document.querySelector('.testimonials');

function changePosition(value) {
  const widthCard = document.querySelector('.testimonial').clientWidth;
  testimonialsCardsContainer.style.marginLeft = -((widthCard + 28) * value) + 'px';
}

input.addEventListener('mousemove', function () {
  changePosition(this.value);
});

input.addEventListener('change', function () {
  changePosition(this.value);
});
