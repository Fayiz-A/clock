let clock;

function setup() {
  createCanvas(displayWidth,displayHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  let sc = second();
  let mn = minute();
  let hr = hour();

  push();
  translate(displayWidth/2, displayHeight/2);
  rotate(-90);

  //displays current time
  push();
  textSize(30);
  fill('white');
  rotate(90);
  text(hr + ':' + mn + ':' + sc, 0, -400);
  pop();

  push();

  noFill();
  strokeWeight(12);

  //logic for converting the time measurements into circle measurements
  let seconds = map(sc, 0, 60, 0, 360);
  stroke(255, 100, 150);
  arc(0, 0, 380, 380, 0, seconds);

  let minutes = map(mn, 0, 60, 0, 360);
  stroke(150,100,255);
  arc(0, 0, 420, 420, 0, minutes);

  let hours = map(hr%12, 0, 12, 0, 360);
  stroke(150, 255, 100);
  arc(0, 0, 460, 460, 0, hours);
  
  pop();

  //seconds hand
  push();

  rotate(seconds);
  stroke(255, 100, 150);
  strokeWeight(10);
  line(0, 0, 135, 0);
  
  pop();

  //minute hand
  push();

  rotate(minutes);
  stroke(150,100,255);
  strokeWeight(10);
  line(0, 0, 170, 0);
  pop();
  
  //hour hand
  push();

  rotate(hours);
  stroke(150, 255, 100);
  strokeWeight(10);
  line(0, 0, 100, 0);
  pop();

  //circle in the middle
  strokeWeight(12);
  stroke(255);
  point(0, 0);

  pop();
}

// function setup() {
//   createCanvas(400, 400);
//   angleMode(DEGREES);
// }

// function draw() {
//   background(0);
//   translate(200, 200);
//   rotate(-90);

//   let hr = hour();
//   let mn = minute();
//   let sc = second();

//   strokeWeight(8);
//   stroke(255, 100, 150);
//   noFill();
//   let secondAngle = map(sc, 0, 60, 0, 360);
//   arc(0, 0, 300, 300, 0, secondAngle);

//   stroke(150, 100, 255);
//   let minuteAngle = map(mn, 0, 60, 0, 360);
//   arc(0, 0, 280, 280, 0, minuteAngle);

//   stroke(150, 255, 100);
//   let hourAngle = map(hr % 12, 0, 12, 0, 360);
//   arc(0, 0, 260, 260, 0, hourAngle);

//   push();
//   rotate(secondAngle);
//   stroke(255, 100, 150);
//   line(0, 0, 100, 0);
//   pop();

//   push();
//   rotate(minuteAngle);
//   stroke(150, 100, 255);
//   line(0, 0, 75, 0);
//   pop();

//   push();
//   rotate(hourAngle);
//   stroke(150, 255, 100);
//   line(0, 0, 50, 0);
//   pop();

//   stroke(255);
//   point(0, 0);

//   //  fill(255);
//   //  noStroke();
//   //  text(hr + ':' + mn + ':' + sc, 10, 200);
// }