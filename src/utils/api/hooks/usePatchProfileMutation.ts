import { useMutation } from '@tanstack/react-query';

import { patchProfile, ProfileParams } from '../requests/users/profile';

export const usePatchProfileMutation = () =>
  useMutation({
    mutationKey: ['profile'],
    mutationFn: ({ params, config }: ProfileParams) => patchProfile({ params, config })
  });
