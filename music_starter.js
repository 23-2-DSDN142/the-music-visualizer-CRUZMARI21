// vocal, drum, bass, and other are volumes ranging from 0 to 100
let firstRun = true 

let skycolour;
let Island2;
let Road;
let grassandsand;
let Palmtreebranch;
let PalmLeavesTwo 
let PalmLeavesThree;
let PalmLeavesOne;
let Carview;

var Xmove = 50;

function draw_one_frame(vocal, drum, bass, other) {
colorMode(HSB, 100);
background('#F5E3F5');
strokeWeight(9)
stroke(drum, 80,80)

if(firstRun){
    rectMode(CENTER)
    skycolour = loadImage ('sky colour.png');
    Carview = loadImage ('Car View.png');
    Island = loadImage ('Island.png');
    Island2 = loadImage ('Island2.png');
    Road = loadImage('Road.png');
    grassandsand = loadImage ('grass and sand.png');
    Palmtreebranch = loadImage ('Palm tree branch.png');
    PalmLeavesTwo = loadImage ('Palm Leaves Two.png');
    PalmLeavesThree = loadImage ('Palm Leaves Three.png');
    Carview = loadImage ('Car view.png');
    PalmLeavesOne = loadImage ('Palm Leaves One.png');
    firstRun = false
    }

image(skycolour, -390, -100);
image(grassandsand, 90,-598)
image(Road, -50, -288)

//Sun Drawing
fill('yellow')
let ballSize = map(bass, 0,100,55,150)
let drumHight = map(drum, 0,100,height,3+ballSize);
ellipse(width/2, drumHight/4, ballSize);

//RoadMarks
fill('white')
square(140,320, 30, 10)
square(140,390, 30, 10)
square(318,300, 30, 10)
square(310,370, 30, 10)
square(310,440, 30, 10)
square(310,510, 30, 10)
square(320,580, 30, 10)
square(335,650, 30, 10)
square(355,260, 25, 10)
square(150,260, 25, 10)

//water
fill('#9DE6F5')
stroke('#9DE6F5')
rect(800,310,450,150)
fill('#9DE6F5')
stroke('#9DE6F5')
rect(800,500,450,150)
fill('#AAE6FF')
stroke('#AAE6FF')
rect (800,450,450,150)
fill('#99F0FF')
stroke('#99F0FF')
rect (800,590,450,150)

//Signage
stroke('#AC7E5E')
fill('#917E5E')
rect(500,470,240,90)
let s = 'Stop here for Sunset View';
fill('white')
text(s, 518, 500, 170, 80);
fill('#AC7E5E')
rect (500,545,50,50)

//CLOUDS
//Cloud 2
fill('#B1E4EB')
fill('#F093A6')
ellipse(560,150,50,10)//left
ellipse(560,150,50,10)//middle
ellipse(590,160,50,10)//right
ellipse(535,160,50,10)//below

//Cloud 2 Shades
fill('#C3F3F3');
stroke('#C3F3F3')
ellipse(150,160, 50, 10)
ellipse(200,160, 50, 10)
ellipse(175,175, 50, 10)

//Cloud 3
fill('#EBDDED')
stroke('#EE8CC2')
fill('#F093A6')
stroke('#F093A6')
ellipse(340,160,50,10)//left
ellipse(360,150,50,10)//middle
ellipse(390,160,50,10)//right
ellipse(360,173,50,10)//below

//Cloud 4
fill('#EBDDED')
stroke('#EBDDED')
ellipse(280,70,50,10)//left
ellipse(260,80,50,10)//middle
ellipse(260,60,50,10)//right
ellipse(230,70,50, 10)//below

//Cloud 5
fill('#C3F3F3')
stroke('#C3F3F3')
ellipse( 650,70,50,10)//left
ellipse(630,60,50,10)//right
ellipse( 610,70,50, 10)//below

//Cloud1move
fill('#8EF7FF')
ellipse(Xmove, 38,90,10,10)//middle
ellipse(Xmove, 30,60,10,10)//below
Xmove = Xmove + -1;
if(Xmove > 200){-148,20 +124,18 
    Xmove > 200 + 1;
    Xmove = 0 
}

//Cloud 2Move
fill('#8EF7FF')
stroke('#8EF7FF')
ellipse(10+Xmove, 150,50,10,30)//left
ellipse(10+Xmove, 138,90,10,10)//middle
ellipse(10+Xmove, 150,50,10,10)//right
ellipse(10+Xmove, 130,60,10,10)//below
Xmove = Xmove + 1;

ellipse(Xmove, 50,50,10,30)//left
ellipse(Xmove, 38,90,10,10)//middle
ellipse(Xmove, 50,50,10,10)//right
ellipse(Xmove, 30,60,10,10)//below
Xmove = Xmove + 1;
if(Xmove > 200){-148,20 +124,18 
Xmove > 200 + 1;
Xmove = 0 

}

image(Island, -360,-29)
image(Island2, 450,-335)
image(Carview,-10,-640)

image(Palmtreebranch, -10, -420);
image(PalmLeavesTwo, 268, -185 );
image(PalmLeavesThree, 345, -220);
image(PalmLeavesOne, 245, -200);
}