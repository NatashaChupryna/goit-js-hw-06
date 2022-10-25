function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]"); 

let counter = Number(refs.input.value);

refs.input.addEventListener("click", createObj);
function createObj(event) {
  if (event.currentTarget.value === 1) {
   const newEl = document.createElement('<div id="boxes"></div>')
   
  }
} 
console.dir(input);