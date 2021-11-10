/* Sol Lweitt

10,000 random straight lines about four inches long.

*/


let m = 10; // el margen

function setup() {
  createCanvas(500, 500);
  noLoop(); // que se ejecute una sola vez
  stroke(0,100);
}

function draw() {
  
  background(200);
  
  for(let i=0;i < 10000;i++){
  let x = random(m, width-m);
  let y = random(m,height-m)
  
  line(x,y,x + 20,y);
    }
}