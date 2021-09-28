let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

textSize(32);

  switch (state) {

    case 0:
      background("grey");
      text("  why did the cat \nget a promotion", 60, 200,400,400);
      break;

    case 1:
      background("#90ee90");
      text("he was \n outstanding in his field", 60, 200,400,400);
      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 1) state = 0;

}
