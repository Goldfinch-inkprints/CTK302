let cookimg, plantsimg, totoroimg;




function setup() {
  createCanvas(500, 500);
  imageMode(CENTER);
  cookimg = loadImage("assets/cooking.jpg") ;
  plantsimg = loadImage("assets/plants.jpg") ;
  totoroimg = loadImage("assets/totoro.jpg") ;
}

function draw() {
  background("green");

  image(cookimg, width/2, height/2,100,100);
  image(plantsimg, width/2, height/2-120,100,100);
  image(totoroimg, width/2, height/2+120,100,100);

}
