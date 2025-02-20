import { api } from '../../../instance';

export type PostOtpParams = CreateOtpDto;
export type PostOtpConfig = AxiosRequestConfig<PostOtpParams>;

export const postOtp = async ({ params, config }: PostOtpConfig) => api.post<OtpResponse>('/auth/otp', params, config);
