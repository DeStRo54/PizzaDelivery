import { Controller } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

import { Button } from '../../shared/Button/Button';
import { Input } from '../../shared/Input/Input';
import { Typhography } from '../../shared/Typhography/Typhography';
import { useProfileView } from './hooks/useProfileView';
import styles from './Profile.module.css';

export const Profile = () => {
  const { form, state, functions } = useProfileView();

  return (
    <form className={styles.layout} onSubmit={functions.onSubmit}>
      <Typhography tag="h2" variant="title-form" children="Профиль" />
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
        {...(form.formState.errors.firstname && { error: form.formState.errors.firstname.message })}
      />
      <Input
        label="Отчество*"
        placeholder="Отчество"
        {...form.register('middlename')}
        {...(form.formState.errors.middlename && { error: form.formState.errors.middlename.message })}
      />

      <Controller
        name="phone"
        control={form.control}
        render={({ field: { value, ...field } }) => (
          <Input
            {...field}
            component={PatternFormat}
            format="+7 (###) ### ## ##"
            value={value.substring(1)}
            disabled={true}
            label="Телефон*"
            placeholder="Телефон"
            {...form.register('phone')}
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
        {...form.register('city')}
        {...(form.formState.errors.city && { error: form.formState.errors.city.message })}
      />
      <div className={styles.container}>
        <Button
          disabled={state.loading}
          type="submit"
          children={state.loading ? 'Обновление...' : 'Обновить данные'}
          variant={'accept'}
        />
      </div>
    </form>
  );
};
