import { api } from '../../../instance';

export type PostSignInParams = SignInDto;
export type PostSignInConfig = AxiosRequestConfig<PostSignInParams>;

export const postSignIn = async ({ params, config }: PostSignInConfig) =>
  api.post<SignInResponse>('/users/signin', params, config);
