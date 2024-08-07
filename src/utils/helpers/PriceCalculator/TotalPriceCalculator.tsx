import { PriceCalculator } from './PriceCalculator';

export const getTotalPrice = (data: PizzaCardChecked[]) => {
  let totalPrice = 0;
  for (const elem of data) {
    totalPrice += PriceCalculator(elem);
  }
  return totalPrice;
};
