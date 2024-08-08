import { Navigate, useNavigate } from 'react-router-dom';

import { Button } from '../../shared/Button/Button';
import { Input } from '../../shared/Input/Input';
import { Typhography } from '../../shared/Typhography/Typhography';
import { usePizzaStore } from '../../utils/stores/PizzaStore';
import { useSetPersonData } from './hooks/useSetPersonData';
import styles from './PersonData.module.css';

export const PersonData = () => {
  const { form, functions } = useSetPersonData();
  const { pizzas } = usePizzaStore();
  const navigate = useNavigate();

  return (
    <div className={styles.layout}>
      <Typhography tag="h2" variant="title" children="Введите ваши данные" className={styles.title} />

      <form className={styles.container} onSubmit={functions.onSubmit}>
        <Input
          label="Фамилия*"
          placeholder="Фамилия"
          {...form.register('lastname')}
          {...(form.formState.errors.lastname && { error: form.formState.errors.lastname.message })}
        />

        <Input
          label="Имя*"
          placeholder="Имя"
          {...form.register('firstname')}
          {...(form.formState.errors.firstname && {
            error: form.formState.errors.firstname.message
          })}
        />

        <Input
          label="Отчество*"
          placeholder="Отчество"
          {...form.register('middlename')}
          {...(form.formState.errors.middlename && {
            error: form.formState.errors.middlename.message
          })}
        />

        <Input
          label="Телефон*"
          placeholder="Телефон"
          {...form.register('phone')}
          {...(form.formState.errors.phone && { error: form.formState.errors.phone.message })}
        />

        <Input
          label="E-mail*"
          placeholder="E-mail"
          {...form.register('email')}
          {...(form.formState.errors.email && { error: form.formState.errors.email.message })}
        />

        <Input
          label="Адрес*"
          placeholder="Адрес"
          {...form.register('adress')}
          {...(form.formState.errors.adress && { error: form.formState.errors.adress.message })}
        />

        <div className={styles.footer}>
          <Button variant="cancel" onClick={() => navigate('/cart')} children="Назад" className={styles.button} />
          <Button
            variant="accept"
            onClick={() => navigate('/cart/payment')}
            children="Продолжить"
            className={styles.button}
          />
        </div>
      </form>
      {pizzas.length === 0 && <Navigate to="/cart" />}
    </div>
  );
};
