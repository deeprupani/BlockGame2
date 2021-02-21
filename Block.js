class Block {
  constructor(x, y, width, height, color) {
    var options = {
      isStatic: true,
      'restitution': 0.8,
      'friction': 1.0,
      'density': 1.0,

    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.visibilty = 255;
    this.width = width;
    this.color = color;
    this.height = height;
    World.add(world, this.body);
  }

  display() {
    // var angle = this.body.angle;
   

    if (this.body.speed < 3) {
      console.log(this.body.speed);
      push();
      translate(this.body.position.x, this.body.position.y);
      //rotate(angle);
      rectMode(CENTER);
      fill(this.color)
      rect(0, 0, this.width, this.height);
      pop();
    }
    else {
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility - 5;
      tint(255, this.visibility);
      pop();
    }
  }
}