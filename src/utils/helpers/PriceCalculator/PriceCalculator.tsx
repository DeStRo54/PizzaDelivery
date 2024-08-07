export const PriceCalculator = (pizza: PizzaCardChecked) => {
  return pizza.doughs.price + pizza.size.price + calcIngredisntsPrice(pizza.toppings);
};

const calcIngredisntsPrice = (arr: PizzaIngredient[]) =>
  arr.map((ingredient) => ingredient.cost).reduce((a, b) => a + b, 0);
