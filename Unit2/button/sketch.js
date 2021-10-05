let state = 0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {

  background(100);
  //fill(255) ;
  //text(mouseX + ", " + mouseY, 50, 50) ;


  switch (state) {

    case 0:
      text("State 0", 300, 100);
      break;

    case 1:
      background("purple");
      text("State 1", 300, 100);

      break;

    case 2:
      background("blue");
      text("State 2", 300, 100);

      break;

  }


  fill('red');
  rect(width / 2, height - 75, 100, 50);
  fill('black');
  text("click me", width / 2 - 20, height - 75 + 5);

}

function mouseReleased() {
  if ((mouseX > width / 2 - 50) && (mouseX < width / 2 + 50) && (mouseY > 300) && (mouseY < 350)) {

    state++;

    if (state > 2) state = 0;
  }

}
