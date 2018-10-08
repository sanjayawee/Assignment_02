let numberOfStars = 180;
let minSizeOfStars = 2;
let maxSizeOfStars = 10;
let COLOURS = ['#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900', '#FF4E50', '#F9D423'];
let easing = 0.05;
let mic;

let stars = [];
let particles = [];
let pool = [];


function setup(){
  createCanvas(innerWidth,innerHeight);
  mic = new p5.AudioIn()
  mic.start();
  colorMode(HSB,1);
  noStroke();

for (let i = 0; i < numberOfStars; i++) {
  let radius = Math.random()* 3 + 1;
  let x = Math.random()*(innerWidth-radius*2)+radius;
  let y = Math.random()*(innerHeight-radius*2)+radius;
  let dx = Math.random();
  let dy = Math.random();
  let speedFactor = random(0.2, 2);
  let weight = random(minSizeOfStars, maxSizeOfStars);
  stars[i] = new Stars(x,y,dx,dy,radius,speedFactor,weight);
}
}

function draw() {
  background(0);
    micLevel = mic.getLevel(.9);
  for(let i = 0; i < stars.length; i++)
  {
  stars[i].move();

  stars[i].show(micLevel);
  stars[i].reAppear();
//  stars[i].mouseIntraction();

  }

}

class Stars {
  constructor(tempx,tempy,tempdx,tempdy,tempradius,tempspeedFactor,tempweight) {
     this.x = tempx;
     this.y = tempy;
     this.speedFactor = tempspeedFactor;
     this.weight = tempweight;
     this.dx = tempdx;
     this.dy = tempdy;
     this.m = random(height/10,height);
     this.c = random();

     this.theta = random(PI);
      this.drag = 0.92;
      this.dx = sin(this.theta);
      this.dy = cos(this.theta);


     this.radius = tempradius;
     this.color = random(COLOURS);
  }

move(){

    this.x += this.dx;
    this.y += this.dy;

}

show(level){

  // stroke(this.color);
  // strokeWeight(this.weight);
  // point(this.x,this.y);

 fill(this.c, 1, 1, 1-level);
  ellipse(this.x, this.y, this.m*level);
}

reAppear(){
  if (this.x >= width + this.weight) {
    this.x = 0 - this.weight;
  } else if (this.x <= 0 - this.weight) {
    this.x = width + this.weight;
  } else if (this.y >= height + this.weight) {
    this.y = 0 - this.weight;
  } else if (this.y <= 0 - this.weight) {
    this.y = height + this.weight;
  }
}

mouseIntraction(){
  if(mouseX - this.x <100 && mouseX - this.x > -100 && mouseY - this.y < 100 && mouseY - this.y > -100){
     let targetX = mouseX;
     let vx = targetX - this.x;
     this.x += vx * easing;

     let targetY = mouseY;
     let vy = targetY - this.y;
     this.y += vy * easing;
     }
}


}
