function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 0, 100);

  let x = 0;
  fill(x, x, x);
  y = random(100);

  if (y > 50) {
    stroke(100, 100, 200);
  } else {
    stroke(200, 200, 100);
  }

  strokeWeight(10);
  rect(290, 150, 25, 75);

  line(0, 0, 400, 600);

  circle(80, 20, 30, 20);

  ellipse(200, 150, 90, 80);
}