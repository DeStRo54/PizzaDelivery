import { useQuery } from '@tanstack/react-query';

import { getPizzaOrders } from '../requests';

export const useGetPizzaOrdersQuery = () =>
  useQuery({
    queryKey: ['pizza-orders'],
    queryFn: () => getPizzaOrders(),
    refetchOnWindowFocus: false
  });
