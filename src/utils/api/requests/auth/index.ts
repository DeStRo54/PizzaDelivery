import { api } from '../../instance';

export type PostSignInParams = SignInDto;
export type SignInParams = AxiosRequestConfig<PostSignInParams>;

export const postSignIn = async ({ params, config }: SignInParams) =>
  api.post<SignInResponse>('/users/signin', params, config);
