import { Counter } from '../../../shared/Counter/Counter';
import { RemouteIng } from '../../../shared/RemouteImg/RemouteImg';
import { Typhography } from '../../../shared/Typhography/Typhography';
import { PriceCalculator } from '../../../utils/helpers/PriceCalculator';
import { PizzaDoughsTabs, PizzaSizes, PizzaSizesTabs, PizzaToppings } from '../../../utils/helpers/Translater';
import { usePizzaStore } from '../../../utils/stores/PizzaStore';
import { CloseIcon } from '../../icons';
import styles from './PizzaCartElement.module.css';

interface PizzaCartElementProps {
  pizza: PizzaCardChecked;
  count: number;
}

export const PizzaCartElement = ({ pizza, count }: PizzaCartElementProps) => {
  const { addPizza, deletePizza, deleteCurrentPizzas } = usePizzaStore();

  const PlusPizzaCount = () => {
    addPizza(pizza);
  };

  const MinusPizzaCount = () => {
    count > 1 && deletePizza(pizza);
  };

  const DeletePizzas = () => {
    deleteCurrentPizzas(pizza);
  };

  return (
    <div className={styles.container}>
      <RemouteIng src={pizza.img} variant={'cart'} className={styles.img} />
      <Typhography tag="h1" variant="paragraph16-regular" children={pizza.name} className={styles['name']} />
      <div className={styles['container-info']}>
        <Typhography
          tag="p"
          variant="paragraph16-regular"
          children={`${PizzaSizesTabs[pizza.size.name]} ${PizzaSizes[pizza.size.name]}, ${PizzaDoughsTabs[pizza.doughs.name]}`}
          className={styles['info']}
        />
        {pizza.toppings &&
          pizza.toppings.map((topping, index) => (
            <Typhography
              key={index}
              tag="p"
              variant="paragraph16-regular"
              children={`+${PizzaToppings[topping.name]}`}
              className={styles['info']}
            />
          ))}
      </div>
      <Counter value={count} onIncrement={PlusPizzaCount} onDecrement={MinusPizzaCount} />
      <Typhography
        tag="p"
        variant="paragraph16-regular"
        children={`${PriceCalculator(pizza) * count} ₽`}
        className={styles['cost']}
      />
      <CloseIcon className={styles['exit-icon']} CloseIconVariant={'basket'} onClick={DeletePizzas} />
    </div>
  );
};
