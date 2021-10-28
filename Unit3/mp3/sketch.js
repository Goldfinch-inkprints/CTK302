let hosts = [];
let axes = [];
let maxAxes = 4;
let maxHosts = 2;
let state = 0;
let timer = 0;
let captured = 0;
let start, play, win, lose, axe, ghost, guy;
let guyPos;
let angle = 0;


function setup() {
  createCanvas(1280, 720);
  angleMode(DEGREES);

  start = loadImage("assets/ghostStart.png");
  play = loadImage("assets/Graveyard.jpg");
  lose = loadImage("assets/ghostLost.png");
  win = loadImage("assets/ghostWon.png");
  ghost = loadImage("assets/ghost.png");
  guy = loadImage("assets/guy.png");
  axe = loadImage("assets/axe.png");



  // Spawn an object
  for (let i = 0; i < maxHosts; i++) {
    hosts.push(new Host());
  }

  for (let i = 0; i < maxAxes; i++) {
    axes.push(new Axe());
  }

  //initialize player position
  guyPos = createVector(width / 2, height - 320);

}

function draw() {
  switch (state) {
    case 0: //welcome

      image(start, 0, 0, 1280, 720);

      break;

    case 1: // game state
      game();
      timer++;
      if (timer > 80 * 60) {
        state = 3;
        timer = 0;
      }

      break;

    case 2: //winning state
      image(win, 0, 0, 1280, 720);

      break;

    case 3: // losing state

      image(lose, 0, 0, 1280, 720);

      break;
  }
}

function mouseReleased() {


  switch (state) {
    case 0:
      // hit box if statement for click here to start
      state = 1;
      break;

    case 2:
      resetGame();
      //state:0
      break;

    case 3:
      resetGame()
      state = 0;
      break;
  }
}

function game() {

  image(play, 0, 0, 1280, 720);
  // you would put background image here


  for (let i = 0; i < axes.length; i++) {
    axes[i].display();
    axes[i].move();

    if (axes[i].pos.dist(guyPos) < 50) {
      state = 3;

    }
  }

 for (let i = 0; i < hosts.length; i++) {
    hosts[i].display();
    hosts[i].move();

    if (hosts[i].pos.dist(guyPos) < 50) {
      hosts.splice(i, 1); //takes out a car
  }
 }


 if (hosts.length == 0) {
    state = 2;
    timer = 0;

  }

  //print how many cars are left
  fill("white");
  textSize(25);
  text("hosts remaining: " + hosts.length, 20, 30);

  //make player
  image(guy, guyPos.x, guyPos.y);
  checkForKeys();
}

function resetGame() {
  timer = 0;
  hosts = [];
  axes = [];
  captured = 0;
  

  // Spawn many object
  for (let i = 0; i < maxHosts; i++) {
    hosts.push(new Host());

    for (let i = 0; i < maxAxes; i++) {
      axes.push(new Axe());

      //initialize position
      guyPos = createVector(width / 2, height - 320);
    }

  }
  state = 0;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) guyPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) guyPos.x += 5;
  if (keyIsDown(UP_ARROW)) guyPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) guyPos.y += 5;

}

// Host class
class Host {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width), random(height - 120));
    this.vel = createVector(random(5), 0);

  }
  // methods
  //scatter the ghosts
  display() {
    image(ghost, this.pos.x, this.pos.y);
  }


  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

class Axe {

  constructor() {
    this.pos = createVector(random(width), random(height - 120));



  }

  display() {
    push();
    rotate(angle);
    image(axe, this.pos.x, this.pos.y);
    angle += .2;
    pop();
  }



  move() {


    if (this.pos.x > width) this.pos.x = 10;
    if (this.pos.x < 10) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 10;
    if (this.pos.y < 10) this.pos.y = height;
  }

}
