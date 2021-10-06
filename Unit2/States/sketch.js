let state = 0;
let timer = 0 ;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  switch(state){

    case 0:
      background('red');

      noStroke();
      fill(255, 100);
       for(let j = 0; j <= height; j+= 20){
    for (var i = 0; i <= width; i += 20){
      rect(i,j,5,15);
    }

  }

          break;

    case 1:
      background('orange');
      stroke("black");
          text("state 1", 100,500);
        for(let i = 0; i < width; i+=10){

    line(i, 0, i, i);
          //https://editor.p5js.org/aferriss/sketches/SJweMnHYf

  }

          break;

    case 2:
      background('black');
         for (var x = 0; x <= mouseX; x += 50) {
    for (var y = 0; y <= mouseY; y += 50) {
      stroke(x, y, y);
  		strokeWeight(5);
      fill(x, y, 255);
      ellipse(x, y, 40, 40);
    }
         }
      //https://editor.p5js.org/fergfluff/sketches/SyqNDuBjW
          break;

    case 3:
      background('blue');
           stroke(255);

  for (let lineX = 75; lineX <= 225; lineX += 75) {
    line(lineX, 0, lineX, height);
  }
      //https://happycoding.io/tutorials/p5js/for-loops
          break;

    case 4:
      background('purple');
        for(let j = 0; j <= height; j+= 50){
    for (var p = 0; p <= width; p += 50){
      text("wow",p,j);
    }

  }

          break;
  }

  if (state> 4){
    state = 0;
  }


}


function mouseReleased(){
  state++;
}
