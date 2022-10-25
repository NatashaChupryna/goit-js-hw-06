const input = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");


input.addEventListener("click", (e) => {
  textSpan.style.fontSize = e.target.value + "px";
});
