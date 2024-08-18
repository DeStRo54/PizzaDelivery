import { useMutation } from '@tanstack/react-query';

import { patchProfile, PatchProfileConfig } from '../requests/users/profile';

export const useUpdateProfileMutation = () =>
  useMutation({
    mutationKey: ['profile'],
    mutationFn: ({ params, config }: PatchProfileConfig) => patchProfile({ params, config })
  });
