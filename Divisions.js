class Divisions{
  constructor(x, y, w, h) {
      var options = {
        isStatic: true,
      }
      this.x = x;
      this.y = y;
      this.body = Bodies.rectangle(this.x, this.y, w, h, options);
      this.w = w;
      this.h = h;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(this.x, this.y, this.w, this.h);
    }
}
