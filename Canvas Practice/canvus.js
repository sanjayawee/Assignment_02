let canvas = document.querySelector('canvas'); //serch canvas tag in html document

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

//Rectangle

// for(i=0; i<30; i++){
//   let x = Math.random()*window.innerWidth;
//   let y = Math.random()*window.innerHeight;
//   let r = Math.floor(Math.random()*255);
//   let g = Math.floor(Math.random()*255);
//   let b = Math.floor(Math.random()*255);
//   c.fillStyle = 'rgba('+r+', ' + g + ', ' + b + '0.5)';
//   c.fillRect(x,y,50,50);
//   console.log(r,g,b);
//
// }

//Line
// c.beginPath(); //indicate the canvas we want to strat a path
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.strokeStyle = "blue";
// c.stroke();

// Arc /Circle

// for(let i=0; i < 20; i++){
//   let x = Math.random()* window.innerWidth;
//   let y = Math.random()*window.innerHeight;
//   c.beginPath();
//   c.arc(x,y,30,0, Math.PI*2,false );
//   c.strokeStyle = "red";
//   c.stroke();
//
// }

function Circle(x,y,dx,dy,radius) {// javascrpit Object javaScrpit object indicate Starting with capital letter //passing x argument circle function
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function(){ //method draw anonymous function
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0, Math.PI*2,false );
    c.strokeStyle = "red";
    c.stroke();
    c.fill();
  }

  this.update = function(){
    if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
      this.dx = -this.dx;
    }

    if(this.y + this.radius > innerHeight || this.y - this.radius < 0 ){
      this.dy = -this.dy;
    }
      this.x += this.dx;// each time page refesh add 1 to x...each time call the funtion
      this.y += this.dy;

      this.draw();
    }
  }

  // let x = Math.random() * innerWidth;
  // let y = Math.random() * innerHeight;;
  // let dx = 4;
  // let dy = 4;
  // let radius = 30;

let circleArray = []; //storeing 100 circle in one veriable

  for (let i = 0; i < 100 ; i++) {
    let radius = 30;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = 4;
    let dy = 4;

    circleArray.push(new Circle(x,y,dx,dy,radius));
    //let circle = new Circle(200,200, 3 ,3 , 30) // instantiate an Object // store all the propertise and method within the variable
  }


function animate(){
  requestAnimationFrame(animate); //this function create loop in animate function
  c.clearRect(0,0,innerWidth,innerHeight); //each time we befor call the arc we need to clear the entier canvus

for (let i = 0; i < circleArray.length; i++) {
  circleArray[i].update(); //accesing each element in arry
}

  // c.beginPath();
  // c.arc(x,y,radius,0, Math.PI*2,false );
  // c.strokeStyle = "red";
  // c.stroke();

// if(x + radius > innerWidth || x - radius < 0){
//   dx = -dx;
// }
//
// if(y + radius > innerHeight || y - radius < 0 ){
//   dy = -dy;
// }
//   x += dx;// ech time page refesh add 1 to x...each time call the funtion
//   y += dy;
}

animate(); //this loop work only we call the funcrion
// aniamte work refreshing the page
