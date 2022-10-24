const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

let arr = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const listItemEl = document.createElement("li");
  arr.push(listItemEl);

  listItemEl.textContent = ingredients[i];
  listItemEl.classList.add("item");
}

listEl.append(...arr);

console.log(listEl);
