function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  // example 1
  push();
  fill(random(250));
  let r = 300 - frameCount / 2;
  let ang = frameCount / 20;
  let currentScale = 1 - frameCount / 500 + random(0.1, 0.5);
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
