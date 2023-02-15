# lab-3-averyhas
lab-3-averyhas created by GitHub Classroom

The exercise for today's lab (03/15) was to create a custom shape with different elements, and change it in some way by using if-else statements.

The shape I created for my exercise was a star, using beginShape(), endShape(), and vertex(). The end code looked like this:

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
  
I then decided that I would create two if-else commands: one which changed the star, and one which changed the background.
I started with the star, adding code which changed the star from a lighter yellow to a brighter yellow when the mouse was pressed, with the code:
  if (mouseIsPressed) {
    fill("yellow");
  } else {
    fill("lightgoldenrodyellow");
  }
  
I then began adding my if-else statements for the background. I chose to have the background color change from a lighter blue to a dark blue depending 
on how far down the screen theuser's mouse is positioned on its y-axis. For this, I used the code:
    if (mouseY < 100) {
    background("lightskyblue");
  } else if (mouseY >= 100 && mouseY < 200) {
    background("steelblue");
  } else if (mouseY >= 200 && mouseY < 300) {
    background("darkslateblue");
  } else {
    background("midnightblue");
  }

From here, I added by custom functions.
With the star, I added the function addStar. I also used this function to change the positioning and scale of my star, and add more scattered across
the canvas. The function addStar held the code:

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

In order for this function to work, I called it by adding the code addStar(); under the draw function. I called it 6 seperate times, each holding specific
parameters for each star. I also added the pop() and push() commands in order to ensure that the translate and size commands within this function
did not bleed over into any other code.

As for the background, I created the function nightSky -- which held the code:

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

I then called this code under the draw function with nightSky();.
