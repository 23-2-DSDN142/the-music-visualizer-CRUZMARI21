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
let PalmLeavesTwo 
let PalmLeavesThree;

var Xmove = 50

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
    PalmLeavesTwo = loadImage ('Palm Leaves Two.png');
    PalmLeavesThree = loadImage ('Palm Leaves Three.png');
    
    firstRun = false
    }

    

image(skycolour, -800, -8)   

//Sun Drawing
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

//CLOUDS
//Cloud 2
fill('#B1E4EB')
stroke('white')
ellipse(534,160,50,10)//left
ellipse(560,150,50,10)//middle
ellipse(590,160,50,10)//right
ellipse(560,175,50,10)//below

//Cloud 2 Shades
fill('white');
stroke('#C3F3F3')
ellipse(150,160, 50, 10)
ellipse(190,160, 50, 10)
ellipse(170,150, 50, 10)
ellipse(175,175, 50, 10)

//Cloud 3
fill('#EBDDED')
stroke('#EE8CC2')
ellipse(334,160,50,10)//left
ellipse(360,150,50,10)//middle
ellipse(390,160,50,10)//right
ellipse(360,173,50,10)//below

//Cloud 4
fill('#EBDDED')
stroke('#EE8CC2')
ellipse(280,70,50,10)//left
ellipse(260,80,50,10)//middle
ellipse(260,60,50,10)//right
ellipse(230,70,50, 10)//below

//Cloud 5
fill('white')
stroke('#C3F3F3')
ellipse(590,60,50,10)//left
ellipse(610,50,50,10)//middle
ellipse(630,60,50,10)//right
ellipse(610,70,50, 10)//below

//Cloud1move
fill('#C3F3F3')
stroke('#C3F3F3')
ellipse(Xmove, 330,50,10,30)//left
ellipse(Xmove, 38,90,10,10)//middle
ellipse(Xmove, 50,50,10,10)//right
ellipse(Xmove, 30,60,10,10)//below
Xmove = Xmove + 1;

if(Xmove > 200){
Xmove = 200 + 1;
Xmove = 0 }

//Cloud 2Move
fill('#F3E2D5')
stroke('white')
ellipse(Xmove, 150,50,10,30)//left
ellipse(Xmove, 138,90,10,10)//middle
ellipse(Xmove, 150,50,10,10)//right
ellipse(Xmove, 130,60,10,10)//below
Xmove = Xmove + 1;

if(Xmove > 200){
Xmove = 200 + 1;
Xmove = 0 }



image(BirdsFlyingLeft, -130, 700)
image(grassandsand, 90,-598)
image(Road, -50, -288)
image(Island, -345,-25)
//image(PalmTrees, 90,-700)

image(skycolour, 130,700)
image(Island2, 360,-315)
image(Palmtreebranch, -155, -1130)
image(Carview,60,-640)
image(PalmLeavesThree, 320, -79);
image(PalmLeavesTwo, 295, 45 );
image(PalmLeaves, 300, -175);

}
    