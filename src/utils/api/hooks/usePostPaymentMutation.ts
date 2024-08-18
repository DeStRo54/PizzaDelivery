import { useMutation } from '@tanstack/react-query';

import { postPayment, PostPaymentConfig } from '../requests/pizza/payment';

export const usePostPaymentMutation = () =>
  useMutation({
    mutationKey: ['payment'],
    mutationFn: ({ params, config }: PostPaymentConfig) => postPayment({ params, config })
  });
