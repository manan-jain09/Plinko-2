const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2, ground3, ground4, ground5;
var divisionHeight = 150;
var score = 0;
var particle;
var turn = 0;
var gamestate = "play";
var plinkos = [];
var divisions = [];
var particles = [];
var count;


function setup(){
    var canvas = createCanvas(730, 600);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(width / 2, height, width, 10, "brown");
    ground2 = new Ground(width, height / 2, 10, height, "brown");
    ground3 = new Ground(0, height / 2, 10, height, "brown");
    ground4 = new Ground(width / 2, 0, width, 10, "brown");
    ground5 = new Ground(width / 2, height - 10, width - 10, 10, "white");
    
    for (var k = 0; k <= width; k = k + 80) {
        divisions.push(new Divisions(k, height - divisionHeight + 60, 10, divisionHeight));
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
    particles = new Particle(mouseX, 10, 10);
}

function draw(){
    background(0);
    Engine.update(engine);  
    textAlign(CENTER);
    textSize(20);
    fill("white");
    text("500", 40, 470);
    text("500", 120, 470);
    text("500", 200, 470);
    text("200", 280, 470);
    text("200", 360, 470);
    text("200", 440, 470);
    text("100", 520, 470);
    text("100", 600, 470);
    text("100", 680, 470);
    text("TURNS PLAYED: " + turn, 120, 50);
    text("SCORE: " + score , 500, 50);

    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();
    ground5.display();

    if (gamestate === "end") {
        textAlign(CENTER);
        textSize(100);
        fill("white");
        text("GAME OVER", width / 2, height / 2);
    }

    for (var j = 0; j < plinkos.length; j++) {
        plinkos[j].display();
    }

    

   if (particles !== null) {
    particles.display();
       if (particles.body.position.y >= 560) {
           if (particles.body.position.x > 0 && particles.body.position.x < 80) {
               score = score + 500;
               if(turn >= 5){
                gamestate = "end"
                }
                // particles = null;
           }

           if (particles.body.position.x > 80 && particles.body.position.x < 160) {
                score = score + 500;
                if(turn >= 5){
                    gamestate = "end"
               }
            //    particles = null;
            }

            if (particles.body.position.x > 160 && particles.body.position.x < 240) {
                score = score + 500;
                if(turn >= 5){
                    gamestate = "end"
               }
            //    particles = null;
            }

            if (particles.body.position.x > 240 && particles.body.position.x < 320) {
                score = score + 200;
                if(turn >= 5){
                    gamestate = "end"
               }
            //    particles = null;
            }

            if (particles.body.position.x > 320 && particles.body.position.x < 400) {
                score = score + 200;
                if(turn >= 5){
                    gamestate = "end"
               }
            //    particles = null;
            }

            if (particles.body.position.x > 400 && particles.body.position.x < 480) {
                score = score + 200;
                if(turn >= 5){
                    gamestate = "end"
               }
                // particles = null;
            }

            if (particles.body.position.x > 480 && particles.body.position.x < 560) {
                score = score + 100;
                if(turn >= 5){
                    gamestate = "end"
               }
            //    particles = null;
            }
            if (particles.body.position.x > 560 && particles.body.position.x < 640) {
                score = score + 100;
                if(turn >= 5){
                    gamestate = "end"
               }
            //    particles = null;
            }

            if (particles.body.position.x > 640 && particles.body.position.x < 720) {
                score = score + 100;
                if(turn >= 5){
                    gamestate = "end"
               }
            //    particles = null;
            }
            particles = null;
       }
   }

   for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
    }
}
function mousePressed() {
    console.log("Hello");
    if (gamestate !== "end") {
        turn = turn + 1;
        particles = new Particle(mouseX, 10, 10);
    }
}



