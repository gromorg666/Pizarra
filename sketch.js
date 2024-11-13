let brushSize = 40;
let brushColor = '#000000';

function setup() {
    let canvasSize = Math.min(windowWidth * 0.9, 400);
    let canvas = createCanvas(canvasSize, canvasSize);
    canvas.parent('canvas-container');
    background(220);
}

function draw() {
    if (mouseIsPressed || touches.length > 0) {
        fill(brushColor);
        noStroke();
        ellipse(mouseX, mouseY, brushSize, brushSize);
    }
}

function windowResized() {
    let canvasSize = Math.min(windowWidth * 0.9, 400);
    resizeCanvas(canvasSize, canvasSize);
    background(220);
}

// Change brush color
function changeColor(color) {
    brushColor = color;
}

// Erase by setting brush color to background color
function erase() {
    brushColor = '#f0f0f0';
}

// Adjust brush size
function changeBrushSize(amount) {
    brushSize = max(10, brushSize + amount); // Minimum size is 10
}

// Share canvas as an image
function shareCanvas() {
    saveCanvas('myDrawing', 'png');
}