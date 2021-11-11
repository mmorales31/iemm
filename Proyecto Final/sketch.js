let angle = 20;
  let r = 15;
let spin = 0.1;
let grow = spin * 3;

let s, ss;

function setup() {
  createCanvas(windowWidth, 600);
  background(10);
  blendMode(DIFFERENCE);
  noCursor();
  background("orange")
  s = createSlider(20,880,10,1);
  ss = createSlider (20,1280,10,1);
}


function draw() {
  
  let x = cos(angle)*r;
  let y = sin(angle)*r;
  let z = s.value();
 
  for ( let w=30; w < width -30; w +=4) {
     stroke (random(150),random(150),random(150));
     line(w,20,w,z);
  }
  
  let w =ss.value();
  for (let z=30; z < height - 40; z +=4){
    line (20,z,w,z);
  }
 
  r = r + grow; 
  angle += spin;
  
      
  translate(width / 1, height / 6);
  randomColor = color(random(250),random(500), random(2));
  fill(randomColor)
  noStroke();
  rect(x, y, 10, 30);
}