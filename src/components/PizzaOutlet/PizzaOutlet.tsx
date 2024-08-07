import equal from 'deep-equal';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const PizzaContext = React.createContext({} as PizzaCartData);

export const PizzaOutlet = () => {
  const [pizzas, setPizzas] = React.useState([] as PizzaCardChecked[]);
  const [person, setPerson] = React.useState({} as CreatePizzaPaymentPersonDto);
  const debitCard = {} as CreatePizzaPaymentDebitCardDto;
  const receiverAddress = {} as CreatePizzaPaymentAddressDto;

  const changePizzasInCart = (oldPizza: PizzaCardChecked, newPizza: PizzaCardChecked) => {
    const prevData = pizzas;
    for (const elem of pizzas) {
      if (equal(elem, oldPizza)) {
        prevData.push(newPizza);
      } else {
        prevData.push(elem);
      }
    }
    setPizzas(prevData);
  };

  const deletePizzasInCart = (currentPizza: PizzaCardChecked) => {
    setPizzas(pizzas.filter((pizza) => !equal(pizza, currentPizza)));
  };

  const addPizza = (currentPizza: PizzaCardChecked) => {
    setPizzas([...pizzas, currentPizza]);
  };

  const deletePizza = (currentPizza: PizzaCardChecked) => {
    const index = pizzas.findIndex((pizza: PizzaCardChecked) => equal(pizza, currentPizza));
    pizzas.splice(index, 1);
    setPizzas([...pizzas]);
  };

  const addPersonData = (data: CreatePizzaPaymentPersonDto) => {
    setPerson(data);
  };

  const value = {
    pizzas,
    person,
    debitCard,
    receiverAddress,
    changePizzasInCart,
    deletePizzasInCart,
    addPizza,
    deletePizza,
    addPersonData
  };

  return (
    <PizzaContext.Provider value={value}>
      <Outlet />
    </PizzaContext.Provider>
  );
};
