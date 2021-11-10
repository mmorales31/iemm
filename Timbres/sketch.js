let clicks = 0;

function setup() {
  createCanvas(windowWidth, 400);
  background(200);
  rectMode(CENTER);
  ellipseMode(CENTER);
  noStroke();
  background("purple")
}

function draw() {
  fill(red);

}

function mouseReleased(){
  clicks ++;
  blendMode(MULTIPLY);
  if(clicks % 3 == 0){
    stampA(mouseX, mouseY);
  }else{
    stampB(mouseX, mouseY);
  }
  blendMode(BLEND);
  print(clicks);
}

function stampA(x, y){
  
  fill(30, 45, 230, 90);
  ellipse(x, y, 322);
  strokeWeight(10);
  fill("black")
  } 

function stampB(x, y){
  push();
  translate(x, y);
  rotate(atan2(pmouseY - mouseY, pmouseX - mouseX));
  fill(220, 20, 35, 90);
  rect(0, 0, 22);
  pop();
}

