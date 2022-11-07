
  let enter;

  let back;
  let backagain;

  let ex1;
  let ex2;
  let ex3;
  let ex4;
  let ex5;

  let words;

function setup() {
  createCanvas(400, 400);
  
  enter = createButton("Homepage");
  enter.position(160, 200);
  enter.mousePressed(home);
  
  back = createButton("Back");
  back.hide();
  
  backagain = createButton("Back");
  backagain.hide();
  
  ex1 = createButton("Exercise 1");
  ex1.hide();
  ex2 = createButton("Exercise 2");
  ex2.hide();
  ex3 = createButton("Exercise 3");
  ex3.hide();
  ex4 = createButton("Exercise 4");
  ex4.hide();
  ex5 = createButton("Exercise 5");
  ex5.hide();
}

function draw() {
  back.mousePressed(backPressed);
  
  backagain.mousePressed(backToExercises);
  
  ex1.mousePressed(exerciseOne);
  ex2.mousePressed(exerciseTwo);
  ex3.mousePressed(exerciseThree);
  ex4.mousePressed(exerciseFour);
  ex5.mousePressed(exerciseFive);
  
  // Switch statements
}

function home()
{
  createCanvas(400, 400);
  enter.hide(); 
  ex1.show();
  ex1.position(170, 20);
  ex2.show();
  ex2.position(170, 100);
  ex3.show();
  ex3.position(170, 180);
  ex4.show();
  ex4.position(170, 260);
  ex5.show();
  ex5.position(170, 340);
  
  back.show();
  backagain.hide();
}

function hideExercises()
{
  ex1.hide();
  ex2.hide();
  ex3.hide();
  ex4.hide();
  ex5.hide();
}

function backPressed()
{
  createCanvas(400, 400);
  hideExercises();
  enter.show();
  back.hide();
}

function backToExercises()
{
  createCanvas(400, 400)
  home();
}

function exerciseOne()
{
  words = ""
  textSize(20);
  t = text("Exercise 1!", 200, 220);
  hideExercises();
  back.hide();
  backagain.show();
}

function exerciseTwo()
{
  textSize(20);
  t = text("Exercise 2!", 200, 220);
  hideExercises();
  back.hide();
  backagain.show();
}

function exerciseThree()
{
  textSize(20);
  t = text("Exercise 3!", 200, 220);
  hideExercises();
  back.hide();
  backagain.show();
}

function exerciseFour()
{
  textSize(20);
  t = text("Exercise 4!", 200, 220);
  hideExercises();
  back.hide();
  backagain.show();
}

function exerciseFive()
{
  textSize(20);
  t = text("Exercise 5!", 200, 220);
  hideExercises();
  back.hide();
  backagain.show();
}
