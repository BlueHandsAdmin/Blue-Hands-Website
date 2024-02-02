const swiper = new Swiper(".swiper", {
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

//–––––––––––––––––––––––––Number Counter Up–––––––––––––––––––––––––––––––––––––

window.onload = function () {
  $(".case_nr").children("h2").addClass("counter");
};

setTimeout(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
  $(".counter").addClass("animated fadeIn");
}, 100);
