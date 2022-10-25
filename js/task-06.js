const input = document.querySelector("input");
input.addEventListener("blur", onValidInput);

function onValidInput(event) {
  if (input.value.length !== Number(input.dataset.length)) {
    return input.classList.add("invalid");
  }
  return input.classList.replace("invalid", "valid");
}

console.dir(input);
