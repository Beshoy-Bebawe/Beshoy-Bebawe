
let i = 70;
let b = 100;
 let r = 30;
let isPressed = false;
 
  
function setup() {
  

  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  
  line(0,100,100,100);
 line(200,200,100,100);
 circle(b,i, r*2);
 
 if(isPressed == true)
 {
 
    b += 10;
    i += 10;
    isPressed = false;

 }

} 
  
  
  

function mousePressed()
{
   let d = dist(b,i,mouseX,mouseY);
   console.log(d);
   
  if(d<r)
  {
    isPressed = true; 
     console.log("working");
    
  }

  

}

