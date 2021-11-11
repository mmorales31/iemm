let m, mSlider;
let e, eSlider;

function setup() {
  createCanvas(windowWidth, windowHeight -50);
  
  
 mSlider = createSlider(10, 110, 30, 1);
  eSlider = createSlider(10, 110, 30, 1) ;
}

function draw() {
  m = mSlider.value();
  e = eSlider.value();
  background("yellow");


for(let y = m; y < height - m; y += e){
    for(let x = m; x < width - m; x += e){
      let d = dist(x, y, mouseX, mouseY);
      let m = map(d, 0, 500, 30, 2);
      plus(x, y, m);
    }
  }
}

function plus(x, y, t) {
  push();
  translate(x, y);
  // line (x1, y1, x2, y2);

  line(-t / 1, -t / 1, t / 1, t / 1);
  line(-t / 1, t / 1, t / 1, -t / 1);
  pop();
}
