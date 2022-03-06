// Setup color list
let colors = "0c0a3e-7b1e7a-b33f62-f9564f-f3c677"
  .split("-")
  .map((e) => "#" + e);
// ---------------------------   Divider   -----------------------------------

// // Dynamic display
// function setup() {
//   createCanvas(windowWidth * 0.9, windowHeight * 0.9);
//   background(0);
// }

// function draw() {
//   // example 1
//   push();
//   fill(colors[int(3.99 * fxrand())]);
//   let r = 300 - frameCount / 2;
//   let ang = frameCount / 20;
//   let currentScale = 1 - frameCount / 500 + 0.1 + 0.4 * fxrand();
//   // let x = r * cos(ang);
//   // let y = r * sin(ang);
//   translate(width / 2, height / 2);
//   scale(currentScale);
//   rotate(ang);
//   translate(r, 0);
//   // ellipse(0, 0, 200)
//   // ellipse(0, 0, 100)
//   rect(0, 0, 200, 200);
//   pop();

//   // // example 2
//   // fill(255, 0, 0);
//   // translate(0, height / 2);
//   // rectMode(CENTER);
//   // for (let i = 0; i < 50; i++) {
//   //   rotate(map(mouseY, 0, height, -0.5, 0.5));
//   //   translate(50, 0);
//   //   scale(0.95);
//   //   rect(0, 0, 500, 500);
//   // }
// }

// ---------------------------   Divider   -----------------------------------

// // // Static Display
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

// ---------------------------   Divider   -----------------------------------

// predefine function
function drawFlower(clr, size = 1, _scale) {
  fill(0);
  ellipse(0, 0, 250);
  push();
  fill(clr);
  ellipse(0, 0, 2.5 * _scale);
  ellipseMode(CORNER);
  // fill(24, 172, 188);
  // if (clr) {
  //   fill(clr);
  // }

  let peroid = 10;
  scale(_scale);
  for (var i = 0; i < peroid; i++) {
    ellipse(1.5, -0.5, 7.5 * size, 1);
    line(30, 0, 150, -20);
    rotate(360 / peroid);
  }
  pop();
}

function calColor(clr, threshold_1, threshold_2) {
  if (frameCount < threshold_1) {
    return clr[0] + (frameCount / threshold_1) * (clr[1] - clr[0]);
  } else if (frameCount < threshold_2) {
    return clr[1] + (frameCount / threshold_1) * (clr[2] - clr[1]);
  } else {
    return clr[2];
  }
}

// Start render
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
}

function draw() {
  translate(width / 2, height / 2);
  colorMode(HSB);
  // let clr1 = colors[int(3 * fxrand())];
  // let clr2 = colors[2 + int(2 * fxrand())];

  let clr1 = color("#9b9631");
  let clr2 = color(frameCount % 10, 100, 200);
  let colorList = [
    color(82, 203, 217),
    color(98, 217, 205),
    color(242, 229, 41),
  ];
  scale((2 / sqrt(frameCount + 3)) * 3);
  angleMode(DEGREES);
  rotate(frameCount);
  for (var o = 0; o < 3; o++) {
    // rotate((o / 6) * 360);
    // rotate(-0.1 + 0.9 * fxrand());

    let scaleDelta = 0.1 + 0.86 * fxrand();
    push();
    for (var i = 0; i < 300; i++) {
      let midColor = calColor(colorList, 100, 300); // lerpColor(clr1, clr2, i / 200);
      fill(midColor);
      ellipse(0, 0, 10, 10);
      translate(30, 30);
      scale(scaleDelta);
    }
    pop();
  }

  //background(0);
  push();
  rotate(-frameCount);
  //translate(20, 20);
  //scale(1 / scaleDelta);
  drawFlower("#F2E529", map((frameCount * 50) % width, 0, width, 0, 1), 5);
  pop();
}
