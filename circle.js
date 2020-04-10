function Circle(x, y, r,s){
  this.options = {
    friction:0.5,
    restitution:0.4,
    isStatic:s,
    mass:0.3,
  }
  this.body = Bodies.circle(x,y,r,this.options);
  this.pos = this.body.position;
  this.r = r;
  World.add(engine.world,this.body);
  // console.log(this.body);
  this.show = function(){
    push();
    strokeWeight(1);
    fill(127);
    translate(this.pos.x,this.pos.y);
    rectMode(CENTER);
    ellipseMode(CENTER);
    ellipseMode(RADIUS);
    rotate(this.body.angle);
    ellipse(0,0,this.r);
    pop();
  }

  this.check = function(){
    var x = this.pos.x;
    var y = this.pos.y;
    if(x > width && y > height || x > width && y < 0 || x < 0 && y > height || x < 0 && y < 0){
      World.remove(world,this.body);
      return true;
    }else{
      return false;
    }
  }
}
