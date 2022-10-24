const input = document.querySelector("#name-input");
const nameEl = document.querySelector("span");

input.addEventListener("input", onNameEnter);
function onNameEnter(event) {
  nameEl.textContent = event.currentTarget.value;
  if (event.currentTarget.value.length === 0) {
    nameEl.textContent = "Anonymous";
  }
}
