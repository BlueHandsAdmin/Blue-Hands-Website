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

//–––––––––––––––––––––––––Liquid Navigation–––––––––––––––––––––––––––––––––––––

// Desktop Animation
let duration = 400;
let menuShape = $(".services_nav_shape");
let menuLink = $(".services_nav_link");
let currentLink = $(".services_nav_link.w--current");

$(window).on("load resize", function () {
  menuShape.css("transition", `all ${duration - duration}ms`);
  if (onTablet) {
    moveShape(currentLink);
    if (menuShape.css("opacity") < 1) {
      $(".services_nav_link_bg").css("opacity", "0");
      menuShape.css("opacity", "1");
      menuLink.css("pointer-events", "auto");
    }
  }
});

// On Hover In
menuLink.on("mouseover", function () {
  if (onTablet) {
    // menuShape move
    currentLink.addClass("is-not-active");
    menuShape.css("transition", `all ${duration}ms`);
    moveShape($(this));
  }
});

// On Hover Out
menuLink.on("mouseleave", function () {
  if (onTablet) {
    // menuShape move back
    currentLink.removeClass("is-not-active");
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

//–––––––––––––––––––––––––Swiper–––––––––––––––––––––––––––––––––––––

let swiper;

const initSwiper = function () {
  if (onMobile != true && swiper == undefined) {
    $(".swiper").each(function (index) {
      $(this).addClass("is-" + index);
      swiper = new Swiper(".is-" + index, {
        speed: 700,
        freeMode: true,
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

//–––––––––––––––––––––––Before & After Slider––––––––––––––––––––––––––––––

// Check Before & After Sliders offset from left edge
let baSlider = $(".ba_slider");
let baWidth = baSlider.width() - 20;
let side = $("#ba-left");
let sideWidth = side.width();
let sideMaxReset = baWidth - 1;
let baPos = baSlider.offset().left;
const checkBaPos = function () {
  baPos = baSlider.offset().left;
  baWidth = baSlider.width() - 20;
  sideWidth = side.width();
  sideMaxReset = baWidth - 1;
};

// Before & After Slider Code
let dragging = false;

$("#ba-handle").on("mousedown touchstart", function (e) {
  e.preventDefault();
  dragging = true;
  $(document).on("mousemove touchmove", function (ex) {
    baWidth = baSlider.width() - 20;
    sideWidth = side.width();
    sideMaxReset = baWidth - 1;
    if (sideWidth <= baWidth && sideWidth >= 20) {
      side.css("width", ex.pageX - baPos);
    } else if (sideWidth > baWidth) {
      side.css("width", sideMaxReset);
      $(document).unbind("mousemove touchmove");
      dragging = false;
    } else {
      side.css("width", "21px");
      $(document).unbind("mousemove touchmove");
      dragging = false;
    }
  });
});

$(document).on("mouseup touchend", function (e) {
  if (dragging) {
    $(document).unbind("mousemove touchmove");
    dragging = false;
  }
});

//–––––––––––––––––––––––––Mobile Dropdown–––––––––––––––––––––––––––––––––––––

// Change Dropdown Direction
let dropdownTrigger = $(".dd_direction_trigger").css("opacity");
const dropdownMenu = $(".service_nav_dd");
const dropdownWrap = $(".service_nav_dd_wrap");
const dropdownDivider = $(".service_nav_dd_divider");
const dropdownChange = function () {
  dropdownTrigger = $(".dd_direction_trigger").css("opacity");

  if (dropdownTrigger < 1) {
    dropdownMenu.css("flex-direction", "column-reverse");
    dropdownWrap.css("align-items", "flex-end");
    dropdownWrap.css("margin-top", "0px");
    dropdownWrap.css("margin-bottom", "-2px");
    dropdownDivider.css("order", "1");
  } else {
    dropdownMenu.css("flex-direction", "column");
    dropdownWrap.css("align-items", "flex-start");
    dropdownWrap.css("margin-top", "-2px");
    dropdownWrap.css("margin-bottom", "0px");
    dropdownDivider.css("order", "-1");
  }
};

//–––––––––––––––––––––––––Run Functions–––––––––––––––––––––––––––––––––––––

checkBaPos(); // Run change on load
dropdownChange(); // Run change on load

setTimeout(() => {
  initSwiper();
}, "1000");

$(window).on("scroll", dropdownChange); // Run change while scrolling
$(window).on("orientationchange resize", function () {
  // Run change on resize
  checkBaPos();
  initSwiper();
});

//–––––––––––––––––––––––––Sync Videos–––––––––––––––––––––––––––––––––––––

let video1 = $(".ba_slider_video.is-before");
let video2 = $(".ba_slider_video.is-after");

setInterval(() => {
  video1.currentTime = video2.currentTime;
}, 250);
