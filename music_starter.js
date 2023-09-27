// vocal, drum, bass, and other are volumes ranging from 0 to 100

function_draw_oneframe(words,vocal,drum,bass,other){
background(225,50);

var ballSize = map(bass, 0, 100, 40,150)
var drumHeight = map(drum, 0 , 100, height, 0+ballSize/2); 

fill(60,200,90);
ellipse(width/2, drumHeight, ballSize);
} 


