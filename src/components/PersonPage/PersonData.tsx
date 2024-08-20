import { Controller } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';
import { Navigate, useNavigate } from 'react-router-dom';

import { Button } from '../../shared/Button/Button';
import { Input } from '../../shared/Input/Input';
import { Typhography } from '../../shared/Typhography/Typhography';
import { useAppStore } from '../../utils/store/index.ts';
import { usePersonView } from './hooks/usePersonView.ts';
import styles from './PersonData.module.css';

export const PersonData = () => {
  const { form, functions } = usePersonView();
  const { pizzas } = useAppStore();
  const navigate = useNavigate();

  return (
    <div className={styles.layout}>
      <Typhography tag="h2" variant="title-form" children="Введите ваши данные" />

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

        <Controller
          control={form.control}
          name="phone"
          render={({ field: { onChange, value = '', ...field }, fieldState }) => (
            <Input
              {...field}
              label="Телефон*"
              placeholder="Телефон"
              component={PatternFormat}
              format="+7 (###) ### ## ##"
              value={value.substring(1)}
              onChange={(e) => onChange(e.target.value.replace('+7', '8').replace(/ /g, '').replace(/\(|\)/g, ''))}
              {...(fieldState.error && { error: fieldState.error.message })}
            />
          )}
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
          <Button variant="accept" children="Продолжить" className={styles.button} />
        </div>
      </form>
      {pizzas.length === 0 && <Navigate to="/cart" />}
    </div>
  );
};
