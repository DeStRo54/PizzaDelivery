interface PizzaCardChecked {
  id: string;
  name: string;
  img: string;
  toppings: PizzaIngredient[];
  description: string;
  size: PizzaSize;
  doughs: PizzaDough;
}

interface PizzaCartData {
  pizzas: PizzaCardChecked[];
  receiverAddress: CreatePizzaPaymentAddressDto;
  person: CreatePizzaPaymentPersonDto;
  debitCard: CreatePizzaPaymentDebitCardDto;
  changePizzasInCart: (oldPizza: PizzaCardChecked, newPizza: PizzaCardChecked) => void;
  deletePizzasInCart: (currentPizza: PizzaCardCheckeds) => void;
  addPizza: (currentPizza: PizzaCardChecked) => void;
  deletePizza: (currentPizza: PizzaCardChecked) => void;
  addPersonData: (data: CreatePizzaPaymentPersonDto) => void;
}
