import { Navigate } from 'react-router-dom';

import { Button } from '../../shared/Button/Button';
import { StatusView, StatusViewVariant } from '../../shared/StatusView/StatusView';
import { Typhography } from '../../shared/Typhography/Typhography';
import { useGetPizzaOrderByIdQuery } from '../../utils/api/hooks/useGetPizzaOrderByIdQuery';
import { useAuthStore } from '../../utils/stores/AuthStore';
import { CloseIcon, QuestionIcon } from '../icons';
import styles from './CurrentOrder.module.css';
import { useCancelOrder } from './hooks/useCancelOrder';

export const PizzaOrder = () => {
  const { orderId } = useAuthStore();
  const { data, isFetching, isSuccess } = useGetPizzaOrderByIdQuery({ params: { id: orderId } });
  const { isActive, functions } = useCancelOrder(orderId);

  return (
    <>
      {isFetching && <div>Загрузка...</div>}
      {!isFetching && isSuccess && (
        <ul className={styles.container}>
          <li className={styles.elem}>
            <Typhography tag="p" variant="paragraph12-regular" children="Статус" />
            <StatusView status={data?.data.order.status as StatusViewVariant} className={styles.status} />
          </li>
          <li className={styles.elem}>
            <Typhography tag="p" variant="paragraph12-regular" children="Адрес доставки" />
            <Typhography tag="p" variant="paragraph16-regular" children={data?.data.order.receiverAddress.apartment} />
          </li>
          <li className={styles.elem}>
            <Typhography tag="p" variant="paragraph12-regular" children="Состав заказа" />
            <Typhography tag="p" variant="paragraph16-regular" children={'Пепперони'} />
          </li>
          <li className={styles.elem}>
            <Typhography tag="p" variant="paragraph12-regular" children="Сумма заказа" />
            <Typhography tag="p" variant="paragraph16-regular" children={'1395 р'} />
          </li>
          <li className={styles.button}>
            <Button onClick={functions.backToOrders} children="Назад" variant="cancel" />
            {![2, 3, 4].includes(data?.data.order.status as number) && (
              <Button onClick={functions.viewCancelAttention} children="Отменить" variant="accept" />
            )}
          </li>
          {isActive && (
            <div className={styles.env}>
              <div className={styles.attention}>
                <div className={styles['attention-header']}>
                  <CloseIcon CloseIconVariant={'card'} onClick={functions.viewCancelAttention} />
                </div>
                <div className={styles['attention-container']}>
                  <div className={styles['attention-msg']}>
                    <QuestionIcon />
                    <Typhography tag="h3" variant="title" children='Отменить заказ?' />
                  </div>
                  <div className={styles['button-container']}>
                    <Button onClick={functions.cancelOrder} children="Отменить" variant="cancel" />
                    <Button onClick={functions.viewCancelAttention} children="Не отменять" variant="accept" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </ul>
      )}
      {!orderId && <Navigate to={'/orders'} />}
    </>
  );
};
