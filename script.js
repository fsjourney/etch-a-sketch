let painting = false;
let lastElement;
const pad = document.querySelector(".pad");

function generatePad(size) {
    for (let row, i = size; i > 0; i--) {
        row = document.createElement("div");
        row.classList.add("row", "grow");

        for (let element, j = size; j > 0; j--) {
            element = document.createElement("div");
            element.classList.add("unit", "grow");
            element.addEventListener("mouseenter", paint);
            element.addEventListener("mousedown", paint);
            row.appendChild(element);
        }

        pad.appendChild(row);
    }
}

function removePad() {
    while (pad.childNodes.length) {
        let row = pad.firstChild;
        row.childNodes.forEach(element => {
            element.removeEventListener("mouseenter", paint);
            element.removeEventListener("mousedown", paint);
        });
        pad.removeChild(row);
    }
}

function randomHexColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function rgb(r, g, b) {
    return "rgb("+r+","+g+","+b+")";
}

function paint(e) {
    if (painting || e.type === "mousedown") e.target.classList.add("col");
}

function inputPad() {
    let size;
    while (isNaN(size) || size < 1) {
        size = +window.prompt("Input grid size:", "ex: 60");
    }
    removePad();
    generatePad(+size);
}

const switchPaint = () => painting = !painting;
window.addEventListener("mousedown", switchPaint);
window.addEventListener("mouseup", switchPaint);

generatePad(100);
