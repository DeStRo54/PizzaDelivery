import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { usePostOtpMutation } from '../../../utils/api/hooks/usePostOtpMutation';
import { usePostSignInMutation } from '../../../utils/api/hooks/usePostSignInMutation';
import { LOCALE_STORAGE_KEYS } from '../../../utils/constants';
import { useAppStore } from '../../../utils/store';
import { OtpSheme } from '../constants/OtpShema';
import { PhoneSheme } from '../constants/PhoneShema';

export const useAuthView = () => {
  const [stage, setStage] = useState<'phone' | 'otp'>('phone');
  const [submittedPhones, setSubmittedPhones] = useState<{ [key: string]: number }>({});
  const navigate = useNavigate();
  const authForm = useForm<PhoneSheme | OtpSheme>({
    mode: 'onSubmit',
    defaultValues: {
      phone: '',
      otp: ''
    },
    resolver: zodResolver(stage === 'phone' ? PhoneSheme : OtpSheme)
  });

  const phone = authForm.watch('phone');

  React.useEffect(() => {
    if (stage == 'otp' && phone.length < 11 && !submittedPhones[phone]) {
      setStage('phone');
    }
  }, [phone, stage, submittedPhones]);

  React.useEffect(() => {
    if (phone in submittedPhones) {
      setStage('otp');
    }
  }, [phone, submittedPhones]);

  const postOtpMutation = usePostOtpMutation();
  const postSignInMutation = usePostSignInMutation();

  const sendOtp = async (phone: string) => {
    const postOtpMutationResponse = await postOtpMutation.mutateAsync({ params: { phone } });

    setSubmittedPhones({
      ...submittedPhones,
      [phone]: Date.now() + postOtpMutationResponse.data.retryDelay
    });

    return postOtpMutationResponse.data.retryDelay;
  };

  const onSubmit = authForm.handleSubmit(async (data) => {
    if (stage === 'phone' && 'phone' in data) {
      await sendOtp(data.phone);
      setStage('otp');
    }

    if (stage === 'otp' && 'otp' in data) {
      const postSignInMutationResponse = await postSignInMutation.mutateAsync({ params: { phone, code: +data.otp } });

      if (postSignInMutationResponse.data.reason) {
        return authForm.setError('otp', { message: postSignInMutationResponse.data.reason });
      }

      localStorage.setItem(LOCALE_STORAGE_KEYS.TOKEN, postSignInMutationResponse.data.token);
      useAppStore.setState({ isLoggedIn: true, user: postSignInMutationResponse.data.user });
      navigate('/');
    }
  });

  const onRetry = async () => sendOtp(phone);

  return {
    form: authForm,
    state: { stage, submittedPhones, phone },
    functions: {
      onSubmit,
      onRetry
    }
  };
};
