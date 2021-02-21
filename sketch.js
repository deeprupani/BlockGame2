const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon, polygonImage;

function preload() {
    polygonImage = loadImage("polygon.png");
}
function setup() {
    var canvas = createCanvas(1500, 800);

    engine = Engine.create();
    world = engine.world;

    polygon = Bodies.circle(100, 300, 20);
    World.add(world, polygon);

    ground1 = new Ground(800, 600, 450, 10);
    baseground = new Ground(100, 800, 3000, 50);

    block1 = new Block(650, 565, 70, 60, "green");
    block2 = new Block(720, 565, 70, 60, "green");
    block3 = new Block(790, 565, 70, 60, "green");
    block4 = new Block(860, 565, 70, 60, "green");
    block5 = new Block(930, 565, 70, 60, "green");


    block6 = new Block(680, 505, 70, 60, "blue");
    block7 = new Block(750, 505, 70, 60, "blue");
    block8 = new Block(820, 505, 70, 60, "blue");
    block9 = new Block(890, 505, 70, 60, "blue");

    block10 = new Block(710, 445, 70, 60, "pink");
    block11 = new Block(780, 445, 70, 60, "pink");
    block12 = new Block(850, 445, 70, 60, "pink");

    block13 = new Block(740, 385, 70, 60, "orange");
    block14 = new Block(810, 385, 70, 60, "orange");

    block15 = new Block(775, 325, 70, 60, "yellow");
    slingshot = new Slingshot(this.polygon, { x: 100, y: 450 })


}

function draw() {
    background(225)
    Engine.update(engine);

    textSize(48);
    text("Drag  and Release the Polygon to Break The Blocks", 250, 200);

    imageMode(CENTER);
    image(polygonImage, polygon.position.x, polygon.position.y, 50, 40);

    slingshot.display();
    ground1.display();
    baseground.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();

    block6.display();
    block7.display();
    block8.display();
    block9.display();

    block10.display();
    block11.display();
    block12.display();

    block13.display();
    block14.display();

    block15.display();

    detectCollision(polygon, block1);
    detectCollision(polygon, block2);
    detectCollision(polygon, block3);
    detectCollision(polygon, block4);
    detectCollision(polygon, block5);
    detectCollision(polygon, block6);
    detectCollision(polygon, block7);
    detectCollision(polygon, block8);
    detectCollision(polygon, block9);
    detectCollision(polygon, block10);
    detectCollision(polygon, block11);
    detectCollision(polygon, block12);
    detectCollision(polygon, block13);
    detectCollision(polygon, block14);
    detectCollision(polygon, block15);
}

function detectCollision(lpolygon, lblock) {

    blockBodyPosition = lblock.body.position;
    polygonBodyPosition = lpolygon.position;

    var distance = dist(blockBodyPosition.x, blockBodyPosition.y, polygonBodyPosition.x, polygonBodyPosition.y);
    // console.log('distance is', distance, lblock.width, lpolygon.circleRadius);

    // debugger;


    if (distance <= lblock.width + lpolygon.circleRadius) {
        console.log(`dropping...`);
        Matter.Body.setStatic(lblock.body, false)
    }
}

function mouseDragged() {
    Matter.Body.setPosition(this.polygon, { x: mouseX, y: mouseY })
}

function mouseReleased() {
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(this.polygon);
    }
}