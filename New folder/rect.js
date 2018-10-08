class Rect{
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
    strokeWeight(stars[i].weight);
    point(this.x, this.y);
 }

 bounce(){
   if(this.x >= width || this.x <= 0){
     this.dx = -this.dx;
   }
   if (this.y >= height || this.y <= 0) {
     this.dy = -this.dy;
   }

 }
}
