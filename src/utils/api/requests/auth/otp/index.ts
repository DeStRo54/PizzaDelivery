import { api } from '../../../instance';

export type PostOtpParams = CreateOtpDto;
export type OtpParams = AxiosRequestConfig<PostOtpParams>;

export const postOtp = async ({ params, config }: OtpParams) => api.post<OtpResponse>('/auth/otp', params, config);
