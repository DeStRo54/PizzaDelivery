import clsx from 'clsx';

import { RemouteIng } from '../../../shared/RemouteImg/RemouteImg';
import { Typhography } from '../../../shared/Typhography/Typhography';
import { PizzaToppings } from '../../../utils/helpers/Translater';
import styles from './ToppingCard.module.css';

interface ToppingCardProps extends React.ComponentProps<'div'> {
  topping: PizzaIngredient;
  isChecked?: boolean;
}

export const ToppingCard = ({ topping, isChecked, className, ...props }: ToppingCardProps) => (
  <div className={clsx(styles['topping-card'], className, isChecked && styles.checked)} {...props}>
    <RemouteIng src={topping.img} variant="topping" />
    <Typhography
      className={styles['topping-name']}
      tag="p"
      variant="paragraph14-regular"
      children={PizzaToppings[topping.name]}
    />
    <Typhography
      className={styles['topping-cost']}
      tag="p"
      variant="paragraph16-regular"
      children={`${topping.cost} ₽`}
    />
  </div>
);
