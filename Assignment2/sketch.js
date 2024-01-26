function setup() {
  createCanvas(500, 500);
  drawColorPalette();
}


let colors = [
  '#FF0000', // Red
  '#FFA500', // Orange
  '#FFFF00', // Yellow
  '#00FF00', // Green
  '#00FFFF', // Cyan
  '#0000FF', // Blue
  '#800080', // Purple
  '#A52A2A', // Brown
  '#FFFFFF', // White
  '#000000'  // Black
];

let selectedColor = colors[0]; // Initial selected color
let squareSize = 35;
let isDrawing = false;
let prevX, prevY;



function draw() {
  if (isDrawing) {
    strokeWeight(5); //Thickness of the line
    stroke(color(selectedColor));
    line(prevX, prevY, mouseX, mouseY);
    prevX = mouseX;
    prevY = mouseY;
  }
}

function drawColorPalette() {
  for (let i = 0; i < colors.length; i++) {
    fill(color(colors[i]));
    rect(10, i * squareSize, squareSize, squareSize);
  }
}

function mouseClicked() {
  if (mouseX > 10 && mouseX < squareSize + 10 && mouseY > 0 && mouseY < colors.length * squareSize) {
    let index = Math.floor(mouseY / squareSize);
    selectedColor = colors[index];
  }
}

function mousePressed() {
  if (mouseX > squareSize && mouseX < width && mouseY > 0 && mouseY < height) {
    isDrawing = true;
    prevX = mouseX;
    prevY = mouseY;
  }
}

function mouseReleased() {
  isDrawing = false;
}
