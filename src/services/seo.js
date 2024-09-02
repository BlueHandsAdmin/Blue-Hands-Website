//–––––––––––––––––––––––––Quote Swiper–––––––––––––––––––––––––––––––––––––

const swiperQuotes = new Swiper(".swiper.is-slider-main", {
  speed: 400,
  loop: true,
  loopedSlides: 5,
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
  },
  navigation: {
    nextEl: ".slider-main_button.swiper-next",
    prevEl: ".slider-main_button.swiper-prev",
  },
  pagination: {
    el: ".swiper-bullet-wrapper",
    bulletActiveClass: "is-active",
    bulletClass: "swiper-bullet",
    bulletElement: "button",
    clickable: true,
  },
});

//–––––––––––––––––––––––––Cases & Articles Swiper–––––––––––––––––––––––––––––––––

const swiperCase = new Swiper(".swiper.is-slider-case", {
  speed: 400,
  loop: true,
  loopedSlides: 5,
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
  },

  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});
