var shapes = [];
var stars = [];

function setup() {
  createCanvas(400, 400);
  noStroke();
  for (let y = 35; y < 365; y++) {
    for (let x = 35; x < 365; x++) {
      randomCol = Math.floor(Math.random() * 225);
      var xCoord = Math.floor(Math.random() * ((x+70)- x)) +x;
      var yCoord = Math.floor(Math.random() * ((y+70)- y)) +y;
      shapeType = Math.floor(Math.random() * 3);
     
      if (shapeType == 0) {
        st = new Star(xCoord, yCoord, randomCol);
        shapes.push(st);
        stars.push(st);
      } else {
        shapes.push(new Shape(xCoord, yCoord, randomCol, shapeType));
      }
      x = x + 129;
    }
    y = y + 129;
  }
  
}

function mousePressed() {
  for (var i = 0; i < shapes.length; i++) {
    shapes[i].click();
  }
}

function draw() {
  background(400);
  for (var i = 0; i < shapes.length; i++) {
    shapes[i].display();
  }
  
  let starsGreen = stars.every(allColored => allColored.colored);
  if (starsGreen) {
    shapes = [];
    stars = [];
    goodJob();
    setup();
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function goodJob() {
  let div = createDiv('Good job!');
  div.style('font-size', '30px');
  div.position(135, 160);
  await sleep(500);
  removeElements();

}
    
  

function Shape(x, y, col, shape) {
  this.x = x;
  this.y = y;
  this.col = col;
  this.shape = shape;
  
  this.display = function() {
    fill(this.col);
    if (this.shape == 1) {
      circle(this.x, this.y, 50);
    } else {
       triangle(this.x, this.y - 25, this.x - 25, this.y + 25, this.x + 25, this.y + 25);
    }

  }
  
  this.click = function() { 
    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < 25) {
      this.col = color(255, 0, 0);
    }
  }
}

function Star(x, y, col) {
  this.x = x;
  this.y = y;
  this.col = col;
  this.colored = false;
  
  this.display = function() {
    fill(this.col);
    beginShape();
    vertex(this.x, this.y - 25);
    vertex(this.x + (25/4), this.y - (25/4));
    vertex(this.x + 25, this.y - (25/4));
    vertex(this.x + (25/3), this.y + (25/5));
    vertex(this.x + (25/2), this.y + 25);
    vertex(this.x, this.y + (25/2));
    vertex(this.x - (25/2), this.y + 25);
    vertex(this.x - (25/3), this.y + (25/5));
    vertex(this.x - 25, this.y - (25/4));
    vertex(this.x - (25/4), this.y - (25/4));
    endShape();
  }
  
  this.click = function() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < 25) {
      this.col = color(0, 255, 0);
      this.colored = true;
    }
  }
}

  



