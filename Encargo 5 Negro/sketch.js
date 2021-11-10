let frames; // los fotogramas
let span, current;

function setup() {
  frames = [];
  span = 500 ;
  current = 0;

  createCanvas(500, 500);

  background(0);
  stroke(200);
  strokeWeight(500);

  for (let i = 0; i < span; i++) {
    let img = get();
    frames.push(img);
  }
}

function draw() {
  background(frames[current]);

  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }

  frames[current] = get();
  current++;
  current %= span;
}