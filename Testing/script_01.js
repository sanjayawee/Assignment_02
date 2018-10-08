/* letiables for individualisation */
let numberOfStars = 80;
let maxSpeed = 8;
let colorOfSky = "rgb(10,15,30)";
let colorOfStars = 255;
let minSizeOfStars = 1;
let maxSizeOfStars = 10;
let direction = -1; // "1": stars follow mouse OR "-1": stars are repelled by mouse

/* setting up other letiables */
let xSpeed;
let ySpeed;

/* setting up array */
let stars = [];

function setup(){
// executed once
  createCanvas(windowWidth, windowHeight); // canvas setup

  // create stars with random coordinates
  for(let i = 0; i <= numberOfStars; i++){
    let x = random(width);
    let y = random(height);
    let speedFactor = random(0.2, 2); // setup a range of possible speeds
    let weight = random(minSizeOfStars, maxSizeOfStars);

    stars[i] = {x, y, speedFactor, weight}; // push stars to array
  }
}

function draw(){
// executed all the time
  background(colorOfSky); // setup background color
  stroke(colorOfStars); // setup star color

  for(let i = 0; i < stars.length; i++) {
    // setup colors
   strokeWeight(stars[i].weight);
    point(stars[i].x, stars[i].y);

    // map mouse position to star speed and direction
    xSpeed = map(mouseX, 0, width, -maxSpeed*direction, maxSpeed*direction);
    ySpeed = map(mouseY, 0, height, -maxSpeed*direction, maxSpeed*direction);

    // make star reappear if pushed beyond canvas
    if (stars[i].x >= width + stars[i].weight) {
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
  //  stars[i].y = stars[i].y + ySpeed * stars[i].speedFactor;
  }
}

function windowResized(){
// executed on window resize
  resizeCanvas(windowWidth, windowHeight);
}
