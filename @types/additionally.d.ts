interface UniqPizzas {
  count: number;
  value: PizzaCardChecked;
}

interface PizzaCardChecked {
  id: string;
  name: string;
  img: string;
  toppings: PizzaIngredient[];
  description: string;
  size: PizzaSize;
  doughs: PizzaDough;
}

interface Person extends CreatePizzaPaymentPersonDto {
  email: string;
  adress: string;
}
