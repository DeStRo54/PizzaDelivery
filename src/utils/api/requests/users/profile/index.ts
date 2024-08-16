import { api } from '../../../instance';

export type PatchProfileParams = UpdateProfileDto;
export type ProfileParams = AxiosRequestConfig<PatchProfileParams>;

export const patchProfile = async ({ params, config }: ProfileParams) =>
  api.patch<UpdateProfileResponse>('/users/profile', params, config);
