const testimonials = document.querySelector('.testimonials');
const popupTestimonial = document.querySelector('.popup-testimonial');

popupInit();

function popupInit() {
  const btnClose = document.querySelector('.popup-testimonial__close');
  btnClose.addEventListener('click', closePopup);

  const body = document.querySelector('body');

  body.addEventListener('click', ({target}) => {
    if (target === popupTestimonial) {
      closePopup();
    }
  });
}

testimonials.addEventListener('click', function showPopup({target}) {
  const testimonial = target.closest('.testimonial');
  const widthForPopup = (document.documentElement.clientWidth < 963);
  if (testimonial && widthForPopup) {
    const popupCard = testimonial.cloneNode(true);

    const popupContent = document.querySelector('.popup-testimonial__content');
    popupContent.append(popupCard);

    const popupTestimonial = document.querySelector('.popup-testimonial');
    popupTestimonial.style.display = 'block';

    const body = document.querySelector('body');
    body.style.overflow = 'hidden';
  }
});

function closePopup() {
  popupTestimonial.style.display = 'none';
  document.querySelector('body').style.overflow = 'visible';
  document.querySelector('.popup-testimonial__content').innerHTML = '';
}
