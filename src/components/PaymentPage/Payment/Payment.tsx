import clsx from 'clsx';
import { Controller } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';
import { Navigate, useNavigate } from 'react-router-dom';

import { Button } from '../../../shared/Button/Button';
import { Input } from '../../../shared/Input/Input';
import { Typhography } from '../../../shared/Typhography/Typhography';
import { getTotalPrice } from '../../../utils/helpers/PriceCalculator';
import { useAppStore } from '../../../utils/store';
import { SetUniqPizzas } from '../../CartPage/helpers/SetUniqPizzas';
import { CloseIcon } from '../../icons';
import { SuccessIcon } from '../../icons/SuccessIcon';
import { usePaymentView } from '../hooks/usePaymentView';
import { OrderElement } from '../OrderElement/OrderElement';
import styles from './Payment.module.css';

export const Payment = () => {
  const { pizzas, deliveryInfo } = useAppStore();
  const { form, state, functions } = usePaymentView();
  const uniqPizzas = SetUniqPizzas(pizzas);
  const navigate = useNavigate();

  const goToCatalog = () => {
    navigate('/');
    functions.closeSuccess();
  };

  const closeSuccess = () => {
    navigate('/cart');
    functions.closeSuccess();
  };

  return (
    <div className={styles.layout}>
      <Typhography tag="h2" variant="title-form" children="Введите данные карты для оплаты" />
      <form className={styles.container} onSubmit={functions.onSubmit}>
        <div className={styles['data-container']}>
          <Controller
            name="pan"
            control={form.control}
            render={({ field: { onChange, value = '', ...field }, fieldState }) => (
              <Input
                label="Номер*"
                placeholder="0000 0000"
                component={PatternFormat}
                format="#### ####"
                value={value}
                onChange={(e) => onChange(e.target.value.replace(/ /g, ''))}
                {...field}
                {...(fieldState.error && { error: fieldState.error.message })}
              />
            )}
          />
          <div className={styles['input-container']}>
            <Controller
              name="expireDate"
              control={form.control}
              render={({ field: { onChange, value = '', ...field }, fieldState }) => (
                <Input
                  label="Срок*"
                  placeholder="00/00"
                  component={PatternFormat}
                  format="##/##"
                  value={value}
                  onChange={(e) => onChange(e.target.value.replace(/\//g, ''))}
                  {...field}
                  {...(fieldState.error && { error: fieldState.error.message })}
                />
              )}
            />
            <Controller
              name="cvv"
              control={form.control}
              render={({ field: { onChange, value = '', ...field }, fieldState }) => (
                <Input
                  label="CVV*"
                  placeholder="000"
                  component={PatternFormat}
                  format="###"
                  value={value}
                  onChange={(e) => onChange(e.target.value.replace(/ /g, ''))}
                  {...field}
                  {...(fieldState.error && { error: fieldState.error.message })}
                />
              )}
            />
          </div>
        </div>
        <Button type="submit" variant={'accept'} children={'Оплатить'} />
      </form>
      {state.stage === 'success' && (
        <div className={styles['success-env']}>
          <div className={styles['success-layout']}>
            <div className={styles['success-header']}>
              <CloseIcon onClick={closeSuccess} CloseIconVariant={'card'} />
            </div>
            <div className={styles['success-container']}>
              <SuccessIcon />
              <Typhography tag="h2" variant="title" children="Оплата прошла успешно!" className={styles.title} />
              <ul className={styles['success-data']}>
                <li className={styles['success-data-item']}>
                  <Typhography tag="p" variant="paragraph14-regular" children="Заказ" />
                  {uniqPizzas.map((data, index) => (
                    <OrderElement key={index} pizza={data} />
                  ))}
                </li>
                <li className={styles['success-data-item']}>
                  <Typhography tag="p" variant="paragraph14-regular" children="Адрес доставки" />
                  <Typhography tag="p" variant="paragraph16-regular" children={`Россия, ${deliveryInfo.adress}`} />
                </li>
                <li className={styles['success-data-item']}>
                  <Typhography tag="p" variant="paragraph14-regular" children="Сумма заказа" />
                  <Typhography tag="p" variant="paragraph16-regular" children={`${getTotalPrice(pizzas)}₽`} />
                </li>
                <li className={clsx(styles['success-data-item'], styles.sms)}>
                  <Typhography
                    tag="p"
                    variant="paragraph14-regular"
                    children="Вся информация была продублирована в SMS"
                  />
                </li>
              </ul>
              <Button
                onClick={goToCatalog}
                variant={'button-transparent'}
                className={styles['exit']}
                children={'Перейти в главное меню'}
              />
            </div>
          </div>
        </div>
      )}
      {pizzas.length === 0 && !state.stage && <Navigate to="/cart" />}
    </div>
  );
};
