const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector(`#ingredients`);



const addListItems = (items) => {
    const listArray = items.map(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listItem.classList.add('.item');
        return listItem;
    })
    ingredientsList.append(...listArray);
}

addListItems(ingredients);
