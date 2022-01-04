const categoriesEl = document.querySelectorAll('.item');
const categoriesNum = `Number of categories: ${categoriesEl.length}`;
console.log(categoriesNum);

const categoriesTitle = [];
categoriesEl.forEach(el => {
    categoriesTitle.push(`Category: ${el.querySelector('h2').textContent} Element: ${el.querySelectorAll('.item ul').length}`)
})

console.table(categoriesTitle);