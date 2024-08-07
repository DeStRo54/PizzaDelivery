import equal from 'deep-equal';
import { create } from 'zustand';
import { devtools } from 'zustand-devtools';

interface PizzaStoreState {
  pizzas: PizzaCardChecked[];
  addPizza: (pizza: PizzaCardChecked) => void;
  deletePizza: (pizza: PizzaCardChecked) => void;
  deleteCurrentPizzas: (pizza: PizzaCardChecked) => void;
  changePizzasInCart: (oldPizza: PizzaCardChecked, newPizza: PizzaCardChecked) => void;
}

const addPizza = (state: PizzaStoreState, currentPizza: PizzaCardChecked) => ({
  ...state,
  pizzas: [...state.pizzas, currentPizza]
});

const deletePizza = (state: PizzaStoreState, currentPizza: PizzaCardChecked) => {
  const index = state.pizzas.findIndex((pizza: PizzaCardChecked) => equal(pizza, currentPizza));
  state.pizzas.splice(index, 1);
  return { ...state };
};

const deleteCurrentPizzas = (state: PizzaStoreState, currentPizza: PizzaCardChecked) => ({
  ...state,
  pizzas: state.pizzas.filter((pizza) => !equal(pizza, currentPizza))
});

const changePizzasInCart = (state: PizzaStoreState, oldPizza: PizzaCardChecked, newPizza: PizzaCardChecked) => {
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

export const usePizzaStore = create<PizzaStoreState>()(
  devtools((set) => ({
    pizzas: [] as PizzaCardChecked[],
    addPizza: (pizza: PizzaCardChecked) => set((state: PizzaStoreState) => addPizza(state, pizza)),
    deletePizza: (pizza: PizzaCardChecked) => set((state: PizzaStoreState) => deletePizza(state, pizza)),
    deleteCurrentPizzas: (pizza: PizzaCardChecked) =>
      set((state: PizzaStoreState) => deleteCurrentPizzas(state, pizza)),
    changePizzasInCart: (oldPizza: PizzaCardChecked, newPizza: PizzaCardChecked) =>
      set((state: PizzaStoreState) => changePizzasInCart(state, oldPizza, newPizza))
  }))
);
