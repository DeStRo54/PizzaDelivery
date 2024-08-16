import { api } from '../../instance';

export type UserSessionParams = AxiosRequestConfig;

export const getUserSession = async (requestConfig?: UserSessionParams) => {
  return api.get<SessionResponse>('/users/session', requestConfig?.config);
};
