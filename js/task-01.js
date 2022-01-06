const categoriesEl = document.querySelectorAll("li.item");
console.log("Number of categories: ", categoriesEl.length);

categoriesEl.forEach((item) => {
  const itemsTitle = item.querySelector("h2");
  console.log("Category: ", itemsTitle.textContent);
  const itemsLength = item.querySelectorAll("li");
  console.log("Elements: ", itemsLength.length);
});