class Plinko{
    constructor(x, y) {
        var options = {
          isStatic: true,
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x, y, 10, options);
        this.r = 10;
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        ellipse(this.x, this.y, this.r, this.r);
      }
  }
  