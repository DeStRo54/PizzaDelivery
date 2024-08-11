import { api } from '../../instance';

export type PizzasParams = AxiosRequestConfig;

export const getPizzas = async (requestConfig?: PizzasParams) =>
  api.get<PizzasResponse>(`/pizza/catalog`, requestConfig?.config);
