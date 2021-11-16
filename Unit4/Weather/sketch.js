// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var y = 0;
var windspeed = 0 ;
var temp = 0 ;
var humidity = 0 ;
var thermo;


function setup() {
  createCanvas(400, 400);

  thermo = loadImage("assets/thermo.png");


  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Nokomis,IL,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=340124ea09f04857ea7921ec08608c3a'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString ;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temp = weather.main.temp;

}


function draw() {

  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:

    background("white");
      image(thermo, 0,0,400,435);
      fill('black');
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed, 20, 40);
      text("temperature is " + temp, 20, 60);
      text("humidity is " + humidity, 20, 80);



      // temp
      fill('red');
      noStroke();
      rect(182, 375, 35, -y);
      ellipse(200,370,55,55);

      // cloud
           fill('gray');
           noStroke();
           ellipse(x, 175, 200, 100);
            ellipse(x, 125, 100, 100);
            ellipse(x-100, 150, 150, 100);

      // move the cloud's x position
      x = x + windspeed/3;
      if (x > width) x = 0;

      // move the cloud's x position
      y = temp * 4;
      if (y > height) y = 0;

      break;

  }
}
