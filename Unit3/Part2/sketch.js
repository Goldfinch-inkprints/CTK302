let myCar;
let bg, apple;

let cars = [];

function setup() {
  createCanvas(500, 500);

  // Spawn an object
  bg = loadImage("assets/appletree.jpg");
  apple = loadImage("assets/apple.png");

  myCar = new Car();

  // for(let i = 0; i < 50; i++){
  //   cars.push(new Car());
  // }

}

function draw() {
  image(bg, 0,0,500,500);
  cars.push(new Car());


  for(let i = 0; i < cars.length; i++){
     cars[i].display();
     cars[i].move();

     if(cars[i].a <= 0)
     cars.splice(i,1);
  }

}



// Car class
class Car {

  // constructor and attributes
  constructor() {

    this.pos = createVector(150, -100);
    this.vel = createVector(random(10), random(10));
    this.a = random(200,255);
  }

  // methods

  display() {
    push();
    tint(255, this.a);
    //rect(this.pos.x, this.pos.y, 25, 125);
  //  text("iced coffee", this.pos.x, this.pos.y)
image(apple, this.pos.x, this.pos.y, 50,50);
pop();
  }

  move() {
    this.pos.add(this.vel);
    this.a = this.a -5;
    // if(this.pos.x > width) this.pos.x = 0;
    // if(this.pos.x < 0) this.pos.x = width;
    // if(this.pos.y > height) this.pos.y = 0;
    // if(this.pos.y < 0) this.pos.y = height;
  }
}
