let state = 0;
let timer = 0 ;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(220);




  switch(state){
    case 0:
      background('red');
      text("state 0", 100,100);
       timer++;

  if(timer > 10 * 60){
    timer = 0;


    state++;
    if(state > 2){
      state = 0;
    }
  }
          break;

    case 1:
      background('orange');
          text("state 1", 100,100);
       timer++;

  if(timer > 1 * 60){
    timer = 0;


    state++;
    if(state > 2){
      state = 0;
    }
  }

          break;

    case 2:
      background('green');
          text("state 2", 100,100);
       timer++;

  if(timer > 10 * 60){
    timer = 0;


    state++;
    if(state > 2){
      state = 0;
    }
  }
          break;

  }

  timer++;

  if(timer > 5 * 60){
    timer = 0;


    state++;
    if(state > 2){
      state = 0;
    }
  }



}


function mouseReleased(){
  state++;
}
