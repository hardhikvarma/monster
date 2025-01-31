const Body = Matter.Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hero;
var monster;
var rope;
var backgroundImg;
var ground;

var box1,box2,box3,box4,box5,box6,box7,
box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;

function preload(){
	backgroundImg = loadImage("Background.jpg");
}

function setup() {
	createCanvas(3000,800);


	engine = Engine.create();
	world = engine.world;

  hero = new Hero(100,200,380,140);
  rope = new Rope(hero.body, { x: 500, y: 50 }); 
  ground = new Ground(600,600,2100,20);
  monster = new Monster(950,20,200,200);

  box1 = new Box(900, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70); 
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(900, 100, 70, 70);
  box6 = new Box(900, 100, 70, 70);
  box7 = new Box(800, 100, 70, 70);
  box8 = new Box(800, 100, 70, 70); 
  box9 = new Box(800, 100, 70, 70);
  box10 = new Box(800, 100, 70, 70);
  box11 = new Box(800, 100, 70, 70); 
  box12 = new Box(800, 100, 70, 70);
  box13 = new Box(700, 100, 70, 70);
  box14 = new Box(700, 100, 70, 70);
  box15 = new Box(700, 100, 70, 70);
  box16 = new Box(700, 100, 70, 70);
  box17 = new Box(700, 100, 70, 70); 
  box18 = new Box(700, 100, 70, 70);
  box19 = new Box(700, 100, 70, 70);
  box20 = new Box(700, 100, 70, 70); 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  
  rope.display();
  ground.display();

  box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();

hero.display();
monster.display();
 
  function mouseDragged()
  {
  Matter.Body.setPosition(hero.body,{x: mouseX, y: mouseY});
  }
  
}




