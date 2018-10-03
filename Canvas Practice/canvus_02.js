//search canvas tag in HTML doucment
let canvas = document.querySelector('canvas');

//change the canvus size to windows size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');



let mouse = {
  x: undefined,
  y:undefined
}

//setting up circle Max and Min radius
let maxRadius = 50;
let minRadius = 5;

//Color array for circle colors
let colorArray = ['#FF6B35','#F7C59F','#EFEFD0','#004E89','#1A659E'];

//mouse over EventListener
window.addEventListener('mousemove',function(event){ //event argument
  mouse.x = event.x;
  mouse.y = event.y;
})



let circleArray = [];

for (let i = 0; i < 400; i++) {
   let radius = Math.random()* 3 + 1;
   let x = Math.random()*(innerWidth-radius*2)+radius;
   let y = Math.random()*(innerHeight-radius*2)+radius;
   let dx = Math.random();
   let dy = Math.random();


 circleArray.push(new Circle(x,y,dx,dy,radius));

}


// Circle Object
function Circle(x,y,dx,dy,radius){

  this.x=x;
  this.y=y;
  this.dx=dx;
  this.dy=dy;
  this.radius=radius;
  this.color = colorArray[Math.floor(Math.random()*colorArray.length)];

  //circle draw function
  this.draw = function() {
    c.beginPath();
    c.fillStyle = this.color;
    c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
    c.fill();
  }

  //circle update function
  this.update = function () {
    if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
      this.dx = -this.dx;
    }

    if(this.y + this.radius > innerHeight || this.y - this.radius < 0 ){
      this.dy = -this.dy;
    }
      this.x += this.dx;
      this.y += this.dy;

      //intractivity

      if(mouse.x - this.x <50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
        this.radius += 1;
        if(this.radius < maxRadius){
          this.radius += 1;
        }
      }
      else if(this.radius > minRadius){
        this.radius -= 1;
      }


      this.draw();
    }
  }



function animate(){
  requestAnimationFrame(animate);

  c.clearRect(0,0,innerWidth,innerHeight);
for (let i = 0; i < circleArray.length; i++) {
  circleArray[i].update();
  }
}

animate();
