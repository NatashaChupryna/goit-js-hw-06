const secondUl = document.querySelectorAll(".item");

console.log(`Number of categories:${secondUl.length}`);
for (let i = 0; i < secondUl.length; i += 1) {
  console.log(`Category: ${secondUl[i].querySelector("h2").textContent}`);
  console.log(`Elements: ${secondUl[i].querySelectorAll("ul li").length}`);
}
