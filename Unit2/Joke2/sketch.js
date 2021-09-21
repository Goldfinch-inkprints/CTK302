let state = 0;
let timer = 0 ;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
 textSize(32);



  switch(state){
    case 0:

      text("why are giraffes bad at apologies?", 20,height/2,400, 400);
          break;

    case 1:
    background("yellow");
          text("it takes them awhile to swallow their pride",  20,height/2,400, 400);

          break;


  }

  timer++;

  if(timer > 3 * 60){
    timer = 0;


    state++;
    if(state > 1){
      state = 0;
    }
  }



}
