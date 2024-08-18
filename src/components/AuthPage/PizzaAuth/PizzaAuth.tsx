import { Controller } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

import { Button } from '../../../shared/Button/Button';
import { Input } from '../../../shared/Input/Input';
import { Typhography } from '../../../shared/Typhography/Typhography';
import { Counter } from '../Counter/Counter';
import { useAuthView } from '../hooks/useAuthView';
import styles from './PizzaAuth.module.css';

export const PizzaAuth = () => {
  const { form, state, functions } = useAuthView();

  return (
    <form className={styles.layout} onSubmit={functions.onSubmit}>
      <Typhography tag="h2" variant="title-form" children="Авторизация" className={styles.title} />
      <Typhography tag="p" variant="paragraph16-regular">
        Введите {state.stage === 'phone' ? 'номер телефона' : 'проверочный код'} для входа <br /> в личный кабинет
      </Typhography>

      <Controller
        name="phone"
        control={form.control}
        render={({ field: { onChange, value, ...field }, fieldState }) => (
          <Input
            {...field}
            component={PatternFormat}
            format="+7 (###) ### ## ##"
            placeholder="Телефон"
            value={value.substring(1)}
            onChange={(e) => onChange(e.target.value.replace('+7', '8').replace(/ /g, '').replace(/\(|\)/g, ''))}
            {...(fieldState.error && { error: fieldState.error.message })}
          />
        )}
      />

      {state.stage === 'otp' && (
        <Controller
          name="otp"
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              component={PatternFormat}
              format="######"
              placeholder="Проверочный код"
              {...(fieldState.error && { error: fieldState.error.message })}
            />
          )}
        />
      )}

      <Button
        type="submit"
        variant="accept"
        children={state.stage === 'phone' ? 'Продолжить' : 'Войти'}
        className={styles.button}
      />
      {state.stage === 'otp' && <Counter onRetry={functions.onRetry} time={state.submittedPhones[state.phone]} />}
    </form>
  );
};
