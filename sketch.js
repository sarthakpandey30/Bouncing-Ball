var ball;
var ball2;


function setup() {
  createCanvas(window.windowWidth, window.windowHeight);
  ball=new Ball(width/2,height/2);
  ball2=new Ball(width/2,height/2);
  ball3=new Ball(width/2,height/2);
}

function draw() {
  background(255);
  ball.update();
  ball.show();
  ball2.show2();
  ball2.update();
  ball3.update();
  ball3.show3();
  
  
}


function Ball(x,y){
  this.pos = createVector(x,y)
  //this.dir=p5.Vector.random2D();
  this.dir =createVector(random(-1,1),random(-1,1));
  this.vel = random(20,30);
  this.r=50;
  
  this.update=function() {
    
  let uPos = p5.Vector.mult(this.dir,this.vel);
    
    
    this.pos.add(uPos);
    
    if(this.pos.x<this.r || this.pos.x>width-this.r)
    {this.dir.x*=-1;}
    if(this.pos.y<this.r || this.pos.y>height-this.r)
    {this.dir.y*=-1;}
}
  this.show2=function() {
stroke(0);
  strokeWeight(10);
  fill(100,40,30);
  ellipse(this.pos.x,this.pos.y,this.r,this.r);
}
  this.show3=function() {
stroke(0);
  strokeWeight(10);
  fill(100,0,30);
  ellipse(this.pos.x,this.pos.y,this.r,this.r);
}
this.show=function() {
stroke(0);
  strokeWeight(10);
  fill(0,50,40);
  ellipse(this.pos.x,this.pos.y,this.r,this.r);
}

}