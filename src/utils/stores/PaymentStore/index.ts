import equal from 'deep-equal';
import { create } from 'zustand';
import { devtools } from 'zustand-devtools';

interface PaymentStoreState {
  pizzas: PizzaCardChecked[];
  deliveryInfo: PersonPayment;
  debitCard: CreatePizzaPaymentDebitCardDto;
  addPizza: (pizza: PizzaCardChecked) => void;
  deletePizza: (pizza: PizzaCardChecked) => void;
  changePizzasInCart: (oldPizza: PizzaCardChecked, newPizza: PizzaCardChecked) => void;
  deleteCurrentPizzas: (pizza: PizzaCardChecked) => void;
  addDeliveryInfo: (person: PersonPayment) => void;
  addPayment: (payment: CreatePizzaPaymentDebitCardDto) => void;
}

const addPizza = (state: PaymentStoreState, currentPizza: PizzaCardChecked) => ({
  ...state,
  pizzas: [...state.pizzas, currentPizza]
});

const deletePizza = (state: PaymentStoreState, currentPizza: PizzaCardChecked) => {
  const index = state.pizzas.findIndex((pizza: PizzaCardChecked) => equal(pizza, currentPizza));
  state.pizzas.splice(index, 1);
  return { ...state };
};

const changePizzasInCart = (state: PaymentStoreState, oldPizza: PizzaCardChecked, newPizza: PizzaCardChecked) => {
  const prevData = [];
  for (const elem of state.pizzas) {
    if (equal(elem, oldPizza)) {
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

const deleteCurrentPizzas = (state: PaymentStoreState, currentPizza: PizzaCardChecked) => ({
  ...state,
  pizzas: state.pizzas.filter((pizza) => !equal(pizza, currentPizza))
});

export const usePaymentStore = create<PaymentStoreState>()(
  devtools((set) => ({
    pizzas: [] as PizzaCardChecked[],
    deliveryInfo: {} as PersonPayment,
    debitCard: {} as CreatePizzaPaymentDebitCardDto,
    addPizza: (pizza: PizzaCardChecked) => set((state: PaymentStoreState) => addPizza(state, pizza)),
    deletePizza: (pizza: PizzaCardChecked) => set((state: PaymentStoreState) => deletePizza(state, pizza)),
    changePizzasInCart: (oldPizza: PizzaCardChecked, newPizza: PizzaCardChecked) =>
      set((state: PaymentStoreState) => changePizzasInCart(state, oldPizza, newPizza)),
    deleteCurrentPizzas: (pizza: PizzaCardChecked) =>
      set((state: PaymentStoreState) => deleteCurrentPizzas(state, pizza)),
    addDeliveryInfo: (deliveryInfo: PersonPayment) => set({ deliveryInfo }),
    addPayment: (debitCard: CreatePizzaPaymentDebitCardDto) => set({ debitCard })
  }))
);
