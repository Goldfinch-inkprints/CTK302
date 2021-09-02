var font1, font2;

function setup() {
  createCanvas(1920, 1080);
  font1=loadFont("assets/RoseVelt.ttf");
  font2 = loadFont("assets/ROMANUS.otf");
}

function draw() {
background("white");
textFont(font1, 48);
text("hello world",100,100);

textFont(font2, 30);

text("Rome wasn't built in a day.",100,250);

}
