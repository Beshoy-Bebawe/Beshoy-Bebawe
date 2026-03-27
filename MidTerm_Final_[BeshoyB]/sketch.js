let yposcircle =50;
let xposcircle = 500;
let OldTime = false;
let Radius  = 25;
  let point = 0;
  let pressed = true;
  let t = 5;
  let state = 'beforegame';
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
  
    let Timer = millis();

  if(state == 'beforegame') 
    {
    BeforeGame()
    }
    if(state == 'game'){


      Game();
    
      print(Timer)
      
      
    }
     if(Timer >= 30000)// game stops after 30 seconds 
     {
        AfterGame();
        state = 'aftergame';
        

     }


  

  
 
  
}
function mousePressed(){
  let my = mouseY;
  let mx = mouseX;
  let d = dist(xposcircle,yposcircle,mx,my);
  if(d < Radius)
  {
    point++;
    
  }
  
  
  

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
  text('Score:' + point,50,50);
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




