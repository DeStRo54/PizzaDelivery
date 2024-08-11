import { useQuery } from '@tanstack/react-query';

import { getPizzas } from '../requests';

export const useGetPizzasQuery = () =>
  useQuery({
    queryKey: ['getPizzas'],
    queryFn: () => getPizzas(),
    refetchOnWindowFocus: false //during development!!!
  });
