const button = document.querySelector(".button");
const body = document.querySelector("body");
const title = document.querySelector(".color");

const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}
const generateColorArray = (size) => {
    const colorArray = [];
    for (let i = 0; i < size; i++) {
      colorArray.push(generateRandomColor());
    }
    return colorArray;
}
const randomColors = generateColorArray(100);

const handleColorChange = () => {
    const color = randomColors[Math.floor(Math.random() * randomColors.length)];

    body.style.backgroundColor = color;
    title.textContent = color;
};

button.addEventListener("click", handleColorChange)