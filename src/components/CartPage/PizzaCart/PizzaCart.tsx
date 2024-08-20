import { useNavigate } from 'react-router-dom';

import { Button } from '../../../shared/Button/Button';
import { Typhography } from '../../../shared/Typhography/Typhography';
import { getTotalPrice } from '../../../utils/helpers/PriceCalculator/';
import { useAppStore } from '../../../utils/store';
import { SetUniqPizzas } from '../helpers/SetUniqPizzas';
import { PizzaCartElement } from '../PizzaCartElement/PizzaCartElement';
import styles from './PizzaCart.module.css';

export const PizzaCart = () => {
  const { pizzas } = useAppStore();
  const navigate = useNavigate();

  return (
    <div className={styles.layout}>
      <Typhography tag="h2" variant="title-form" children="Корзина" />
      {pizzas.length > 0 ? (
        <>
          <ul className={styles.container}>
            {SetUniqPizzas(pizzas).map((data, index) => (
              <PizzaCartElement key={index} pizza={data.value} count={data.count} />
            ))}
          </ul>
          <div className={styles.footer}>
            <div className={styles['footer-container']}>
              <Typhography tag="h2" variant="title-form" children={'Стоимость заказа: '} />
              <Typhography tag="h2" variant="title-form" children={`${getTotalPrice(pizzas)} ₽`} />
            </div>
            <Button
              variant="accept"
              onClick={() => navigate('/cart/person')}
              children="Оформить заказ"
              className={styles.pay}
            />
          </div>
        </>
      ) : (
        <div className={styles['empty-cart']}>
          <Typhography tag="h2" variant="title" children="Корзина пуста!" />
          <Button variant="accept" onClick={() => navigate('/')} children="Перейти в каталог" />
        </div>
      )}
    </div>
  );
};
