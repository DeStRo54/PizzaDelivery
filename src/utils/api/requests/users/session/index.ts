import { api } from '../../../instance';

export type GetUserSessionConfig = AxiosRequestConfig;

export const getUserSession = async (requestConfig?: GetUserSessionConfig) => {
  return api.get<SessionResponse>('/users/session', requestConfig?.config);
};
