import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useUpdateProfileMutation } from '../../../utils/api/hooks/useUpdateProfileMutation';
import { useAppStore } from '../../../utils/store';
import { UserSheme } from '../constants/ProfileSheme';

export const useProfileView = () => {
  const { user, setUser } = useAppStore();
  const navigate = useNavigate();

  const profileForm = useForm<UserSheme>({
    defaultValues: user as Person,
    resolver: zodResolver(UserSheme)
  });

  const updateProfileMutation = useUpdateProfileMutation();

  const onSubmit = profileForm.handleSubmit(async (data) => {
    const updateProfileMutationResponse = await updateProfileMutation.mutateAsync({
      params: {
        profile: {
          firstname: data.firstname,
          lastname: data.lastname,
          middlename: data.middlename,
          email: data.email,
          city: data.city
        },
        phone: user.phone
      }
    });

    if (updateProfileMutationResponse.data.reason) {
      return profileForm.setError('phone', { message: updateProfileMutationResponse.data.reason });
    }

    setUser(data);
    useAppStore.setState({ deliveryInfo: { ...data, adress: data.city } });
    navigate('/');
  });

  return {
    form: profileForm,
    state: { loading: profileForm.formState.isSubmitting },
    functions: {
      onSubmit
    }
  };
};
