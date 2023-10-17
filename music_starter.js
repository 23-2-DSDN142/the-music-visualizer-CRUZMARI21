// vocal, drum, bass, and other are volumes ranging from 0 to 100
let firstRun = true 
let PalmTrees; 
let Carview;
let LeavesonTop;
let WaterScene;

function draw_one_frame(vocal, drum, bass, other) {
colorMode(HSB, 100);
background('#F5E3F5');
noStroke();
rectMode(CENTER)
strokeWeight(9)
stroke(drum, 80,80);

if(firstRun){
rectMode(CENTER)
PalmTrees = loadImage ('Palm Trees.png');
Carview = loadImage ('Car View.png');
LeavesonTop = loadImage ('Leaves on Top.png');
WaterScene = loadImage ('Water Scene.png');
 firstRun = false
}
//fill('#EDE3A4')
let ballSize = map(bass, 25, 30, 40, 150) 
let drumHight = map(drum, 1 , 50, height, 3+ballSize); 
ellipse(width/2, drumHight, ballSize/2);

//Sun Drawing 
fill('#EDE3A4')
ellipse(190, 110, 190,190)

//Sand Drawing
fill('#F5E3BE')
quad(75, 765, 940, 678, 580, 280, 120, 280);

//Road Drawing
fill('#000000') 
stroke 
//rect(300,510,850,490)
quad(45, 765, 640, 678, 295, 280, 58, 278);

//Water Waves
fill('#3E6FF5')
ellipse (520,260,910,30)
ellipse(820,280,710,30)
ellipse(800,305,445,30)
fill('#699AF5')
ellipse(810,325,470,30)
ellipse(810,355,430,60)




//CLOUD DRAWINGS
// Cloud 1
fill('white')
stroke('white')
ellipse(34,60,50,10)//left
ellipse(60,50,50,10)//middle
ellipse(90,60,50,10)//right

//Cloud 1 shades
fill('#DDEBED');
stroke('#B1E4EB')
ellipse(40,60, 50, 10)
ellipse(80,60, 50, 10)
ellipse(60,50, 50, 10)

//Cloud 2
fill('white')
stroke('white')
ellipse(34,160,50,10)//left
ellipse(60,150,50,10)//middle
ellipse(90,160,50,10)//right
ellipse(60,175,50,10)//below

//Cloud 2 Shades
fill('#DDEBED');
stroke('#B1E4EB')
ellipse(40,160, 50, 10)
ellipse(80,160, 50, 10)
ellipse(60,150, 50, 10)
ellipse(65,175, 50, 10)

//Cloud 3
fill('#EBDDED')
stroke('#EBDDED')
ellipse(334,160,50,10)//left
ellipse(360,150,50,10)//middle
ellipse(390,160,50,10)//right
ellipse(360,173,50,10)//below

//Cloud 3 Shades
fill('#EE8CC2')
stroke('#EBDDED')
ellipse(344,160,50,10)//left
ellipse(370,150,50,10)//middle
ellipse(380,160,50,10)//right
ellipse(370,173,50,10)//below

//Cloud 4
fill('#EE8CC2')
stroke('#EEB5C8')
ellipse(334,60,50,10)//left
ellipse(360,50,50,10)//middle
ellipse(390,60,50,10)//right
ellipse(360,73,50, 20)//below

//Cloud 4 Shades
fill('#EDC9B4')
stroke('#EDC9B4')
ellipse(354,60,50,10)//left
ellipse(370,50,50,10)//middle
ellipse(380,60,50,10)//right
ellipse(370,73,50,10)//below

image(WaterScene, -600,-145)
image(PalmTrees, 130,-700)
image(Carview,-10,-640)

}
    