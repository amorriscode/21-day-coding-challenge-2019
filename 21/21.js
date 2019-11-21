const bakeryHasIngredients = (bakery, [ingredient1, ingredient2]) => bakery.includes(ingredient1) || bakery.includes(ingredient2);

const chooseRecipe = (bakeryA, bakeryB, recipes) => recipes.find(recipe => {
  const bakeryAHasIngredients = bakeryHasIngredients(bakeryA, recipe.ingredients);
  const bakeryBHasIngredients = bakeryHasIngredients(bakeryB, recipe.ingredients);
  
  return bakeryAHasIngredients && bakeryBHasIngredients;
}).name;
