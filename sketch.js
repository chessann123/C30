const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var ground;
var boxes=[];
var polyimage;

function preload(){
    polyimage = loadImage("polygon.png");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = Bodies.circle(50, 200, 20);
    World.add(world, box1);
    slingshot = new Slingshot (this.box1, {x:100, y:200});

    ground = new Ground(600,390,1200,20);

    stand1 = new Ground (390, 300, 250, 10);
    stand2 = new Ground (700, 200, 200, 10);

    for(var I = 300; I<481; I=I+30){
        boxes.push(new Box (I, 275, 30, 40, "lightblue"));
    }

    for(var I = 330; I<451; I=I+30){
        boxes.push(new Box (I, 235, 30, 40, "pink"));
    }

    for(var I = 360; I<421; I=I+30){
        boxes.push(new Box (I, 195, 30, 40, "lightyellow"));
    }

    for(var I = 390; I<391; I=I+30){
        boxes.push(new Box (I, 155, 30, 40, "red"));
    }

    for(var I = 640; I<761; I=I+30){
        boxes.push(new Box (I, 175, 30, 40, "green"));
    }

    for(var I = 670; I<731; I=I+30){
        boxes.push(new Box (I, 135, 30, 40, "blue"));
    }

    for(var I = 700; I<701; I=I+30){
        boxes.push(new Box (I, 95, 30, 40, "violet"));
    }


}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();

    for(var I=0; I<boxes.length; I++){
        boxes[I].display();
    }
    stand1.display();
    stand2.display();

    imageMode (CENTER);
    image (polyimage, box1.position.x, box1.position.y, 40, 40);
    slingshot.display();
   
}

function mouseDragged (){
    Matter.Body.setPosition(this.box1,{x:mouseX, y:mouseY});
}

function mouseReleased (){
    slingshot.fly();
}

function keyPressed (){
    if (keyCode==32){
        slingshot.attach(this.box1);
    }
}