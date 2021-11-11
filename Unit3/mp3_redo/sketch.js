var cars = [];
var frogPos;
var myState = 0;
var timer = 0;
var ghosts = [];
var start,won,lost,bg,ghost;
var axe1, axe2;
var player;
var x = 0;


function setup() {
    createCanvas(1280, 720);

  start = loadImage("assets/ghostStart.png");
  lost = loadImage("assets/ghostLost.png");
  won = loadImage("assets/ghostWon.png")
  bg = loadImage("assets/Graveyard.jpg");
  player = loadImage("assets/guy.png");


  ghost = loadImage("assets/ghost.png");
  ghost[0] = loadImage("assets/ghost.png");
  ghost[1] = loadImage("assets/ghost.png");
  ghost[2] = loadImage("assets/ghost.png");


  hound1= loadImage("assets/axe.png");
  hound2 = loadImage("assets/axe.png");

  //spawn cars
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
}

function draw() {

  switch (myState) {

    case 0:
     song1.play();
      myState = 1
      break;

    case 1: // splash screen
      image(start, width / 2, height / 2);
      x +=5;
        if (x > 800) {
          x = 0;
        }
      break;

    case 2: // the game state
      game();
      timer++;
      if (timer > 600) {
        myState = 5;
        timer = 0;
      }
      break;

    case 3:
      myState = 4
      break;

    case 4: // the win state
      image(won, width / 2, height / 2);
      break;

    case 5:
      myState = 6
      break;

    case 6:
      myState = 7
      break;

    case 7: // the lose state
       if (myState == 6){
      }
      image(losepic, width / 2, height / 2);
      fill('white');
      text('You Lost', 60, 700);
      break;
  }


}

function mouseReleased() {
  switch (myState) {
    case 1:
      myState = 2;
      break;

    case 4: //the win state
      resetTheGame();
      myState = 0;
      break;

    case 7: //the lose state
      resetTheGame();
      myState = 0;
      break;
  }

}


// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.birdNum = floor(random(ghosts.length - 1));
  this.timer = 0;
  this.maxTimer = random(10, 30);
  this.type = random(1);
  if (this.type < 0.5){
    bottlesLeft++;
  }

  // methods
  this.display = function() {

    if (this.type > 0.5){
    image(hound1, this.pos.x, this.pos.y, 100, 100) ;
  } else {
    image(birds[this.birdNum], this.pos.x, this.pos.y, 100, 100);
  }



    this.timer++;
    if (this.timer > 20) {
      this.birdNum = this.birdNum + 1;
      this.timer = 0;

    }

    //dont go past the array
    if (this.birdNum > 2) {
      this.birdNum = 0;
    }
  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}


function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;
}

function game() {
  image(bg, width / 2, height / 2);
  for (var i = 0; i < cars.length; i++) {
    ghosts[i].display();
    ghosts[i].drive();
    if (ghosts[i].pos.dist(frogPos) < 50) {
      if (ghosts[i].type > 0.5){
        myState = 5;
      } else{
          ghosts.splice(i, 1);
          bottlesLeft--;
      }

    }
  }


if (bottlesLeft ==0) {
    myState = 3;
  }

  image(player, frogPos.x, frogPos.y, 120, 120);
  checkForKeys();
}

function resetTheGame() {
  ghost = [];
  bottlesLeft = 0;
  for (var i = 0; i < 5; i++) {
    ghost.push(new ghost());
  }

  timer = 0;
}
