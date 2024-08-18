import { useMutation } from '@tanstack/react-query';

import { postOtp, PostOtpConfig } from '../requests/auth/otp';

export const usePostOtpMutation = () =>
  useMutation({
    mutationKey: ['otp'],
    mutationFn: ({ params, config }: PostOtpConfig) => postOtp({ params, config })
  });
