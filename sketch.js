var  h , min , sec , scAngle , minAngle , hrAngle;



function setup() {
  createCanvas(500,500);
  //createSprite(400, 200, 50, 50);

  angleMode(DEGREES);
}

function draw() {
  background("black"); 
  translate(200,200);
  rotate(-90);
  h = hour() ; 
  min = minute();
  sec = second();
  
  scAngle = map(sec,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  hrAngle = map(h%12,0,12,0,360)

push()
 rotate(scAngle);
 stroke(255,0,0);
 strokeWeight(6);
 line(0,0,100,0);
pop()

push()
 rotate(minAngle);
 stroke(0,255,0);
 strokeWeight(6);
 line(0,0,75,0);
pop()

push()
 rotate(hrAngle);
 stroke(0,0,255);
 strokeWeight(6);
 line(0,0,50,0);
pop()

strokeWeight(10);
noFill();
stroke(255,0,0);
arc(0,0,300,300,0,scAngle);

//strokeWeight(10);
stroke(0,255,0);
arc(0,0,280,280,0,minAngle);

//strokeWeight(10);
stroke(0,0,255);
arc(0,0,260,260,0,hrAngle);

  drawSprites();

  
}