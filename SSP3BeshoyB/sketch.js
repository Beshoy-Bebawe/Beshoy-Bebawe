let IsPressed = false;
let BallY = 30;
let randomNumber;
function setup() {
  createCanvas(400, 400);
   randomNumber = 400;
}

function draw() {
  background(220);
  rect(-100,50,200,500);
  line(400,randomNumber,100,randomNumber);

  circle(200,BallY,40);
   if(randomNumber>BallY + 20)
   {
     BallY += 5;
   }
   else if(randomNumber<BallY-20)
   {
      BallY += 5;
   }
  else if(BallY > 400)
   {
      BallY = 30;
   }
   else
   {
      BallY = 30;

   }
  

}
function mousePressed(){
     
     
        randomNumber = random(50,400);
      IsPressed = true;

}
