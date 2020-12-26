
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground
var engine,world;
var leftbox,rightbox,bottombox;
var b1,b2,b3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bottombox=createSprite(700,665,100,10);
	b1=Bodies.rectangle(700,665,100,10,{isStatic:true})

	World.add(world,b1);

	leftbox=createSprite(650,630,10,80);
	b2=Bodies.rectangle(650,630,10,80,{isStatic:true})

	World.add(world,b2)

	rightbox=createSprite(750,630,10,80);
	b3=Bodies.rectangle(750,630,10,80,{isStatic:true})

	World.add(world,b3)

	ball = new paper();
ground = new Ground();



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);



ball.display();
ground.display();


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
	
		Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:-100});
		
		}
	}