let state = 0;
let timer = 0;
let y = 1000;
let x = 200;
let mic;
let vol;
let leaf, state0, state1, Bigpapa;

function setup() {
  createCanvas(800, 750);
textSize(20);
textAlign (CENTER);
rectMode (CENTER);
mic = new p5.AudioIn();
mic.start();
leaf = loadImage("assets/leaf.png") ;
state0 = loadImage("assets/state0.png") ;
state1 = loadImage("assets/state1.png") ;
Bigpapa = loadImage("assets/Bigpapa.png") ;
strokeWeight(10);
textSize(25);


}

function draw() {


  switch (state) {
    case 0:
  background('pink');
  text("Click to begin!", 400, 750/2);
  text ("Let's help Mark reach his lunch!", 400, 750/2+50);
  break;
case 1:
  background ('lightblue');
  text("Mark is very hungry but he know \nthe best leaves are at the top!\nWait for it.. \nMark has to find the tallest tree", 550, 200);
  image(state0, 200,75);
  timer++;
  if(timer > 3 * 60){
    timer = 0;

    state++;
    if(state > 1){
      state = 2;
    }
  }  break;

case 2:
  background('lightblue');
  text("Cheer for Mark to help him reach!", 350, 750/2);
    vol = (mic.getLevel().toFixed(2));
    image(Bigpapa, x,y);
  if (vol > .001) {
    y = y + -5;
    if (y < -400){
      state = state + 1;
      y = 800;
    }
  }

  break;

case 3:
  background ("lightgreen");
  text("Oh high Mark!", 350, 750/2);
    vol = (mic.getLevel().toFixed(2));
    image(Bigpapa, x,y);
  if (vol > .01) {
    y = y + -5;
    if (y < -400){
      state = state + 1;
      y = 0;
    }
  }

  break;

case 4:
background ("lightgreen");
text ("You helped Mark get a tasty lunch! \nGreat Job!", 350, 150);
image(leaf, 250,200);

break;

}



  //fill('white');
  //text(mouseX + ", " + mouseY, 100, 100);
}

function mouseReleased() {
  if ((state == 0) && (mouseX > 10) && (mouseX < 800) && (mouseY > 100) && (mouseY < 800)) {
    state = 1;

  }
}

function touchStarted() {
  getAudioContext().resume();
}
