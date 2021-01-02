
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var crumpledPaper;
var left, right, bottom;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  crumpledPaper = new Paper(90, 674);
  //left = new Box(610, 667, 10, 50);
	//right = new Box(690, 667, 10, 50);
  bottom = new Dustbin(650, 610, 80, 10);
  ground = new Ground(width/2, 700, 820, 20);

  keyPressed();
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);

  crumpledPaper.display();

  bottom.display();
  //left.display();
  //right.display();
  ground.display();

  drawSprites();
 
}

function keyPressed(){

if (keyCode === UP_ARROW){

Matter.Body.applyForce(crumpledPaper.body, crumpledPaper.body.position, {x:15, y:-15});

}


}



