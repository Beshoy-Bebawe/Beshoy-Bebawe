let randomNumber = 40;
let randomNumber2 = 400;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  background(220);
   circle(randomNumber,randomNumber2,40);


}

function mousePressed()
{
  randomNumber = random(0,400);
  randomNumber2 = random(0,400);
 
}
