function Box(x, y, w, h,t){
  this.options = {
    friction:0.4,
    // restitution:1,
    isStatic:true
  }
  this.body = Bodies.rectangle(x,y,w,h,this.options);
  this.pos = this.body.position;
  this.w = w;
  this.h = h;
  this.t = t;
  // if(this.t){
  //   this.body.angle = PI;
  // }
  World.add(engine.world,this.body);
  // console.log(this.body);
  this.show = function(){
    push();
    strokeWeight(1);
    fill(180);
    translate(this.pos.x,this.pos.y);
    rectMode(CENTER);
    // rotate(this.body.angle);
    rect(0,0,this.w,this.h);
    pop();
  }
}
