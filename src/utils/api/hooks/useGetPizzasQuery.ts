import { useQuery } from '@tanstack/react-query';

import { getPizzasCatalog } from '../requests/pizza/catalog';

export const useGetPizzasQuery = () =>
  useQuery({
    queryKey: ['getPizzas'],
    queryFn: () => getPizzasCatalog(),
    refetchOnWindowFocus: false //during development!!!
  });
