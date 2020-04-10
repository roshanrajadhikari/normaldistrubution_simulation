var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;
  var engine;
  var world;
  var ground;
  var circles = [];
  var bars = [];
  var pins = [];
  var frame = 0;
function setup() {
  createCanvas(700,700);
  engine = Engine.create();
  world = engine.world;
  var barHeight = 200;
  var barWidth = 8;
  var totalBars = 10;
  var barGap = width/totalBars;
  ground = new Box(width/2,height-barWidth/2,width,barWidth);
  for(var i = 0;i<totalBars;i++){
    bars.push(new Box((barWidth/2+i*barGap),height - barHeight/2,barWidth,barHeight,false));
  }
  // bars.push(new Box(width/3,30,180,barWidth,true));

  for(var i = 0;i<totalBars - 2;i++){
    for(var j = 0;j<totalBars-i;j++){
      pins.push(new Circle(40 + j*barGap + i*barGap/2,height-barHeight - barGap + 25 - i*40,10,true));
    }
  }
  Engine.run(engine);
  dropBalls();
}

function draw() {
  frame++;
  background(51);
  ground.show();
  for(var i = 0;i<circles.length;i++){
    circles[i].show();
    if(circles[i].check()){
      circles.splice(i,1);
    }
  }
  for(var i = 0;i<bars.length;i++){
    bars[i].show();
  }
  for(var i = 0;i<pins.length;i++){
    pins[i].show();
  }
  if(frame % 3 == 0){
    if(circles.length < 230){
      dropBalls();
    }
  }
}

// function mousePressed(){
//   circles.push(new Circle(mouseX,mouseY,8));
// }

function dropBalls(){
    circles.push(new Circle(random(width/4,width/2 + width/4),0,8));

}
