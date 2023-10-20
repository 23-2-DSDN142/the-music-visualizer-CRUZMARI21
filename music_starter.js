// vocal, drum, bass, and other are volumes ranging from 0 to 100
let firstRun = true 
let PalmTrees; 
let Carview;
let Island;
let BirdsFlyingLeft;
let skycolour;
let Island2;
let Road;
let grassandsand;
let Palmtreebranch;
let PalmLeaves;

function draw_one_frame(vocal, drum, bass, other) {
colorMode(HSB, 100);
background('#F5E3F5');
noStroke();
rectMode(CENTER)
strokeWeight(9)
stroke(drum, 80,80);

if(firstRun){
    rectMode(CENTER)
    skycolour = loadImage ('sky colour.png');
    PalmTrees = loadImage ('Palm Trees.png');
    Carview = loadImage ('Car View.png');
    Island = loadImage ('Island.png');
    BirdsFlyingLeft = loadImage('Birds Flying Left.png');
    Island2 = loadImage ('Island2.png');
    Road = loadImage('Road.png');
    grassandsand = loadImage ('grass and sand.png');
    PalmLeaves = loadImage ('Palm Leaves.png');
    Palmtreebranch = loadImage ('Palm tree branch.png');
    firstRun = false
    }

image(skycolour, -800, -8)   

fill('#EDE3A4')
let ballSize = map(bass, 0, 100, 450, 150) 
let drumHight = map(drum, 0 , 100, height, 3+ballSize); 
ellipse(width/2, drumHight/4, ballSize/2);

//Water Waves
fill('#3B74EF')
stroke('#3B74EF')
rect(520,260,910,30)
rect(520,290,910,30)
rect(520,320,910,30)
rect(420,270,610,30)

fill('#4477EF')
stroke('#4477EF')
rect(500,350,910,30)
rect(500,380,910,30)
rect(500,415,910,30)
rect(500,450,910,30)

fill('#3B7DF0')
stroke('#3B7DF0')
rect(500,485,910,30)
rect(500,524,910,30)
rect(500,555,910,30)

fill('#4791EF')
stroke('#4791EF')
rect(500,565,910,30)
rect(500,600,910,30)
rect(500,630,910,30)
rect(500,650,910,30)

//Sandrawing 
fill('#F0E0BA') 
stroke('#F0E0BA') 
//rect(400,470,630,500,80, 550,600)

//RoadDrawing 
fill('black') 
stroke('black') 
//rect(300,470,670,500,85, 550,600)


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
fill('#B1E4EB')
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
ellipse(360,70,50, 10)//below

//Cloud 4 Shades



image(BirdsFlyingLeft, 130, 700)
image(grassandsand, 90,-598)
image(Road, -50, -288)
image(Island, -345,-25)
//image(PalmTrees, 90,-700)
image(Carview,-1,-640)
image(skycolour, 130,700)
image(Island2, 360,-315)
image(Palmtreebranch, -155, -1130)
image(PalmLeaves, 300, -155);
}
    