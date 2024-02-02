const swiper = new Swiper(".swiper", {
  speed: 400,
  loop: true,
  loopedSlides: 5,
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
  },

  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  slideActiveClass: "is-active",
  slideDuplicateActiveClass: "is-active",
});

$(".team_card").on("click", function () {
  $("body").addClass("overflow-clip");
});

$(".team_popup_button").on("click", function () {
  $("body").removeClass("overflow-clip");
});
