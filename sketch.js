const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

// base/ground for 1st set of boxes
var ground1;
// 1st set of boxes
// Bottom row (1st row)
//var box1,box2,box3,box4,box5,box6,box7;
// Second row (2nd Row)
//var box8,box9,box10,box11,box12;
// Third row (3rd Row)
//var box13,box14,box15;
// Top row (4th Row)
//var box16;

function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(400,300,100,10);
  // box1 = new Box();
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y);

  ground1.display();

  drawSprites();
}