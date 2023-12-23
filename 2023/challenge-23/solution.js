function organizeChristmasDinner(dishes) {
  const ingredientMap = {};
  dishes.forEach((dish) => {
    const dishName = dish[0];
    dish.slice(1).forEach((ingredient) => {
      if (!ingredientMap[ingredient]) {
        ingredientMap[ingredient] = [];
      }
      ingredientMap[ingredient].push(dishName);
    });
  });

  const result = Object.keys(ingredientMap)
    .filter((ingredient) => ingredientMap[ingredient].length > 1)
    .map((ingredient) => [ingredient, ...ingredientMap[ingredient].sort()])
    .sort((a, b) => a[0].localeCompare(b[0]));

  return result;
}
