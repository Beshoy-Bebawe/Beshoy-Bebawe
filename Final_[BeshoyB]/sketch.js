let yposcircle =50;
let xposcircle = 500;
let OldTime = false;
let Radius  = 25;
  let point = 0;
  let pressed = true;
  let t = 5;
  let Timer;
  let state = 'beforegame';
  let startTimer;
  let resetTimer = 0;
  let Duration = 30;
  let bottomdisplay = 50;
  // the  idea of this is when you start you select a diffculty based on diffculty time of the teleport function will change
  //then, you run the game for around 30 seconds and try to click in the circle to get points
  // after 30 seconds the game is over and it will display your score.
  // reset the page if you want to start it again
  



 function teleport()
  //function to teleport circle based on time
 {


  let RoundedTime = round(Timer)%t == 0;

 if(RoundedTime && !OldTime)

 {
  OldTime = true;
  // yposcircle = random(0,650);
    //poscircle = random(0,700);
    
    
   
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
  

  if(state == 'beforegame') 
    {
    BeforeGame()
    }
    if(state == 'game' ){
       
       Timer = millis()/1000 - startTimer;
      
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
    //fill(0,128,0);
    // figure out how to make it turn green and turn back to white and to grow a bit without changing the text.
      yposcircle = random(bottomdisplay + Radius,height - Radius);
    xposcircle = random(Radius,width - Radius);
    


    
  }
  
  
  
  
  //Timer > resetTimer + Duration

}
function keyPressed(){

    if(key ==='1' && state == 'beforegame')
      //easy
    {
      
      StartGame();
      print("working");
       Duration = 30;
        

    }
    else if(key == '2' && state == 'beforegame')
      //normal
    {

      StartGame();
      t = 2.5;
      Duration = 30;

    }
    else if ( key == '3'  && state =='beforegame')
      //hard
    {

      StartGame();
      t = 1.5;
      Duration = 30/2;
    

    }1
    if(key == 'p' && state == 'aftergame')
    {

      state = 'beforegame'
      point = 0;


    }
    
    
  } 

// each state for the game
function BeforeGame()
{
 background(220);
 textSize(50);
 textAlign(CENTER,CENTER);
 


 text(' Press 1 for easy  mode \n Press 2 for normal mode\n Press 3 for hard mode',width/2,height/2);

  textSize(75);

  text('Ball Click Game', 500,50);


}
 function Game(){
  let TimeLeft = Duration - round(Timer,0);
  
  
 background(200);
  
  textSize(35);
  text('Score:' + point,60,bottomdisplay);  
  text('Timer: ' + TimeLeft,700,bottomdisplay);
  textSize(35);
  teleport();
  circle(xposcircle,yposcircle,Radius*2);

  

 }
 
 function AfterGame()
 {
    background('red');
    textSize(150);
    textAlign(CENTER);
    text('Final Score:' + point,width/2,height/2);
    //if(millis() == 5000)
    //{
       textSize(100); 
    text('Press P to Restart',500,500);


    //}
   

 }
  function StartGame()
  {
    
    state = 'game';
    startTimer  = millis()/1000;
     



  }

  class circle
  {



  }
// bug fixes:
//Done: game can restart timer doesn't restart with it figure out a way to restart the timer
//Done:fix being able to click when the final score pops up
//make a way to move the ball for an extra challenge OR make the ball randomly teleport but turn into 2 types of balls 
//Done: make it move around the entire screen not just an area
//optionial: make it bounce when ball is clicked 
// you can make the ball faster over time and it starts different speed depending on how long you take.
//make a losing factor maybe? instead of running on a time limit  OR make a time limit but make it faster as someone succecds or slow down when someone slows down
//make a pause menu
// add a clock to show the time.(this is done)
// maybe adding more balls for extra diffculty
// make a function to restart ot store the timer
// make the ball green as the ball is pressed.
// put more visual design aspects.
// timer 15 when its supposed to be 30 on easy mode  when restarting the game. 