import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { usePersonPaymentStore } from '../../../utils/stores/PersonPaymentStore';
import { PersonSheme } from '../PersonSheme';

export const useSetPersonData = () => {
  const { person, addPerson } = usePersonPaymentStore();
  const personDataForm = useForm<PersonSheme>({
    mode: 'onBlur',
    defaultValues: person,
    resolver: zodResolver(PersonSheme)
  });

  const onSubmit = personDataForm.handleSubmit((data) => {
    addPerson(data);
    console.log(data);
  });

  return {
    form: personDataForm,
    functions: {
      onSubmit
    }
  };
};
