import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { usePaymentStore } from '../../../utils/stores/PaymentStore';
import { PersonSheme } from '../PersonSheme';

export const usePersonView = () => {
  const { deliveryInfo, addDeliveryInfo } = usePaymentStore();
  const navigate = useNavigate();
  const personForm = useForm<PersonSheme>({
    mode: 'onBlur',
    defaultValues: deliveryInfo,
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
