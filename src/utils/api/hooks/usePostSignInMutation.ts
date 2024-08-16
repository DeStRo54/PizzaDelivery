import { useMutation } from '@tanstack/react-query';

import { postSignIn, SignInParams } from '../requests/auth';

export const usePostSignInMutation = () =>
  useMutation({
    mutationFn: async ({ params, config }: SignInParams) => await postSignIn({ params, config })
  });
