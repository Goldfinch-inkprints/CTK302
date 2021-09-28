var mic;
var vol;
var c = 'green';
let x = 0 ;
let frog;
let fly;

function setup() {
  createCanvas(400, 400);
  frog = loadImage("assets/frog.jpg") ;
  fly = loadImage("assets/fly.jpg") ;

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
}


function draw() {
  background(c);

  // get the sound input
  vol = (mic.getLevel().toFixed(2)); // returned level is between 0 and 1

  // check how loud the input is
  if (vol > .20) { // if the volume is LOUD?
    // do something

    c = color(random(255), random(255), random(255)); // here I'm setting the background to a random color
  }

  // extra stuff for debugging
  textSize(18);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);

  image(frog, vol * 100, 200, 50, 50);

  image(fly, vol * 600, 300, 50, 50);

// x = map(vol, 0, .2, 0, width) ;
//image(x, 200, 50, 50);

}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
