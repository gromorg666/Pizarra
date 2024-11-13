let brushSize = 40;
let brushColor = '#000000';
let isEraser = false;

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

// Cambia el color del pincel
function changeColor(color) {
    brushColor = color;
    isEraser = false;
    document.getElementById('erase-button').innerText = 'Borrador';
}

// Alternar entre borrador y pincel
function toggleErase() {
    isEraser = !isEraser;
    brushColor = isEraser ? '#f0f0f0' : '#000000';
    document.getElementById('erase-button').innerText = isEraser ? 'Pincel' : 'Borrador';
}

// Ajustar tamaño del pincel
function changeBrushSize(amount) {
    brushSize = max(10, brushSize + amount); // Tamaño mínimo es 10
}

// Compartir enlace de la página
function shareLink() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('¡Mira este ejemplo con p5.js!');
    const whatsappLink = `https://wa.me/?text=${text}%20${url}`;
    const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    const twitterLink = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;

    const options = `
        <div id="share-options">
            <a href="${whatsappLink}" target="_blank">WhatsApp</a>
            <a href="${facebookLink}" target="_blank">Facebook</a>
            <a href="${twitterLink}" target="_blank">Twitter</a>
        </div>
    `;

    // Si ya existe el elemento de opciones de compartir, lo elimina
    const existingOptions = document.getElementById('share-options');
    if (existingOptions) {
        existingOptions.remove();
    }

    // Agrega el nuevo elemento de opciones de compartir
    document.getElementById('controls').insertAdjacentHTML('beforeend', options);
}