import { StateCreator } from 'zustand';

import { FastEqual } from '../../helpers/FastEqual';

export interface PaymentSliceState {
  pizzas: PizzaCardChecked[];
  deliveryInfo: Person;
  debitCard: CreatePizzaPaymentDebitCardDto;
  addPizza: (pizza: PizzaCardChecked) => void;
  deletePizza: (pizza: PizzaCardChecked) => void;
  changePizzasInCart: (oldPizza: PizzaCardChecked, newPizza: PizzaCardChecked) => void;
  deleteCurrentPizzas: (pizza: PizzaCardChecked) => void;
  addDeliveryInfo: (person: Person) => void;
  addPayment: (payment: CreatePizzaPaymentDebitCardDto) => void;
}

const addPizza = (state: PaymentSliceState, currentPizza: PizzaCardChecked) => ({
  ...state,
  pizzas: [...state.pizzas, currentPizza]
});

const deletePizza = (state: PaymentSliceState, currentPizza: PizzaCardChecked) => {
  const index = state.pizzas.findIndex((pizza: PizzaCardChecked) => FastEqual(pizza, currentPizza));
  state.pizzas.splice(index, 1);
  return { ...state };
};

const changePizzasInCart = (state: PaymentSliceState, oldPizza: PizzaCardChecked, newPizza: PizzaCardChecked) => {
  const prevData = [];
  for (const elem of state.pizzas) {
    if (FastEqual(elem, oldPizza)) {
      prevData.push(newPizza);
    } else {
      prevData.push(elem);
    }
  }
  return {
    ...state,
    pizzas: prevData
  };
};

const deleteCurrentPizzas = (state: PaymentSliceState, currentPizza: PizzaCardChecked) => ({
  ...state,
  pizzas: state.pizzas.filter((pizza) => !FastEqual(pizza, currentPizza))
});

export const createPaymentSlice: StateCreator<PaymentSliceState> = (set) => ({
  pizzas: [] as PizzaCardChecked[],
  deliveryInfo: {} as Person,
  debitCard: {} as CreatePizzaPaymentDebitCardDto,
  addPizza: (pizza: PizzaCardChecked) => set((state: PaymentSliceState) => addPizza(state, pizza)),
  deletePizza: (pizza: PizzaCardChecked) => set((state: PaymentSliceState) => deletePizza(state, pizza)),
  changePizzasInCart: (oldPizza: PizzaCardChecked, newPizza: PizzaCardChecked) =>
    set((state: PaymentSliceState) => changePizzasInCart(state, oldPizza, newPizza)),
  deleteCurrentPizzas: (pizza: PizzaCardChecked) =>
    set((state: PaymentSliceState) => deleteCurrentPizzas(state, pizza)),
  addDeliveryInfo: (deliveryInfo: Person) => set({ deliveryInfo }),
  addPayment: (debitCard: CreatePizzaPaymentDebitCardDto) => set({ debitCard })
});
