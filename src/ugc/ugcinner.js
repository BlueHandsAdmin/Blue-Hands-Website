$(".ugc_process_container").each(function (index) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top 75%",
      end: "bottom 90%",
      scrub: 1.5,
    },
  });
  tl.from($(this).find(".ugc_process_line"), {
    height: "0px",
    ease: "none",
  });
});

$("[paralax-trigger]").each(function (index) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top top",
      end: "bottom 50%",
      scrub: 1.5,
    },
  });
  tl.to(
    $(this).find(".ugc_grid_img:nth-child(1), .ugc_grid_img:nth-child(3)"),
    {
      yPercent: 10,
      ease: "none",
    }
  );
});

$("[paralax-trigger]").each(function (index) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top top",
      end: "bottom 50%",
      scrub: 1.5,
    },
  });
  tl.to($(this).find(".ugc_grid_img:nth-child(2)"), {
    yPercent: -10,
    ease: "none",
  });
});

//–––––––––––––––––––––––––Animate Hands–––––––––––––––––––––––––––––––––––––

window.addEventListener("DOMContentLoaded", (event) => {
  // add a media query. When it matches, the associated function will run
  ScrollTrigger.matchMedia({
    "(min-width: 992px)": function () {
      // Scroll Trigger Function
      function createScrollTriggerUgc(triggerElement, timeline) {
        // Play tl when scrolled into view (60% from top of screen)
        ScrollTrigger.create({
          trigger: triggerElement,
          start: "top 85%",
          onEnter: () => timeline.play(),
        });
      }

      $("[hands-rotate-in]").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this).find(".ugc_hand.is-left"), {
          opacity: 0,
          rotation: 100,
          duration: 0.3,
          ease: "power2.out",
        });
        tl.from(
          $(this).find(".ugc_hand.is-right"),
          {
            opacity: 0,
            rotation: -100,
            duration: 0.3,
            ease: "power2.out",
          },
          0.2
        );
        createScrollTriggerUgc($(this), tl);
      });

      gsap.set("[element-animated-trigger]", { opacity: 1 });
    },
    "(max-width: 991px)": function () {
      gsap.set("[element-animated-trigger]", { opacity: 1 });
    },

    "(max-width: 767px)": function () {
      gsap.set("[element-animated-trigger]", { opacity: 1 });
    },

    "(max-width: 479px)": function () {
      gsap.set("[element-animated-trigger]", { opacity: 1 });
    },
  });
});
