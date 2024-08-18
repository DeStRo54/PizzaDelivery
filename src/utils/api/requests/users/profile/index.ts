import { api } from '../../../instance';

export type PatchProfileParams = UpdateProfileDto;
export type PatchProfileConfig = AxiosRequestConfig<PatchProfileParams>;

export const patchProfile = async ({ params, config }: PatchProfileConfig) =>
  api.patch<UpdateProfileResponse>('/users/profile', params, config);
