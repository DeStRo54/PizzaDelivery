import { useNavigate } from 'react-router-dom';

import { Button } from '../../shared/Button/Button';
import { StatusView } from '../../shared/StatusView/StatusView';
import { Typhography } from '../../shared/Typhography/Typhography';
import { useGetPizzaOrdersQuery } from '../../utils/api/hooks/useGetPizzaOrdersQuery';
import { AdressStructToString } from '../../utils/helpers/AdressStructToString';
import { useAppStore } from '../../utils/store';
import styles from './PizzaOrders.module.css';

export const PizzaOrders = () => {
  const { data, isLoading } = useGetPizzaOrdersQuery();
  const { setOrderId } = useAppStore();
  const navigate = useNavigate();

  const getOrder = (orderId: string) => {
    setOrderId(orderId);
    navigate('/orders/current');
  };

  return (
    <div className={styles.layout}>
      <Typhography tag="h2" variant="title-form" children="Заказы" />
      <div className={styles.header}>
        <Typhography tag="p" variant="paragraph14-regular" className={styles.status} children="Статус" />
        <Typhography tag="p" variant="paragraph14-regular" className={styles.adress} children="Адрес доставки" />
        <Typhography tag="p" variant="paragraph14-regular" className={styles.compound} children="Состав заказа" />
      </div>
      <ul className={styles.container}>
        {!isLoading &&
          data?.data.orders.map((order, index) => (
            <li key={index} className={styles.order}>
              <StatusView status={order.status} className={styles.status} />
              <Typhography
                tag="p"
                variant="paragraph16-regular"
                className={styles.adress}
                children={AdressStructToString(order.receiverAddress)}
              />
              <Typhography tag="p" variant="paragraph16-regular" className={styles.compound} children={'Пепперони'} />
              <Button onClick={() => getOrder(order._id)} children="Подробнее" variant={'button-transparent'} />
            </li>
          ))}
      </ul>
    </div>
  );
};
