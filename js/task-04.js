const decrementButtonEl = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButtonEl = document.querySelector(
  'button[data-action="increment"]'
);
const counterValue = document.querySelector("span");

let counter = 0;

decrementButtonEl.addEventListener("click", onDecrementBtn);
function onDecrementBtn(event) {
  counter -= 1;
  counterValue.textContent = counter;
}

incrementButtonEl.addEventListener("click", onIncrementBtn);
function onIncrementBtn(event) {
  counter += 1;
  counterValue.textContent = counter;
}
