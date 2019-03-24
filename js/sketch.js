let xSpace = 16;
let w;
let theta = 0.0;
let amplitude = 75.0;
let period = 500.0;
let dx;
let yValues;
var canvas;

function windowResized()
{
	resizeCanvas(windowWidth, windowHeight);
}

function setup()
{
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('z-index', '-1');
	canvas.style('overflow-x', 'hidden');

	
	w = width + 16;
	dx = (TWO_PI / period) * xSpace;
	yValues = new Array(floor (w / xSpace));
}



function draw()
{
	background(255);
  	calcWave();
  	renderWave();

}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.03;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yValues.length; i++) {
    yValues[i] = sin(x) * 100 * 2;
    x += dx;
  }
}

function renderWave() {
  noStroke();
  fill(0,0,255);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yValues.length; x++) {
    ellipse(x * xSpace, height / 2 + yValues[x], 3, 3);
  }
  noStroke();
  fill(0,0,255);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yValues.length; x++) {
    ellipse(x * xSpace, height / 2.1 + yValues[x], 3, 3);
  }
  noStroke();
  fill(0,0,255);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yValues.length; x++) {
    ellipse(x * xSpace, height / 2.2 + yValues[x], 3, 3);
  }
  noStroke();
  fill(0,0,255);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yValues.length; x++) {
    ellipse(x * xSpace, height / 2.3 + yValues[x], 3, 3);
  }
  noStroke();
  fill(0,0,255);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yValues.length; x++) {
    ellipse(x * xSpace, height / 2.4 + yValues[x], 3, 3);
  }
  noStroke();
  fill(0,0,255);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yValues.length; x++) {
    ellipse(x * xSpace, height / 2.5 + yValues[x], 3, 3);
  }
  noStroke();
  fill(0,0,255);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yValues.length; x++) {
    ellipse(x * xSpace, height / 2.6 + yValues[x], 3, 3);
  }
  noStroke();
  fill(0,0,255);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yValues.length; x++) {
    ellipse(x * xSpace, height / 2.7 + yValues[x], 3, 3);
  }
  noStroke();
  fill(0,0,255);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yValues.length; x++) {
    ellipse(x * xSpace, height / 2.8 + yValues[x], 3, 3);
  }
   noStroke();
  fill(0,0,255);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yValues.length; x++) {
    ellipse(x * xSpace, height / 2.9 + yValues[x], 3, 3);
  }

 noStroke();
  fill(0,0,255);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yValues.length; x++) {
    ellipse(x * xSpace, height / 3 + yValues[x], 3, 3);
  }

	 }
	 









