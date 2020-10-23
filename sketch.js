const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2, grounr3, ground4, ground5;
var divisionHeight = 300;
var particles = [];
var plinkos = [];
var divisions = [];


function setup(){
    var canvas = createCanvas(480, 800);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(width / 2, height, width, 10, "brown");
    ground2 = new Ground(width, height / 2, 10, height, "brown");
    ground3 = new Ground(0, height / 2, 10, height, "brown");
    ground4 = new Ground(width / 2, 0, width, 10, "brown");
    ground5 = new Ground(width / 2, height - 10, width - 10, 10, "white");
    
    

}

function draw(){
    background(0);
    Engine.update(engine);  
    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();
    ground5.display();
    for (var k = 0; k <= width; k = k + 80) {
        divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
        
    }
    for (var j = 40; j <=  width; j = j + 50) {
        plinkos.push(new Plinko(j, 75));
    }
    for (var j = 15; j <=  width - 10; j = j + 50) {
        plinkos.push(new Plinko(j, 175));
    }
    for (var j = 15; j <=  width; j = j + 50) {
        plinkos.push(new Plinko(j, 275));
    }
    for (var j = 40; j <=  width; j = j + 50) {
        plinkos.push(new Plinko(j, 375));
    }
    for (var j = 15; j <=  width; j = j + 50) {
        plinkos.push(new Plinko(j, 475));
    }
    for (var j = 40; j <=  width; j = j + 50) {
        plinkos.push(new Plinko(j, 575));
    }
    if (frameCount % 60 === 0) {
        particles.push(new Particle(random(width / 2 - 10, width / 2 + 10), 10, 10));
    }

    for (var p = 0; p < particles.length; p++) {
        particles[p].display();
        
    }
    for (var k = 0; k < divisions.length; k++) {
        divisions[k].display();
        
    }
    for (var j = 0; j < plinkos.length; j++) {
        plinkos[j].display();
        
    }
}