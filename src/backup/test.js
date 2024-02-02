let matterButtonCreate = $(".matter-button").eq(0);
let matterButton = $(".matter-button.is-2");

matterButton.on("click", function () {
  $(this).toggleClass("is-active");
  $(this).siblings(".matter-button").removeClass("is-active");
});

matterButtonCreate.on("click", function () {
  $(this).toggleClass("is-active");
  $(this).toggleClass("is-inactive");
  $(this).siblings(".matter-button").removeClass("is-active");
});

const matterContainer = document.querySelector("#matter-container");
const THICCNESS = 60;

// module aliases
var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
  element: matterContainer,
  engine: engine,
  options: {
    width: matterContainer.clientWidth,
    height: matterContainer.clientHeight,
    background: "transparent",
    wireframes: false,
    showAngleIndicator: false,
  },
});
let circle;
let i;
// create two boxes and a ground
// var boxA = Bodies.rectangle(400, 200, 80, 80);
// var boxB = Bodies.rectangle(450, 50, 80, 80);
$(".matter-button.is-inactive").on("click", function () {
  if (circle == undefined) {
    for (i = 0; i < 10; i++) {
      circle = Bodies.circle(
        matterContainer.clientWidth / 2,
        matterContainer.clientHeight - matterContainer.clientHeight * 1.5,
        30,
        {
          friction: 0.3,
          frictionAir: 0.00001,
          restitution: 0.3,
        }
      );
      Composite.add(engine.world, circle);
    }

    var ground = Bodies.rectangle(
      matterContainer.clientWidth / 2,
      matterContainer.clientHeight + THICCNESS / 2,
      27184,
      THICCNESS,
      { isStatic: true, render: { opacity: 0 } }
    );

    let leftWall = Bodies.rectangle(
      0 - THICCNESS / 2,
      matterContainer.clientHeight / 2,
      THICCNESS,
      matterContainer.clientHeight * 5,
      {
        isStatic: true,
        render: { opacity: 0 },
      }
    );

    let rightWall = Bodies.rectangle(
      matterContainer.clientWidth + THICCNESS / 2,
      matterContainer.clientHeight / 2,
      THICCNESS,
      matterContainer.clientHeight * 5,
      { isStatic: true, render: { opacity: 0 } }
    );

    // add all of the bodies to the world
    Composite.add(engine.world, [ground, leftWall, rightWall]);

    let mouse = Matter.Mouse.create(render.canvas);
    let mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    Composite.add(engine.world, mouseConstraint);

    // allow scroll through the canvas
    mouseConstraint.mouse.element.removeEventListener(
      "mousewheel",
      mouseConstraint.mouse.mousewheel
    );
    mouseConstraint.mouse.element.removeEventListener(
      "DOMMouseScroll",
      mouseConstraint.mouse.mousewheel
    );

    // run the renderer
    Render.run(render);

    // create runner
    var runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);
  }
});
function handleResize(matterContainer) {
  // set canvas size to new values
  render.canvas.width = matterContainer.clientWidth;
  render.canvas.height = matterContainer.clientHeight;

  // reposition ground
  Matter.Body.setPosition(
    ground,
    Matter.Vector.create(
      matterContainer.clientWidth / 2,
      matterContainer.clientHeight + THICCNESS / 2
    )
  );

  // reposition right wall
  Matter.Body.setPosition(
    rightWall,
    Matter.Vector.create(
      matterContainer.clientWidth + THICCNESS / 2,
      matterContainer.clientHeight / 2
    )
  );
}

matterButton.on("click", function () {
  if (circle !== undefined) {
    Matter.Composite.clear(engine.world, circle);
  }
  circle = undefined;
  i = 0;
});

window.addEventListener("resize", () => handleResize(matterContainer));
