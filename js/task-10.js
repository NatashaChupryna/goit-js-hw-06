function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector('#boxes')

let newBoxes = [];
let size = 30;

input.addEventListener("input", onInputValue);
function onInputValue(event) {
  // event.target.value 
}

createBtn.addEventListener('click', createElement);

function createElement(event) {
  let total = input.value;
  let markup = [];
  for (let i = 1; i < total; i += 1) {
    const div = document.createElement('div');
    size += 10;
    div.style.width = size + 'px';
    div.style.height = size + "px";
    div.style.backgroundColor = getRandomHexColor();
    markup.push(div)
  }
  boxes.append(...markup);
};



destroyBtn.addEventListener('click', destroyElement)
function destroyElement() {
  boxes.innerHTML = '';
  size = 30;
}