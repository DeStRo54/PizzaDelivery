import { useQuery } from '@tanstack/react-query';

import { getPizzaOrderById, GetPizzaOrderConfig } from '../requests/pizza/orders/id';

export const useGetPizzaOrderByIdQuery = ({ params, config }: GetPizzaOrderConfig) =>
  useQuery({
    queryKey: ['pizza-order'],
    queryFn: () => getPizzaOrderById({ params, config }),
    refetchOnWindowFocus: false
  });
