const carouselSlide = document.querySelector('.carousel-slide');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

let slidePosition = 0;
const slideWidth = carouselSlide.clientWidth;

prevBtn.addEventListener('click', () => {
  if (slidePosition === 0) {
    slidePosition = carouselSlide.scrollWidth - slideWidth;
  } else {
    slidePosition -= slideWidth;
  }
  carouselSlide.style.transform = `translateX(-${slidePosition}px)`;
});

nextBtn.addEventListener('click', () => {
  if (slidePosition === carouselSlide.scrollWidth - slideWidth) {
    slidePosition = 0;
  } else {
    slidePosition += slideWidth;
  }
  carouselSlide.style.transform = `translateX(-${slidePosition}px)`;
});s