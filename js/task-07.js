const input = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");
input.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value >= Number("20")) {
    return (textSpan.style.fontSize = "24px");
  } else if (event.currentTarget.value >= Number("40")) {
    return (textSpan.style.fontSize = "34px");
  } else if (event.currentTarget.value >= Number("60")) {
    return (textSpan.style.fontSize = "42px");
  } else if (event.currentTarget.value >= Number("80")) {
    return (textSpan.style.fontSize = "56px");
  }

  return;
}
console.dir(input.valueAsNumber);
