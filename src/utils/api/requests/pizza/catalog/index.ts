import { api } from '../../../instance';

export type GetPizzasCatalogConfig = AxiosRequestConfig;

export const getPizzasCatalog = async (requestConfig?: GetPizzasCatalogConfig) =>
  api.get<PizzasResponse>(`/pizza/catalog`, requestConfig?.config);
