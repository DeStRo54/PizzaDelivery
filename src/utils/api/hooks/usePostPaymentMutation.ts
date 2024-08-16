import { useMutation } from '@tanstack/react-query';

import { PaymentParams, postPayment } from '../requests/pizza/payment';

export const usePostPaymentMutation = () =>
  useMutation({
    mutationFn: ({ params, config }: PaymentParams) => postPayment({ params, config })
  });
