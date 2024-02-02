let swiper;

const initSwiper = function () {
  if (onMobile != true && swiper == undefined) {
    $(".swiper").each(function (index) {
      $(this).addClass("is-" + index);
      swiper = new Swiper(".is-" + index, {
        speed: 700,
        freeMode: true,
        grabCursor: true,
        mousewheel: true,
        keyboard: true,
        slidesPerView: "auto",
        spaceBetween: 20,

        slideActiveClass: "is-active",
      });
    });
    console.log("activated");
  } else if (onMobile == true && swiper != undefined) {
    $(".swiper").each(function () {
      this.swiper.destroy();
    });
    swiper = undefined;
    console.log("destroyed");
  }
};
// Add Overflow Clip to Body
$(".work_button, .work_card").on("click", function () {
  $("body").addClass("overflow-clip");
});
// Remove Overflow Clip to Body
$(".work_popup_button").on("click", function () {
  $("body").removeClass("overflow-clip");
});





// Desktop Animation
let duration = 400;
let menuShape = $(".services_nav_shape");
let menuShapeBG = $(".services_nav_shape_bg");
let menuLink = $(".services_nav_link");
let currentLink = $(".services_nav_link.is-active");

$(window).on("load", function () {
  $(".services_nav_link.w--current").addClass("is-active");
});

$(window).on("load resize", function () {
  currentLink = $(".services_nav_link.is-active");
  menuShape.css("transition", `all ${duration - duration}ms`);
  if (onTablet == true) {
    moveShape(currentLink);
    if (menuShape.css("opacity") < 1) {
      $(".services_nav_link_bg").css("opacity", "0");
      menuShape.css("opacity", "1");
      menuLink.css("pointer-events", "auto");
    }
  }
});

$(".services_nav_link").on("mouseover", function () {
  if (onTablet) {
    $(this).removeClass("is-not-active");
    $(this).addClass("is-active");
    $(this).siblings($(this)).addClass("is-not-active");
    $(this).siblings(".services_nav_link").removeClass("is-active");
  }
});

$(".services_nav_link").on("mouseleave", function () {
  if (onTablet) {
    $(this).removeClass("is-active");
    $(this).siblings(".services_nav_link.w--current").addClass("is-active");
    $(this)
      .siblings(".services_nav_link.w--current")
      .removeClass("is-not-active");
  }
});

// On click
menuLink.on("mouseover", function () {
  if (onTablet) {
    // menuShape move
    menuShape.css("transition", `all ${duration}ms`);
    moveShape($(this));
  }
});
menuLink.on("mouseleave", function () {
  if (onTablet) {
    // menuShape move
    moveShape(currentLink);
  }
});

// Snap
function moveShape(target) {
  let linkWidth = target.innerWidth();
  let linkOffset = target.offset().left;
  let menuOffset = $(".services_nav_desktop").offset().left;
  let leftPosition = linkOffset - menuOffset;
  menuShape.css("left", leftPosition);
  menuShape.css("width", linkWidth);
}

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
    // set onMobile as false
    onMobile = false;
    onTablet = true;
  } else {
    onMobile = false;
    onTablet = false;
  }
};

$(".work_item").eq(0).find(".swiper").addClass("is-1");
$(".work_item").eq(1).find(".swiper").addClass("is-2");

let swiper1;
let swiper2;
let speed = 700;
let freeMode = true;
let grabCursor = true;
let mousewheel = true;
let keyboard = true;
let slidesPerView = "auto";
let spaceBetween = 20;
let slideActiveClass = "is-active";

const swiperActive = function () {
  if (onMobile !== true && swiper1 == undefined) {
    swiper1 = new Swiper(".swiper.is-1", {
      speed: speed,
      freeMode: freeMode,
      grabCursor: grabCursor,
      mousewheel: mousewheel,
      keyboard: keyboard,
      slidesPerView: slidesPerView,
      spaceBetween: spaceBetween,

      slideActiveClass: slideActiveClass,
    });

    swiper2 = new Swiper(".swiper.is-2", {
      speed: speed,
      freeMode: freeMode,
      grabCursor: grabCursor,
      mousewheel: mousewheel,
      keyboard: keyboard,
      slidesPerView: slidesPerView,
      spaceBetween: spaceBetween,

      slideActiveClass: slideActiveClass,
    });
  } else if (onMobile == true && swiper1 != undefined) {
    swiper1.destroy();
    swiper2.destroy();
    swiper1 = undefined;
    swiper2 = undefined;
    console.log("true");
  }
};

// Add Overflow Clip to Body
$(".work_button, .work_card").on("click", function () {
  $("body").addClass("overflow-clip");
});
// Remove Overflow Clip to Body
$(".work_popup_button").on("click", function () {
  $("body").removeClass("overflow-clip");
});

let destroySwiper = function () {};

$(window).on("resize", destroySwiper);

swiperActive();
resizeEvent(); // run resizeEvent function onload

$(window).on("resize", swiperActive);
$(window).on("resize", resizeEvent);
$(window).on("orientationchange resize", swiperActive);