import { api } from '../../../../instance';

export type PutCancelPizzaOrderParams = CancelPizzaOrderDto;

export type PutCancelPizzaOrderConfig = AxiosRequestConfig<PutCancelPizzaOrderParams>;

export const putCancelPizzaOrderById = async ({ params, config }: PutCancelPizzaOrderConfig) =>
  api.put<PizzaOrderResponse>(`/pizza/orders/cancel`, params, config);
