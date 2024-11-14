let brushSize = 40;
let brushColor = '#000000';
let isEraser = false;

function setup() {
    initializeCanvas();
}

function draw() {
    // Detecta interacción táctil o de ratón
    if (mouseIsPressed || touches.length > 0) {
        drawBrush(mouseX, mouseY);
    }
}

// Inicializa el lienzo
function initializeCanvas() {
    let canvasSize = Math.min(windowWidth * 0.9, 400);
    let canvas = createCanvas(canvasSize, canvasSize);
    canvas.parent('canvas-container');
    background(220);
}

// Dibuja el pincel en la posición indicada
function drawBrush(x, y) {
    fill(brushColor);
    noStroke();
    ellipse(x, y, brushSize, brushSize);
}

// Ajusta el tamaño del lienzo al cambiar de tamaño la ventana
function windowResized() {
    initializeCanvas();
}

// Cambia el color del pincel
function changeColor(color) {
    brushColor = color;
    isEraser = false;
    document.getElementById('erase-button').classList.remove('active');
}

// Alterna entre borrador y pincel
function toggleErase() {
    isEraser = !isEraser;
    brushColor = isEraser ? '#f0f0f0' : '#000000';
    document.getElementById('erase-button').classList.toggle('active', isEraser);
}

// Cambia el tamaño del pincel
function changeBrushSize(amount) {
    brushSize = max(10, brushSize + amount); // Tamaño mínimo es 10
}

// Muestra opciones para compartir el enlace
function shareLink() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('¡Mira este ejemplo con p5.js!');
    const shareOptionsHTML = `
        <div id="share-options">
            <button onclick="closeShareOptions()">Cerrar</button>
            <a href="https://wa.me/?text=${text}%20${url}" target="_blank">WhatsApp</a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=${url}" target="_blank">Facebook</a>
            <a href="https://twitter.com/intent/tweet?text=${text}&url=${url}">Twitter</a>
        </div>
    `;

    // Elimina el menú de compartir existente si está abierto
    const existingOptions = document.getElementById('share-options');
    if (existingOptions) {
        existingOptions.remove();
    }
    document.getElementById('controls').insertAdjacentHTML('beforeend', shareOptionsHTML);
}

// Cierra el menú de opciones para compartir
function closeShareOptions() {
    const shareOptions = document.getElementById('share-options');
    if (shareOptions) shareOptions.remove();
}

// Maneja la interacción táctil para dibujar
function touchStarted() {
    drawBrush(touchX, touchY);
    return false;
}

function touchMoved() {
    drawBrush(touchX, touchY);
    return false;
}