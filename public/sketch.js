// predefine function
function drawFlower(clr, size = 1, _scale) {
  fill(0);
  ellipse(0, 0, 250);
  push();
  fill(clr);
  ellipse(0, 0, 2.5 * _scale);
  ellipseMode(CORNER);

  let peroid = 10; // # of beam
  scale(_scale);
  for (var i = 0; i < peroid; i++) {
    ellipse(1.5, -0.5, 7.5 * size, 1);
    line(30, 0, 150, -20);
    rotate(360 / peroid);
  }
  pop();
}

// determine color to render
function calColor(clr, threshold_1, threshold_2) {
  colorMode(RGB);
  let inter;
  // color between 0 to threshold 1
  if (frameCount < threshold_1) {
    inter = frameCount / threshold_1;
    return color(
      clr[0][0] + inter * (clr[1][0] - clr[0][0]),
      clr[0][1] + inter * (clr[1][1] - clr[0][1]),
      clr[0][2] + inter * (clr[1][2] - clr[0][2])
    );
  }
  // color between threshold 1 to threshold 2
  else if (frameCount < threshold_2) {
    inter = (threshold_2 - frameCount) / (threshold_2 - threshold_1);
    return color(
      clr[1][0] + inter * (clr[2][0] - clr[1][0]),
      clr[1][1] + inter * (clr[2][1] - clr[1][1]),
      clr[1][2] + inter * (clr[2][2] - clr[1][2])
    );
  }
  // above threshold 2
  else {
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
  colorMode(RGB);

  // Setup color list
  let colorList = [
    [(10000 * fxrand()) % 255, 203, (10000 * fxrand()) % 255],
    [98, 167 + ((10000 * fxrand()) % 255), 205],
    [(10000 * fxrand()) % 255, (10000 * fxrand()) % 255, 41],
  ];

  // Draw Universe
  scale((2 / sqrt(frameCount + 3)) * 3);
  angleMode(DEGREES);
  rotate(frameCount);
  for (var o = 0; o < 3; o++) {
    let scaleDelta = 0.1 + 0.86 * fxrand();
    push();
    let midColor = calColor(colorList, 500, 1000);
    for (var i = 0; i < 300; i++) {
      fill(midColor);
      ellipse(0, 0, 10, 10);
      translate(30, 30);
      scale(scaleDelta);
    }
    pop();
  }

  // Draw the star
  push();
  rotate(-frameCount);
  drawFlower("#F2E529", map((frameCount * 50) % width, 0, width, 0, 1), 5);
  pop();
}
