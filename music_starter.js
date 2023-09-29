
// vocal, drum, bass, and other are volumes ranging from 0 to 100


function draw_one_frame(vocal, drum, bass, other) {
colorMode(HSB, 100);
background (255)
rectMode (CENTER)
strokeWeight(9)
stroke(drum, 80,80);

let drumMap = map(drum, 0,100,5,70); //parseint
let lengthOfLine = 400;
let LineStart = 100;
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
















