
// vocal, drum, bass, and other are volumes ranging from 0 to 100


function draw_one_frame(vocal, drum, bass, other) {
colorMode(HSB, 100);
background('#7BD5DB')
rectMode(CENTER)
strokeWeight(9)
stroke(drum, 80,80);

//Draw Road Side 
fill('black')
rect(270, 500,550,450);
let rectX = 50;
let fr = 200; //starting FPS
let clr;
clr = color(255, 50, 0);

//Draw Sun 
fill('#FFF05C')
ellipse(250,140,250,240)


//Draw Clouds
fill('#66ACDB')
stroke('#66ACDB')
ellipse(20,60,70,10)//left
ellipse(55,50,60,10)//middle
ellipse(90,60,70,10)//right

fill('#66ACDB')
ellipse(34,160,50,10)//left
ellipse(60,150,50,10)//middle
ellipse(90,160,50,10)//right

//Road 
let drumMap = map(drum, 0,100,5,70); //parseint
let lengthOfLine = 100;
let LineStart = 10;
let lineEnd = LineStart+lengthOfLine;

line(LineStart, 300, lineEnd, 300); 
line(LineStart, 310, lineEnd, 310);
line(LineStart, 320, lineEnd, 320);

for(let i = 1; i < drumMap; i=i+4) {
let lineStep = 1+20;
line(LineStart, lineEnd, lineStep);

let ballSize = map(bass, 15, 50, 40, 150) //ellipsebouncing 
let drumHight = map(drum, 0 , 50, height, 3+ballSize); 
ellipse(width/2, drumHight, ballSize/2);
}





}




















