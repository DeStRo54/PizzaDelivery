import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { usePersonPaymentStore } from '../../../utils/stores/PersonPaymentStore';
import { PaymentSheme } from '../PaymentSheme';

export const usePaymentView = () => {
  const { debitCard, addPayment } = usePersonPaymentStore();

  const paymentForm = useForm<PaymentSheme>({
    mode: 'onBlur',
    defaultValues: debitCard,
    resolver: zodResolver(PaymentSheme)
  });

  const onSubmit = paymentForm.handleSubmit((data) => {
    addPayment(data);
    console.log(data);
  });

  return {
    form: paymentForm,
    functions: {
      onSubmit
    }
  };
};
