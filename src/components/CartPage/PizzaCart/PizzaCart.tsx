import { useNavigate } from 'react-router-dom';

import { Button } from '../../../shared/Button/Button';
import { Typhography } from '../../../shared/Typhography/Typhography';
import { getTotalPrice } from '../../../utils/helpers/PriceCalculator/';
import { usePizzaStore } from '../../../utils/stores/PizzaStore';
import { PizzaCartElement } from '../PizzaCartElement/PizzaCartElement';
import styles from './PizzaCart.module.css';

export const PizzaCart = () => {
  const { pizzas } = usePizzaStore();
  const navigate = useNavigate();

  interface UniqData {
    count: number;
    value: PizzaCardChecked;
  }

  const createUniqData = (data: PizzaCardChecked[]) => {
    const uniqData: UniqData[] = [];
    const uniqList = [...new Set(data.map((item: PizzaCardChecked) => JSON.stringify(item)))].sort();

    for (const elem of uniqList) {
      uniqData.push({
        count: data.filter((item: PizzaCardChecked) => JSON.stringify(item) === elem).length,
        value: JSON.parse(elem)
      });
    }
    return uniqData;
  };

  const uniqData = createUniqData(pizzas);

  return (
    <div className={styles.layout}>
      <Typhography tag="h2" variant="title" children="Корзина" className={styles['title']} />
      {uniqData.length > 0 && (
        <>
          <div className={styles.container}>
            {uniqData.map((data, index) => (
              <PizzaCartElement key={index} pizza={data.value} count={data.count} />
            ))}
          </div>
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
      )}
    </div>
  );
};
