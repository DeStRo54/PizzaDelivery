import { api } from '../../../instance';

export type PostPaymentParams = CreatePizzaPaymentDto;
export type PostPaymentConfig = AxiosRequestConfig<PostPaymentParams>;

export const postPayment = async ({ params, config }: PostPaymentConfig) =>
  api.post<PaymentResponse>('/pizza/payment', params, config);
