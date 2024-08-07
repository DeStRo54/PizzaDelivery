import { useQuery } from '@tanstack/react-query';

import { getPizzas } from '../requests';

export const useGetPizzasQuery = () =>
  useQuery({
    queryKey: ['pizzas'],
    queryFn: () => getPizzas(),
    refetchOnWindowFocus: false //during development!!!
  });
