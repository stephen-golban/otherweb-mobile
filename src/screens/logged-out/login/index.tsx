import React from 'react';

import { useLogin } from './hooks';

import { LoginModule } from '../../../modules/logged-out';

import { LOGGED_OUT_SCREENS, LoggedOutStackScreenProps } from '../../../typings/navigators';

const LoginScreen: React.FC<LoggedOutStackScreenProps<LOGGED_OUT_SCREENS.LOGIN>> = ({ navigation }) => {
  const { handleLogin, isLoading } = useLogin(navigation);

  return <LoginModule loading={isLoading} onSubmit={handleLogin} onPressLink={() => navigation.navigate(LOGGED_OUT_SCREENS.REGISTER)} />;
};

export { LoginScreen };
