import React from 'react';
import { RegisterModule } from '../../../modules/logged-out';
import { useRegisterMutation } from '../../../services/api';
import { LOGGED_OUT_SCREENS, LoggedOutStackScreenProps } from '../../../typings/navigators';
import { useToast } from 'react-native-toast-notifications';
import { translate } from '../../../library/i18n';

const RegisterScreen: React.FC<LoggedOutStackScreenProps<LOGGED_OUT_SCREENS.REGISTER>> = ({ navigation }) => {
  const toast = useToast();
  const [register, { isLoading }] = useRegisterMutation();

  const handleRegister = async (newUser: { name: string; email: string; password: string; avatar: string }) => {
    try {
      const response = await register(newUser).unwrap();
      if (response) {
        toast.show(translate('validation:success'), { type: 'success' });
        return navigation.navigate(LOGGED_OUT_SCREENS.LOGIN);
      }
    } catch (error: any) {
      toast.show(error?.data.message || 'An unexpected error occurred', { type: 'danger' });
    }
  };

  return <RegisterModule loading={isLoading} onSubmit={handleRegister} onPressLink={() => navigation.navigate(LOGGED_OUT_SCREENS.LOGIN)} />;
};

export { RegisterScreen };
