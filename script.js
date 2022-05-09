let painting = false;
let lastElement;

function generatePad(size) {
    const pad = document.querySelector(".pad");

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

function randomHexColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function rgb(r, g, b) {
    return "rgb("+r+","+g+","+b+")";
}

function paint(e) {
    if (painting || e.type === "mousedown") e.target.classList.add("col");
}

const switchPaint = () => painting = !painting;
window.addEventListener("mousedown", switchPaint);
window.addEventListener("mouseup", switchPaint);

generatePad(100);
