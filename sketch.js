
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800,600);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
	paper = new Paper(100,500,50);

	dustbin1 = new Dustbin(430,490,20,100);
	dustbin2 = new Dustbin(520,530,200,20);
	dustbin3 = new Dustbin(620,490,20,100);

	ground = new Ground(400,550,1000,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  Engine.update(engine);
  
  paper.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  ground.display()
}

function keyPressed() {

	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:320,y:-305});
	}
}
