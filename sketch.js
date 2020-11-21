
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground
var log1
var log2
var log3

function preload(){
  paperImg = loadImage("sprites/paper.png")
  rubbishCanImg = loadImage("sprites/dustbingreen.png")
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball = new Paper(100,200)
    ground = new Ground(400,500, 800, 10)
    log1 = new Log(685,400,20,200)
    log2 = new Log(600,490,150,20)
    log3 = new Log(515,400,20,200)
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  push()
  imageMode(CENTER)
  image(rubbishCanImg,600,490,150,20)
  pop()
  ball.display();
  ground.display();
  log1.display();
  log2.display();
  log3.display();
  
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(ball.body, ball.body.position,{x:340, y:-450})
}
}

