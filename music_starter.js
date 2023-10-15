// vocal, drum, bass, and other are volumes ranging from 0 to 100
let firstRun = true 
let PalmTrees; 

function draw_one_frame(vocal, drum, bass, other) {
colorMode(HSB, 100);
background('#7BD5DB')
rectMode(CENTER)
strokeWeight(9)
stroke(drum, 80,80);

if(firstRun){
rectMode(CENTER)
PalmTrees = loadImage ('Palm Trees.png');
 firstRun = false

//Waves Drawing
fill('#3DABF9')
ellipse(300, 490, 850,90)
    
//Sun Drawing 
fill('#FFF05C')
ellipse(265,140,250,240) 
    
//Clouds Drawing
fill('white')
stroke('white')
ellipse(34,60,50,10)//left
ellipse(60,50,50,10)//middle
ellipse(90,60,50,10)//right
    
fill('white')
stroke('white')
ellipse(34,160,50,10)//left
ellipse(60,150,50,10)//middle
ellipse(90,160,50,10)//right
    
fill('white')
stroke('white')
ellipse(434,160,50,10)//left
ellipse(460,150,50,10)//middle
ellipse(485,160,50,10)//right
    
//Road Marks Drawing 
let drumMap = map(drum, 0,100,5,70); //parseint
let lengthOfLine = 100;
let LineStart = 10;
let lineEnd = LineStart+lengthOfLine;
    
line(LineStart, 550, lineEnd, 550); 
line(LineStart, 560, lineEnd, 560);
line(LineStart, 570, lineEnd, 570);

}
     
    
for(let i = 1; i < drumMap; i=i+4); {
let lineStep = 1+20;
line(LineStart, lineEnd, lineStep);
    
beginShape(TRIANGLES);
fill('#000000')
noStroke()
vertex(-50, 420);
vertex(40, 380);
vertex(50, 280);
vertex(160, 220);
vertex(70, 275);
endShape();

} 

let ballSize = map(bass, 25, 50, 40, 150) 
let drumHight = map(drum, 0 , 50, height, 3+ballSize); 
ellipse(width/2, drumHight, ballSize/2);

image(PalmTrees, 50,-580);

