import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useAppStore } from '../../../utils/store';
import { PersonSheme } from '../constants/PersonSheme';

export const usePersonView = () => {
  const { deliveryInfo, addDeliveryInfo } = useAppStore();
  const navigate = useNavigate();
  const personForm = useForm<PersonSheme>({
    defaultValues: { ...deliveryInfo, phone: deliveryInfo.phone ?? '' },
    resolver: zodResolver(PersonSheme)
  });

  const onSubmit = personForm.handleSubmit((data) => {
    addDeliveryInfo(data);
    navigate('/cart/payment');
  });

  return {
    form: personForm,
    functions: {
      onSubmit
    }
  };
};
