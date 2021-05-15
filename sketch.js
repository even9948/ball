
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box1, box2, box3;
var paperBall;
var ground;

function setup() {
	createCanvas(1000,400);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,400,1200,20);

	box1 = new Dustbin(880,380,150,20);

	box2 = new Dustbin(800,340,20,100);
	box3 = new Dustbin(960,340,20,100);

	paperBall = new Paper(200,270, 20);

  
}


function draw() {
  background(0);

  Engine.update(engine);

  ground.display();

  box1.display();
  box2.display();
  box3.display();
  
  paperBall.display();
  
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x:50,y:-60});
	}
}




