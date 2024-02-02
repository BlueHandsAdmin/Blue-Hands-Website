// declare onMobile variable
let onMobile;
let onTablet;
// resizeEvent function
const resizeEvent = function () {
  // if viewportWidth width <= 767
  if (window.innerWidth <= 479) {
    // set onMobile as true
    onMobile = true;
    onTablet = false;
  } else if (window.innerWidth >= 767) {
    onMobile = false;
    onTablet = true;
  } else {
    onMobile = false;
    onTablet = false;
  }
};

resizeEvent(); // run resizeEvent function onload
//$(window).on("orientationchange resize", initSwiper);
$(window).on("orientationchange resize", function () {
  resizeEvent();
});

//–––––––––––––––––––––––––Quote Swiper–––––––––––––––––––––––––––––––––––––

const swiper = new Swiper(".swiper", {
  speed: 400,
  loop: true,
  loopedSlides: 5,
  slidesPerView: 1,
  spaceBetween: 20,

  breakpoints: {
    // mobile landscape
    480: {
      slidesPerView: 1,
    },
    // tablet
    768: {
      slidesPerView: 2,
    },
    // desktop
    1200: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

$("[hands-rotate-in]").each(function (index) {
  let tl = gsap.timeline({ paused: true });

  createScrollTriggerUgc($(this), tl);
});
