//Falling Off  BeshoyB
//I am trying to explore in this semester more animation with code this sketch kinda ties with it as I am trying to to kinda make a type of physics engine with it
let IsPressed = false;
let BallY = 30;
let randomNumber;
 let Colorbuild = color('rgb(128,128,128)');
function setup() {
  createCanvas(400, 400);

   randomNumber = 400;
 
}
//Ball Falls of a building and line stops the ball if line is under ball ball keeps falling if line is on ball ball resets

function draw() {
   background(220);
  //fill(Colorbuild);
  rect(-100,50,200,500);

  line(400,randomNumber,100,randomNumber);
  // randomNumber is position of line and it changes when function MousePressed() is used

   
  circle(200,BallY,40);

   if(randomNumber>BallY + 20)
   {
     BallY += 5;
   }
   else if(randomNumber<BallY-20)
   {
      BallY += 5;
   }
  else if(BallY -20 < 400|| BallY + 20  > 400)
   {
      BallY = 30;
   }
   
   
   
   
  

}
function mousePressed(){
     
     
        randomNumber = random(50,400);
        // changes randomNumber int to random number between 50 to 400
      IsPressed = true;

}
