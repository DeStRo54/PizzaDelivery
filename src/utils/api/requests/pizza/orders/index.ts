import { api } from '../../../instance';

export type GetPizzaOrdersConfig = AxiosRequestConfig;

export const getPizzaOrders = async (requestConfig?: GetPizzaOrdersConfig) =>
  api.get<PizzaOrdersResponse>('/pizza/orders', requestConfig?.config);
