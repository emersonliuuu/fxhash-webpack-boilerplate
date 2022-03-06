// Setup color list
let colors = "0c0a3e-7b1e7a-b33f62-f9564f-f3c677"
  .split("-")
  .map((e) => "#" + e);

// ---------------------------   Divider   -----------------------------------

// Dynamic display
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  // example 1
  push();
  fill(colors[int(3.99 * fxrand())]);
  let r = 300 - frameCount / 2;
  let ang = frameCount / 20;
  let currentScale = 1 - frameCount / 500 + 0.1 + 0.4 * fxrand();
  // let x = r * cos(ang);
  // let y = r * sin(ang);
  translate(width / 2, height / 2);
  scale(currentScale);
  rotate(ang);
  translate(r, 0);
  // ellipse(0, 0, 200)
  // ellipse(0, 0, 100)
  rect(0, 0, 200, 200);
  pop();

  // // example 2
  // fill(255, 0, 0);
  // translate(0, height / 2);
  // rectMode(CENTER);
  // for (let i = 0; i < 50; i++) {
  //   rotate(map(mouseY, 0, height, -0.5, 0.5));
  //   translate(50, 0);
  //   scale(0.95);
  //   rect(0, 0, 500, 500);
  // }
}

// ---------------------------   Divider   -----------------------------------

// // Static Display
// function setup() {
//   createCanvas(1e3, 1e3),
//     background(100),
//     fill(0),
//     rect(0, 0, width, height),
//     noFill(),
//     stroke(255),
//     strokeWeight(3);
//   for (var e = 0; e < 200; e++) {
//     let e = 300 * fxrand(),
//       r = width * fxrand(),
//       n = height * fxrand(),
//       t = 10 + 20 * fxrand(),
//       a = colors[int(3.99 * fxrand())];
//     stroke(a);
//     for (var o = 0; o < e; o += t) ellipse(r, n, o);
//   }
// }
// function draw() {}
