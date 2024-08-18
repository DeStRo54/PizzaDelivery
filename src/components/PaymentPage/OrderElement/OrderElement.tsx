import { Typhography } from '../../../shared/Typhography/Typhography';
import { PizzaDoughsOrder, PizzaSizeOrder, PizzaSizes, PizzaToppingsOrder } from '../../../utils/helpers/Translater';
import styles from './OrderElement.module.css';

interface OrderElementProps {
  pizza: UniqPizzas;
}

export const OrderElement = ({ pizza }: OrderElementProps) => {
  const count = pizza.count > 1 ? `x${pizza.count}` : '';
  const descriptionSize = `${PizzaSizeOrder[pizza.value.size.name]} ${PizzaSizes[pizza.value.size.name]}`;
  const descriptionDoughs = PizzaDoughsOrder[pizza.value.doughs.name];
  const plusTopings = pizza.value.toppings.length ? '+' : '';
  const descriptionToppings = `${pizza.value.toppings.map((topping) => PizzaToppingsOrder[topping.name]).join(', ')}`;
  return (
    <div className={styles['order-element']}>
      <Typhography
        tag="p"
        variant="paragraph16-regular"
        children={`${count} ${pizza.value.name}, ${descriptionSize}, ${descriptionDoughs} ${plusTopings} ${descriptionToppings}`}
      />
    </div>
  );
};
