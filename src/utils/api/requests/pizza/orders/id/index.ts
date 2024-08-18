import { api } from '../../../../instance';

export type GetPizzaOrderParams = {
  id: string;
};

export type GetPizzaOrderConfig = AxiosRequestConfig<GetPizzaOrderParams>;

export const getPizzaOrderById = async ({ params, config }: GetPizzaOrderConfig) =>
  api.get<PizzaOrderResponse>(`/pizza/orders/${params.id}`, config);
