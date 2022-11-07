function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0)
  noStroke()
  background('white')
  circle(350,250,100)
  fill('red')
  textSize(16);
  if (mouseIsPressed == false) {
   text('click on the circle to change their colors to blue', 50, 100) 
  } else {
    fill('blue')
    text ('hold mouse', 50, 150)
  }
  circle(150,250,100)
   fill('red')

for (step = 0; step<3; step++) {
 setTimeout(() => {
  if (mouseIsPressed == true) {
    fill('teal') // keep this
  }
    else {
      fill('red')
    }
 }, 1000) //end looping red and make sure it stays teal/blue. might be problem with blueteal
}
}