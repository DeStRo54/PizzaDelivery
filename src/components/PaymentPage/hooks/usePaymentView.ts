import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';

import { usePostPaymentMutation } from '../../../utils/api/hooks/usePostPaymentMutation';
import { usePaymentStore } from '../../../utils/stores/PaymentStore';
import { PaymentSheme } from '../constants/PaymentSheme';

export const usePaymentView = () => {
  const { pizzas, debitCard, deliveryInfo } = usePaymentStore();
  const postPaymentMutation = usePostPaymentMutation();
  const receiverAdress = deliveryInfo.adress?.split(', ');
  const [stage, setStage] = React.useState('');

  const paymentForm = useForm<PaymentSheme>({
    mode: 'onBlur',
    defaultValues: debitCard,
    resolver: zodResolver(PaymentSheme)
  });

  const onSubmit = paymentForm.handleSubmit(async (data) => {
    await postPaymentMutation.mutateAsync({
      params: {
        receiverAddress: {
          street: receiverAdress[0],
          house: receiverAdress[1],
          apartment: receiverAdress[2],
          comment: receiverAdress[3]
        },
        person: deliveryInfo, //возможжно надо будет поправить
        debitCard: data,
        pizzas: pizzas //возможжно надо будет поправить
      }
    });
    setStage('success');
    console.log(postPaymentMutation);
  });

  const closeSuccess = () => {
    usePaymentStore.setState({ debitCard: {} as any, deliveryInfo: {} as any, pizzas: [] as any });
  };

  return {
    form: paymentForm,
    state: { stage },
    functions: {
      onSubmit,
      closeSuccess
    }
  };
};
