function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector("body"),
  textSpan: document.querySelector(".color"),
  togglebtn: document.querySelector(".change-color"),
};

refs.togglebtn.addEventListener("click", onChangeBodyColor);

function onChangeBodyColor(event) {
  if (event.currentTurget) {
    return
    refs.body.style.backgroundColor = getRandomHexColor();
    refs.textSpan.textContent = refs.body.style.backgroundColor.value;
  }
}
