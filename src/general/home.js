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

const swiperQuotes = new Swiper(".swiper.is-slider-main", {
  speed: 400,
  loop: true,
  loopedSlides: 5,
  slidesPerView: "auto",
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
  },

  breakpoints: {
    // mobile landscape
    480: {
      slidesPerView: "auto",
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

//–––––––––––––––––––––––––Cases & Articles Swiper–––––––––––––––––––––––––––––––––––––

let swiperCases;
let swiperBlog;

let duration = 400;

const initSwiper = function () {
  if (onTablet != true && swiperCases == undefined) {
    swiperCases = new Swiper(".swiper.is-slider-cases", {
      speed: duration,
      keyboard: true,
      slidesPerView: "auto",
      spaceBetween: 20,

      navigation: {
        nextEl: ".slider-cases_button.swiper-next",
        prevEl: ".slider-cases_button.swiper-prev",
        disabledClass: "is-disabled",
      },

      slideActiveClass: "is-active",
    });

    swiperBlog = new Swiper(".swiper.is-slider-blog", {
      speed: duration,
      keyboard: true,
      slidesPerView: "auto",
      spaceBetween: 20,

      navigation: {
        nextEl: ".slider-blog_button.swiper-next",
        prevEl: ".slider-blog_button.swiper-prev",
        disabledClass: "is-disabled",
      },

      slideActiveClass: "is-active",
    });

    console.log("activated");
  } else if (onTablet == true && swiperCases != undefined) {
    swiperCases.destroy();
    swiperBlog.destroy();
    swiperCases = undefined;
    console.log("destroyed");
  }
};

initSwiper(); // Run change on load

$(window).on("orientationchange resize", function () {
  // Run change on resize
  initSwiper();
});
