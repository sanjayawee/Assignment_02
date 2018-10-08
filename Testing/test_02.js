let ball1 = [];
//let rec;
let numerofBalls = 400;
let colorArray = ['#FF6B35','#F7C59F','#EFEFD0','#004E89','#1A659E'];
let easing = 0.5;
let radius = Math.random()* 3 + 1;

function setup(){
  createCanvas(600,600);



  for(let i = 0; i <= numerofBalls; i++){
    let x = random(width);
    let y = random(height);
    let r = random(5,10);
    let dx = random(2,3)*0.5;
    let dy = random(2,3)*0.5;
    ball1[i] = new Ball(x,y,r,dx,dy);

  }

  //rec = new Rect(300,300,10,2,5);
}

function draw() {
background(0);
   for(let i = 0; i < ball1.length; i++)
   {
      ball1[i].move();
      ball1[i].show();
    //  ball1[i].bounce();
    //  ball1[i].fallowMe();
  }
//rec.move();
//rec.show();
//rec.bounce();


}

class Ball{
  constructor(tempX,tempY,tempR,tempdx,tempdy){
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
    this.dx = tempdx;
    this.dy = tempdy;
  }

  move() {
   this.x = this.x + this.dx;
   this.y = this.y + this.dy;
 }
 show() {
   fill(255,0,255);
   ellipse(this.x,this.y,this.r,this.r);
 }

 // bounce(){
 //   if(this.x >= width || this.x <= 0){
 //     this.dx = -this.dx;
 //   }
 //   if (this.y >= height || this.y <= 0) {
 //     this.dy = -this.dy;
 //   }
 //}

//  fallowMe(){
//    if(mouseX - this.x <50 && mouseX - this.x > -50 && mouseY - this.y < 50 && mouseY - this.y > -50){
//     let targetX = mouseX;
//     let dx = targetX - this.x;
//     this.x += dx * easing;
//
//     let targetY = mouseY;
//     let dy = targetY - this.y;
//     this.y += dy * easing;
//   }
// }

reAppear(){
// make star reappear if pushed beyond canvas
if (ball1[i].x >= width + stars[i].weight) {
  stars[i].x = 0 - stars[i].weight;
} else if (stars[i].x <= 0 - stars[i].weight) {
  stars[i].x = width + stars[i].weight;
} else if (stars[i].y >= height + stars[i].weight) {
  stars[i].y = 0 - stars[i].weight;
} else if (stars[i].y <= 0 - stars[i].weight) {
  stars[i].y = height + stars[i].weight;
}

// change star position
stars[i].x = stars[i].x + xSpeed * stars[i].speedFactor;
stars[i].y = stars[i].y + ySpeed * stars[i].speedFactor;
}

}
