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
