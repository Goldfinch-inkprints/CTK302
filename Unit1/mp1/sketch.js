function setup() {
  createCanvas(1000, 800);


}



function draw() {





  if (mouseIsPressed) {
    background("#5f38a1");
  fill("red");
   quad(0,87,534,165,723,450,0,460);




    noStroke();

    fill("gray");
    quad(126,165,470,187,624,408,128,419);
     fill("#d4a933");
    circle(275,375,100);
    circle(300,500,300);
    triangle(219,328,252,319,224,342);
    triangle(279,313,321,324,315,333);


       fill("red");
    rect(0,400,1000,300);

    fill("#d4a933");
     triangle(272,397,284,476,310,397);


    fill("black");
    ellipse(50,720,200,200);
    ellipse(650,720,200,200);

    fill("#deca5b");
    text("The sounds of the road put him to sleep at night.", 40, 40);


  } else {
    // when the mouse isn't pressed!
      background("#42cbf5");
    fill("red");
   quad(0,87,534,165,723,450,0,460);
     rect(0,430,1000,300);

    fill("black");
    ellipse(50,720,200,200);
    ellipse(650,720,200,200);

  fill("#2290c7");
 quad(126,165,470,187,624,408,128,419);


  fill(163, 163, 163);
 quad(126,417,620,405,624,432,125,441);

   noStroke();

  fill("pink");
  ellipse(235, 284, 25, 80);

    fill("#cfb527");
   rect(225, 178, 30, 55);
  rect(297, 180, 20, 55);


  fill("#deca5b");
  quad(242,232,306,282,225,440,330,441);
  circle(270, 250, 100);
  rect(190, 250, 100, 45);
  ellipse(332,470,40,70);
      ellipse(250,470,40,70);


  fill("#deca5b");
  triangle(206, 175, 258, 176, 222, 213);
  triangle(330, 177, 328, 199, 293, 182);

   fill("black");
  rect(190, 250, 20, 20);


  strokeWeight(2);
  stroke(20);
  fill("white");
  circle(247,237,20);
  circle(283,245,20);

  noStroke();
  fill("black");
  circle(249,239,10);
  circle(280,246,10);

    text("This is Ruffles, he likes to go on road trips to new places.", 40, 40);

    //



  }



  // this shows mouse location - comment it out when you're done!

 // fill(0);
  //text(mouseX + ", " + mouseY, 40, 40);



}


// record the mouse location in console when clicked
//function mouseReleased() {
  //print(mouseX + ", " + mouseY);
//}

//TimeLog
// 3 hours constructing
// 1 hour looking at p5j reference and understanding
// 4 hours all together










// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
