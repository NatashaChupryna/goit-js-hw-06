const input = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");


input.addEventListener("input", (event) => {
  const inputValue = event.currentTarget;
  textSpan.style.fontSize = `${inputValue.value}px`;
});