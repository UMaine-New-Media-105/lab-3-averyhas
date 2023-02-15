// In-Lab Assignment for 03/15, Avery Haskell
function setup() {
  createCanvas(400, 400);
}

// Changes background from lighter blue to darker blue the farther mouseY is down the screen.
function draw() {

  // Calling function #1
  nightSky();
  
  // Calling function #2, Positioning + scaling for the scattered stars.
  addStar(0, 0, 0.25);
  addStar(250, 60, 0.25);
  addStar(120, 130, 0.25);
  addStar(0, 240, 0.25);
  addStar(300, 310, 0.25);
  addStar(180, 280, 0.25);

}

// Custom Function #1 (Sky/Background)
function nightSky() {
  
    if (mouseY < 100) {
    background("lightskyblue");
  } else if (mouseY >= 100 && mouseY < 200) {
    background("steelblue");
  } else if (mouseY >= 200 && mouseY < 300) {
    background("darkslateblue");
  } else {
    background("midnightblue");
  }
  
}

// Custom Function #2 (Shape/Star)
function addStar(x, y, size) {

  // If mouse is pressed, star will change from light yellow to a brighter yellow.
  if (mouseIsPressed) {
    fill("yellow");
  } else {
    fill("lightgoldenrodyellow");
  }

  // Star.
  push();
  translate(x, y);
  scale(size);
  beginShape();
  vertex(200, 40);
  vertex(250, 130);
  vertex(350, 130);
  vertex(270, 200);
  vertex(300, 300);
  vertex(200, 250);
  vertex(100, 300);
  vertex(130, 200);
  vertex(50, 130);
  vertex(150, 130);
  vertex(200, 40);
  endShape();
  pop();
  
}
