function setup() {
  createCanvas(450, 400);
}

function draw() { 
stroke(random(100));
  circle(height/6, width/6,random(height));
  circle(height/2, width/2,random(height));
  line(100,80,width,random(height))
}
  