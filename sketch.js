
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Box(400, 690, 800, 20, "brown")
box1 = new Box(500, 620, 20, 100, "green")
box2 = new Box(700, 620, 20, 100, "green")
box3 = new Box(600, 670, 225, 20, "green")
ball1 = new Ball(50, 650, 20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  ball1.display();
  
  drawSprites();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:65, y:-65})
  }

}




