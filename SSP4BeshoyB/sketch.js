let apple;
let appley =50;
let appleLength = 300;

  


function preload(){

  apple = loadImage('/Images/IloveNy.png');

}



function setup() {
  createCanvas(400, 400);
  background(220);
  image(apple,50,appley,300,appleLength);
 
  
}

function draw(){
  
   

 
  let s = millis()/1000;
 print(s);
 
 if( s >= 5)
 {
    appley += 5;

 }
   
 else if( s >= 10)
 {
   appley -=5;

 }
 
 
 
 
}
