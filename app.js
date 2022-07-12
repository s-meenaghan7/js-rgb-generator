const colorBox = document.querySelector('#color-box');

const redSlider = document.querySelector('#red-slider');
const greenSlider = document.querySelector('#green-slider');
const blueSlider = document.querySelector('#blue-slider');

setSliderValues();

const redValue = document.querySelector('#red-value');
const greenValue = document.querySelector('#green-value');
const blueValue = document.querySelector('#blue-value');

setLabelValues();

let redHex = convertToHex(redSlider.value);
let greenHex = convertToHex(greenSlider.value);
let blueHex = convertToHex(blueSlider.value);

const hexValue = document.querySelector('#hex-value');
changeColor();

redSlider.oninput = () => {
    redValue.innerHTML = redSlider.value;
    redHex = convertToHex(redSlider.value);
    changeColor();
}

greenSlider.oninput = () => {
    greenValue.innerHTML = greenSlider.value;
    greenHex = convertToHex(greenSlider.value);
    changeColor();
}

blueSlider.oninput = () => {
    blueValue.innerHTML = blueSlider.value;
    blueHex = convertToHex(blueSlider.value);
    changeColor();
}

function changeColor() {
    hexValue.innerHTML = buildRGBHexVal(redHex, greenHex, blueHex);
    colorBox.style.backgroundColor = hexValue.innerHTML;
}

function buildRGBHexVal(redHex, greenHex, blueHex) {
    return '#' + redHex + greenHex + blueHex;
}

function convertToHex(num) {
    let hexVal = parseInt(num, 10).toString(16);
    if (hexVal.length === 1) {
        hexVal = '0' + hexVal;
    }
    return hexVal;
}

function setSliderValues() {
    redSlider.value = randomValue();
    greenSlider.value = randomValue();
    blueSlider.value = randomValue();
}

function setLabelValues() {
    redValue.innerHTML = redSlider.value;
    greenValue.innerHTML = greenSlider.value;
    blueValue.innerHTML = blueSlider.value;
}

function randomButtonHandler() {
    setSliderValues();
    setLabelValues();
    redHex = convertToHex(redSlider.value);
    greenHex = convertToHex(greenSlider.value);
    blueHex = convertToHex(blueSlider.value);
    changeColor();
}

function randomValue() {
    return Math.round(Math.random() * 255);
}
