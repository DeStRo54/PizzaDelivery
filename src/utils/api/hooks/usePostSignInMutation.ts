import { useMutation } from '@tanstack/react-query';

import { postSignIn, PostSignInConfig } from '../requests/users/signin';

export const usePostSignInMutation = () =>
  useMutation({
    mutationKey: ['signin'],
    mutationFn: async ({ params, config }: PostSignInConfig) => await postSignIn({ params, config })
  });
