var engine, world;
var platform1, platform2;
var bird, slingShot;
var box1, box_1;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    points = 0;

    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(670, 300, 350, 10);
    //platform2 = new Ground(1000, 240, 300, 10);
    
    //platform1
    //bottom base
    box1 = new Box(580,275,30,40);
    box2 = new Box(610,275,30,40);
    box3 = new Box(640,275,30,40);
    box4 = new Box(670,275,30,40);
    box5 = new Box(700,275,30,40);
    box6 = new Box(730,275,30,40); 
    
    //lower-middle base
    box7 = new Box(610,235,30,40);
    box8 = new Box(640,235,30,40);
    box9 = new Box(670,235,30,40);
    box10 = new Box(700,235,30,40);
    
    //higher-middle base
    box11 = new Box(640,195,30,40);
    box12 = new Box(670,195,30,40);
  
    //high base
    box13 = new Box(655,155,30,40);

/*    //platform2
    //bottom base
    box_1 = new Box(900,195,30,40);
    box_2 = new Box(930,195,30,40);
    box_3 = new Box(960,195,30,40);
    box_4 = new Box(990,195,30,40);
    box_5 = new Box(1020,195,30,40);
    box_6 = new Box(1050,195,30,40); 

    //lower-middle base
    box_7 = new Box(930,155,30,40);
    box_8 = new Box(960,155,30,40);
    box_9 = new Box(990,155,30,40);
    box_10 = new Box(1020,155,30,40);

    //higher-middle base
    box_11 = new Box(960,115,30,40);
    box_12 = new Box(990,115,30,40);

    //high base
    box_13 = new Box(975,75,30,40);
*/
// Pentagon character
    bird = new Pentagon(200,50,45,45);

    
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(255);
    Engine.update(engine);
    //platform 1
    fill("black");
    text("score:"+points,width-300, 50);

    fill("blue");
    box1.display();
    box1.score();

    box2.display();   
    box2.score();

    box3.display();
    box3.score();

    box4.display();
    box4.score();

    box5.display();
    box5.score();

    fill("red");
    box6.display();
    box6.score();

    box7.display();
    box7.score();

    box8.display();
    box8.score();

    box9.display();
    box9.score();

    box10.display();
    box10.score();

    fill("green");
    box11.display();
    box11.score();

    box12.display();
    box12.score();

    box13.display();
    box13.score();


    //bird
    bird.display();
    
    ground.display();
    platform1.display();
  //  platform2.display();
 
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}