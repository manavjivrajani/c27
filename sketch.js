
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var Roof
var bob1,bob2,bob3,bob4,Bob5
var sling1,sling2,sling3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	world = engine.world;

  Roof=new roof(370,100)
	Bob1=new bob(270,200);
	Bob2=new bob(320,200);
  Bob3=new bob(370,200);
  Bob4=new bob(420,200);
  Bob5=new bob(470,200);

  sling1=new Slingshot(Bob1.body,{x:270,y:100})
  sling2=new Slingshot(Bob2.body,{x:320,y:100})
  sling3=new Slingshot(Bob3.body,{x:370,y:100})
  sling4=new Slingshot(Bob4.body,{x:420,y:100})
  sling5=new Slingshot(Bob5.body,{x:470,y:100})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  Roof.display()
  Bob1.display()
  Bob2.display()
  Bob3.display()
  Bob4.display()
  Bob5.display()
  sling1.display()
  sling2.display()
  sling3.display()
  sling4.display()
  sling5.display()

  
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
     Matter.Body.applyForce(Bob1.body,Bob1.body.position,{x:-45,y:-45});
     
   }
 }
 