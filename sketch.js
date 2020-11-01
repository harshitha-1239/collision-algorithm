var fixedrect;
var movingrect;
var gameobject1,gameobject2,gameobject3,gameobject4; 


function setup() {
  createCanvas(800,400);
 fixedrect= createSprite(400, 200, 50, 100);
fixedrect.shapeColor="red";

 movingrect=createSprite(200,200,100,50);
 movingrect.shapeColor="red";

 gameobject1=createSprite(100,100,50,50)
 gameobject1.shapeColor="red"
 
 gameobject2=createSprite(200,100,50,50)
 gameobject2.shapeColor="red"

 gameobject3=createSprite(300,100,50,50)
 gameobject3.shapeColor="red"

 gameobject4=createSprite(400,100,50,50)
 gameobject4.shapeColor="red"
 
}

function draw() {
  background("black"); 
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

 if(istouching(movingrect,gameobject1)){
  movingrect.shapeColor="blue";
  gameobject1.shapeColor="blue";
 }
 else{
  movingrect.shapeColor="red";
  gameobject1.shapeColor="red";


 } 
  
  drawSprites();
}


