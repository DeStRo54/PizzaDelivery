import { useMutation } from '@tanstack/react-query';

import { postSignIn, SignInParams } from '../requests/users/signin';

export const usePostSignInMutation = () =>
  useMutation({
    mutationFn: async ({ params, config }: SignInParams) => await postSignIn({ params, config })
  });
