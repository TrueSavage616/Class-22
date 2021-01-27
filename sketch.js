//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
  
var engine,world;
var ground, ball;



function setup() {
  var canvas  = createCanvas(400,400);
  engine = Engine.create();
  //namespacing
 world =  engine.world;

 var options ={
isStatic: true
 }
ground = Bodies.rectangle(200,390,400,20,options);
World.add(world,ground);
console.log(ground);

var optionsball = {
  restitution : 1
}

ball = Bodies.circle(200, 100, 20, optionsball);
World.add(world, ball);
}

function draw() {
  background(0); 
Engine.update(engine);

push();
fill("brown");
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);
pop();
ellipseMode(RADIUS);
//circle(ball.position.x,ball.position.y, 20);
ellipse(ball.position.x,ball.position.y, 20,20);
}