import { useQuery } from '@tanstack/react-query';

import { getPizzas } from '../requests/pizza/catalog';

export const useGetPizzasQuery = () =>
  useQuery({
    queryKey: ['getPizzas'],
    queryFn: () => getPizzas(),
    refetchOnWindowFocus: false //during development!!!
  });
