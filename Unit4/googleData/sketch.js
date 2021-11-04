var bubbles = [];
let url = '';
let sp,cd,oo,gb;

function setup() {

  // let key = '1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0'; // this is KEY of the URL from example the sheet


    let key = '1uwNtoUGJavdy17t4SpfI1HGbDft6ldJGNkvLi_VYgtw';


  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1" ;  // here I'm making the string for loadJSON.

  loadJSON(url, gotData);



  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);

    cd = loadImage("assets/cookiedough.png");
      oo = loadImage("assets/oreo.png");
        gb = loadImage("assets/gummyBears.png");
          sp = loadImage("assets/sprinkles.png");

}

// The data comes back as an array of objects

function gotData(data) {

  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
     bubbles.push(new Bubble(data[i]['What is your favorite ice cream flavor?'], data[i]["Which activity do you enjoy most?"], data[i]["Name:"])); // THESE NEED TO MATCH SPREADSHEET

  }

}


function draw() {
  background('black');

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }

}


// my Bubble class
class Bubble {

  constructor(flavor, act, name) { // only the order of these parameters matters!
    this.flavor = flavor;
    this.act = act;
    this.name = name;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(1, 4), 0);




  }


  display() {

    ellipse(this.pos.x, this.pos.y+10, 120,120);


    this.pos.add(this.vel);
    if(this.pos.x>width)this.pos.x =0;

  if(this.name == "anonymous") this.name = "";

  if(this.flavor == "Vanilla") {
    fill("white");
   }
    else if (this.flavor == "Chocolate") {
      fill("#874d1e");
   }
    else if (this.flavor == "Strawberry"){
      fill("pink");
    }else if (this.flavor == "Mint"){
      fill("lightgreen");
    }else{
      fill("purple");
    }

    if(this.act == "Socializing") {
        image(gb,this.pos.x, this.pos.y, 100,100);
     }
      else if (this.act == "Reading books") {
          image(cd,this.pos.x, this.pos.y, 100,100);
     }
      else if (this.act == "Watching TV"){
          image(oo,this.pos.x, this.pos.y,100,100);
      }else if (this.act == "Listening to music"){
          image(sp,this.pos.x, this.pos.y, 100,100);
      }else{
        fill("purple");
      }

      //text(this.name + "\n" + this.flavor + "\n" + this.act, this.pos.x, this.pos.y);

  }
  }
