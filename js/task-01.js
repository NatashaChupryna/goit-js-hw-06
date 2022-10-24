const mainListItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${mainListItem.length}`);

const title = document.querySelector("h2");
console.log(`Category: ${title.textContent}`);


const animalsList = mainListItem.querySelectorAll('li');
console.log(`Elements: ${animalsList.length}`);
