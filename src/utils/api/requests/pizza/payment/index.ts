import { api } from '../../../instance';

export type PostPaymentParams = CreatePizzaPaymentDto;
export type PaymentParams = AxiosRequestConfig<PostPaymentParams>;

export const postPayment = async ({ params, config }: PaymentParams) =>
  api.post<PaymentResponse>('/pizza/payment', params, config);
