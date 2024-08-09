interface PizzaCardChecked {
  id: string;
  name: string;
  img: string;
  toppings: PizzaIngredient[];
  description: string;
  size: PizzaSize;
  doughs: PizzaDough;
}

interface PersonPayment extends CreatePizzaPaymentPersonDto {
  email: string;
  adress: string;
}
