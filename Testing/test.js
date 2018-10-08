let numberOfStars = 100;
let minSizeOfStars = 1;
let maxSizeOfStars = 10;


let xSpeed = 5;
let ySpeed = 5;

let stars = [];


function setup(){
  createCanvas(innerWidth,innerHeight);
for (let i = 0; i < numberOfStars; i++) {
  let x = random(width);
  let y = random(height);
  let speedFactor = random(0.2, 2);
  let weight = random(minSizeOfStars, maxSizeOfStars);
  stars[i] = new Stars(x,y,speedFactor,weight);
}
}

function draw() {
  background(0);
  for(let i = 0; i < stars.length; i++)
  {
  stars[i].move();
  stars[i].show();
  stars[i].reAppear();
  }
}

class Stars {
  constructor(tempx,tempy,tempspeedFactor,tempweight) {
     this.x = tempx;
     this.y = tempy;
     this.speedFactor = tempspeedFactor;
     this.weight = tempweight;
     this.colorOfStars = "RGB(255,0,255)";
  }
move(){
  this.x =this.x + xSpeed * this.speedFactor;
 this.y =this.y+ ySpeed * this.speedFactor;

}

show(){

//  stroke(floor((random(mouseX))), floor((random(mouseY))), 255,255)
  stroke(this.colorOfStars);
  strokeWeight(this.weight);
  point(this.x,this.y,this.z);
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

}
