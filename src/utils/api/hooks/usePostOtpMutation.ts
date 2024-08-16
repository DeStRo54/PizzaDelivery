import { useMutation } from '@tanstack/react-query';

import { OtpParams, postOtp } from '../requests/otp';

export const usePostOtpMutation = () =>
  useMutation({
    mutationFn: ({ params, config }: OtpParams) => postOtp({ params, config })
  });
