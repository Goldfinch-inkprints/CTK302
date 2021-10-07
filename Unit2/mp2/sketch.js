let state = 0;
let timer = 0;
let y = 1000;
let x = 200;
let mic;
let vol;
let bg01,bg02,bg03,bg04, state0, state1, Bigpapa;

//CODE FREEZE 9:01pm 10/5/2021

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
bg01 = loadImage("assets/bg01.png") ;
bg02 = loadImage("assets/bg02.png") ;
bg03 = loadImage("assets/bg03.png") ;
bg04 = loadImage("assets/bg04.png") ;
strokeWeight(10);
textSize(25);


}

function draw() {


  switch (state) {
    case 0:

  image(bg01, 0,0);

  break;
case 1:
    image(bg02, 0,0);
  text("Mark is very hungry but he know \nthe best leaves are at the top!\nWait for it.. \nMark has to find the tallest tree", 450, 200);


  image(state0, 100,75);
  timer++;
  if(timer > 8 * 60){
    timer = 0;

    state++;
    if(state > 1){
      state = 2;
    }
  }  break;

case 2:
  image(bg02, 0,0);
  text("Cheer for Mark to help him reach!", 350, 150);
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
  image(bg03, 0,0);
  text("Oh high Mark!", 350, 150);
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
image(bg04, 0,0);



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
