// declare onMobile variable
let onDesktop;
// resizeEvent function
const resizeEvent2 = function () {
  // if viewportWidth width <= 767
  if (window.innerWidth > 991) {
    // set onMobile as true
    onDesktop = true;
  } else {
    onDesktop = false;
  }
};

resizeEvent2(); // run resizeEvent function onload
//$(window).on("orientationchange resize", initSwiper);
$(window).on("orientationchange resize", function () {
  resizeEvent2();
});

//–––––––––––––––––––––––––Lenis Scroll–––––––––––––––––––––––––––––––––––––

$("[data-lenis-stop]").on("click", function () {
  $("html").addClass("overflow-clip");
});
$("[data-lenis-start]").on("click", function () {
  $("html").removeClass("overflow-clip");
});
$("[data-lenis-toggle]").on("click", function () {
  $("html").toggleClass("overflow-clip");
});

//–––––––––––––––––––––––––Split Text–––––––––––––––––––––––––––––––––––––

window.addEventListener("DOMContentLoaded", (event) => {
  // Split text into spans
  let typeSplit = new SplitType("[text-split]", {
    types: "words, chars",
    tagName: "span",
  });
});

//–––––––––––––––––––––––––Text Animation–––––––––––––––––––––––––––––––––––––

window.addEventListener("DOMContentLoaded", (event) => {
  // add a media query. When it matches, the associated function will run
  ScrollTrigger.matchMedia({
    "(min-width: 992px)": function () {
      // Scroll Trigger Function
      function createScrollTrigger(triggerElement, timeline) {
        // Play tl when scrolled into view (60% from top of screen)
        ScrollTrigger.create({
          trigger: triggerElement,
          start: "top 85%",
          onEnter: () => timeline.play(),
        });
      }

      // Scroll Trigger Function
      function createScrollTriggerButton(triggerElement, timeline) {
        // Play tl when scrolled into view (60% from top of screen)
        ScrollTrigger.create({
          trigger: triggerElement,
          start: "top 95%",
          onEnter: () => timeline.play(),
        });
      }

      $("[words-slide-up]").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this).find(".word"), {
          opacity: 0,
          yPercent: 100,
          duration: 0.3,
          ease: "power2.out",
          stagger: { each: 0.1 },
        });
        createScrollTrigger($(this), tl);
      });

      $("[words-slide-from-right]").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this).find(".word"), {
          opacity: 0,
          x: "1em",
          duration: 0.6,
          ease: "power2.out",
          stagger: { amount: 0.3 },
        });
        createScrollTrigger($(this), tl);
      });

      $("[button-scale-up]").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this).find(".button"), {
          opacity: 0,
          scale: 0.5,
          duration: 0.6,
          ease: "power2.out",
          stagger: { amount: 0.2 },
        });
        createScrollTriggerButton($(this), tl);
      });

      $("[element-slide-up]").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this).find("[element-animated]"), {
          opacity: 0,
          yPercent: 30,
          duration: 0.5,
          ease: "back.out(2)",
          stagger: { each: 0.1 },
        });
        createScrollTriggerButton($(this), tl);
      });

      $("[element-slide-from-right]").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this).find("[element-animated]"), {
          opacity: 0,
          xPercent: 50,
          duration: 0.8,
          ease: "power2.out",
        });
        createScrollTriggerButton($(this), tl);
      });

      gsap.set("[text-split]", { opacity: 1 });
      gsap.set("[element-animated-trigger]", { opacity: 1 });
    },

    "(max-width: 991px)": function () {
      gsap.set("[text-split]", { opacity: 1 });
      gsap.set("[element-animated-trigger]", { opacity: 1 });
    },

    "(max-width: 767px)": function () {
      gsap.set("[text-split]", { opacity: 1 });
      gsap.set("[element-animated-trigger]", { opacity: 1 });
    },

    "(max-width: 479px)": function () {
      gsap.set("[text-split]", { opacity: 1 });
      gsap.set("[element-animated-trigger]", { opacity: 1 });
    },
  });
});

//–––––––––––––––––––––––––Change Nav Text–––––––––––––––––––––––––––––––––––––

const changeText = document.querySelector("#nav_dd_button_text");
const changeTextTrigger = document.querySelector("#nav_dd_button");

changeTextTrigger.addEventListener("click", function () {
  if (changeText.textContent == "Meny") {
    changeText.textContent = "Stäng";
  } else {
    changeText.textContent = "Meny";
  }
});
