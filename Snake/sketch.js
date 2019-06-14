let snake;
let rez = 10;
let food;
let w;
let h;
let paused = false;

function setup() {
  createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez)
  frameRate(10);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (key == 'p'){
    if (!paused){
      frameRate(0);
      print("PAUSED");
      paused = true;
    } else {
      paused = false;
      print("UNPAUSED");

      frameRate(10)
    }
  }
}

function draw() {
  scale(rez);
  background(220);
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();

  if (snake.endGame()) {
    print("Your Score was: " + snake.score)
    print("GAME OVER!");
    snake.score = 0;
    setTimeout(background(255, 0, 0), 3000);
    print("RESETTING");
    setup();

  }
    
    noStroke();
    fill(255, 0, 0);
    rect(food.x, food.y, 1, 1);
  }