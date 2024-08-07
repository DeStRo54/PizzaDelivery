import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { PizzaContext } from '../../PizzaOutlet/PizzaOutlet';
import { PersonSheme } from '../PersonSheme';

export const useSetPersonData = () => {
  const person = useContext(PizzaContext);
  const personDataForm = useForm<PersonSheme>({
    mode: 'onBlur',
    defaultValues: person.person,
    resolver: zodResolver(PersonSheme)
  });

  const onSubmit = personDataForm.handleSubmit((data) => {
    person.addPersonData(data);

    console.log(person.person);
  });

  return {
    form: personDataForm,
    functions: {
      onSubmit
    }
  };
};
