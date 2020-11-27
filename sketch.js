
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	Ball = new Paper(100,100)
    ground = new Ground(600,height,1200,20)
    dustbin = new Dustbin(width/2,670)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Ball.display()
  ground.display()
  dustbin.display()
  drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){

Matter.Body.applyForce(Ball.body,Ball.body.position,{x:85,y:-85})
} 



}


