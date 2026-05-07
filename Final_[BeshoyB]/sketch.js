let yposcircle =50;
let xposcircle = 500;
let OldTime = false;
let Radius  = 25;
  let point = 0;
  let pressed = true;
  let t = 5;
  let state = 'beforegame';
  let resetTimer = 0;
  let Duration = 30000;
  // the  idea of this is when you start you select a diffculty based on diffculty time of the teleport function will change
  //then, you run the game for around 30 seconds and try to click in the circle to get points
  // after 30 seconds the game is over and it will display your score.
  // reset the page if you want to start it again
  



 function teleport()
  //function to teleport circle based on time
 {
  
  let ms = millis()/1000;
  

  let RoundedTime = round(ms)%t == 0;

 if(RoundedTime && !OldTime)

 {
  OldTime = true;
   yposcircle = random(50,650);
    xposcircle = random(500,700);
    
    
   
 }
  else if (!RoundedTime)
  {
    
    OldTime = false;

  }
   

}
function setup() {
  createCanvas(1000, 700); 

 

  
  

  
}
//when everything is displayed using states 
function draw() {
   let Timer;
    

  if(state == 'beforegame') 
    {
    BeforeGame()
    }
    if(state == 'game' ){
       Timer = millis();
      
      Game();
    
      print(Timer)
      
      
    }
     if(Timer >= Duration && state != 'beforegame')// game stops after 30 seconds 
     {
        AfterGame();
        state = 'aftergame';
        

     }
     


  

  
 
  
}
function mousePressed(){
  let my = mouseY;
  let mx = mouseX;
  let d = dist(xposcircle,yposcircle,mx,my);
  if(d < Radius  && state == 'game')
  {
    point++;
    
  }
  
  
  //Timer > resetTimer + Duration

}
function keyPressed(){

    if(key ==='1' && state == 'beforegame')
      //easy
    {
      
      state = 'game';
      print("working");
        

    }
    else if(key == '2' && state == 'beforegame')
      //normal
    {

      state = 'game';
      t = 2.5;

    }
    else if ( key == '3'  && state =='beforegame')
      //hard
    {

      state = 'game';
      t = 1.5;
    

    }

    if(key == 'p' && state == 'aftergame')
    {

      state = 'beforegame'


    }
    
    
  } 

// each state for the game
function BeforeGame()
{
 background(220);
 textSize(50);
 textAlign(CENTER,CENTER);
 


 text('1 for easy \n2 for normal\n3 for hard',width/2,height/2);



}
 function Game(){
  background(220);

  textSize(35);
  text('Score:' + point,60,50);
  let s = millis()/1000;
  text('Timer: ' + round(s,1),75,100);
  textSize(35);
  teleport();
  circle(xposcircle,yposcircle,Radius*2);

  

 }
 
 function AfterGame()
 {
    background('red');
    textSize(150)
    textAlign(CENTER);
    text('Final Score:' + point,width/2,height/2);
    




 }
// bug fixes:
// game can restart timer doesn't restart with it figure out a way to restart the timer
//fix being able to click when the final score pops up
//make a way to move the ball for an extra challenge OR make the ball randomly teleport but turn into 2 types of balls 
// make it move around the entire screen not just an area
//optionial: make it bounce when ball is clicked 
// you can make the ball faster over time and it starts different speed depending on how long you take.
//make a losing factor maybe? instead of running on a time limit  OR make a time limit but make it faster as someone succecds or slow down when someone slows down
//make a pause menu
// add a clock to show the time.
// maybe adding more balls for extra diffculty
