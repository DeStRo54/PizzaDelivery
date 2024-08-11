import { useMutation } from '@tanstack/react-query';

import { PaymentParams, postPayment } from '../requests/payment';

export const usePostPaymentMutation = () =>
  useMutation({
    mutationFn: ({ params, config }: PaymentParams) => postPayment({ params, config })
  });
