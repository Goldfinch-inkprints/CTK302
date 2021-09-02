var font1;

function setup() {
  createCanvas(500, 500);
  font1=loadFont("assets/RoseVelt.ttf")
}

function draw() {
background("white");
textFont(font1, 48);
text("hello world",100,100);
}
