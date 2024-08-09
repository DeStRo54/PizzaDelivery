import { Controller } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';
import { Navigate } from 'react-router-dom';

import { Button } from '../../shared/Button/Button';
import { Input } from '../../shared/Input/Input';
import { Typhography } from '../../shared/Typhography/Typhography';
import { usePizzaStore } from '../../utils/stores/PizzaStore';
import { usePaymentView } from './hooks/usePaymentView';
import styles from './Payment.module.css';

export const Payment = () => {
  const { pizzas } = usePizzaStore();
  const { form, functions } = usePaymentView();

  return (
    <div className={styles.layout}>
      <Typhography tag="h2" variant="title" children="Введите данные карты для оплаты" className={styles.title} />
      <form className={styles.container} onSubmit={functions.onSubmit}>
        <div className={styles['data-container']}>
          <Controller
            name="pan"
            control={form.control}
            render={({ field, fieldState }) => (
              <Input
                label="Номер*"
                placeholder="0000 0000"
                component={PatternFormat}
                format="#### ####"
                {...field}
                {...(fieldState.error && { error: fieldState.error.message })}
              />
            )}
          />
          <div className={styles['input-container']}>
            <Controller
              name="expireDate"
              control={form.control}
              render={({ field, fieldState }) => (
                <Input
                  label="Срок*"
                  placeholder="00/00"
                  component={PatternFormat}
                  format="##/##"
                  {...field}
                  {...(fieldState.error && { error: fieldState.error.message })}
                />
              )}
            />
            <Controller
              name="cvv"
              control={form.control}
              render={({ field, fieldState }) => (
                <Input
                  label="CVV*"
                  placeholder="000"
                  component={PatternFormat}
                  format="###"
                  {...field}
                  {...(fieldState.error && { error: fieldState.error.message })}
                />
              )}
            />
          </div>
        </div>
        <Button type="submit" variant={'accept'} children={'Оплатить'} />
      </form>
      {pizzas.length === 0 && <Navigate to="/cart" />}
    </div>
  );
};
