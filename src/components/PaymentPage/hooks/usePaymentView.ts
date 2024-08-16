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
    defaultValues: {
      pan: debitCard.pan ?? '',
      expireDate: debitCard.expireDate ?? '',
      cvv: debitCard.cvv ?? ''
    },
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
        person: {
          firstname: deliveryInfo.firstname ?? '',
          lastname: deliveryInfo.lastname ?? '',
          middlename: deliveryInfo.middlename ?? '',
          phone: deliveryInfo.phone
        }, //возможжно надо будет поправить
        debitCard: data,
        pizzas: pizzas //возможжно надо будет поправить
      }
    });
    setStage('success');
    console.log(postPaymentMutation);
  });

  const closeSuccess = () => {
    usePaymentStore.setState({
      debitCard: {} as CreatePizzaPaymentDebitCardDto,
      deliveryInfo: {} as Person,
      pizzas: [] as PizzaCardChecked[]
    });
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
