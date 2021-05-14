const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1, box2, box3;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,800,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);
box1=new Box(165,100,30,30);
box2=new Box(170,200,30,30);
box3=new Box(200,300,50,50);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rect(ground.position.x,ground.position.y,800,20);
    box1.display();
    box2.display();
    box3.display();
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}