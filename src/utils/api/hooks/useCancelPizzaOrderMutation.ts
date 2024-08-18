import { useMutation } from '@tanstack/react-query';

import { putCancelPizzaOrderById, PutCancelPizzaOrderConfig } from '../requests/pizza/orders/cancel';

export const useCancelPizzaOrderMutation = () =>
  useMutation({
    mutationKey: ['cancel-order'],
    mutationFn: ({ params, config }: PutCancelPizzaOrderConfig) => putCancelPizzaOrderById({ params, config })
  });
