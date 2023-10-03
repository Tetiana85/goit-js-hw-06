const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// ingredients.forEach((ingredient) => {
//   const li = document.createElement("li");
//   li.textContent = ingredient;
//   li.classList.add("item");
//   ulIngredients.appendChild(li);
// });

const ulIngredients = document.querySelector("ul");
const createIngredientsList = ingredientsArray => {
  return ingredientsArray
    .map(ingredient => `<li class="item">${ingredient}</li>`)
    .join('');
};

ulIngredients.insertAdjacentHTML('beforeend', createIngredientsList(ingredients));
