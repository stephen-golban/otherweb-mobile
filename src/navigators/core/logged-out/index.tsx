import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Screen } from '../../../components/common';
import * as SCREENS from '../../../screens/logged-out';
import { APP_SCREEN, LOGGED_OUT_SCREENS, LoggedOutStackParamList, RootStackScreenProps } from '../../../typings/navigators';

const Stack = createNativeStackNavigator<LoggedOutStackParamList>();

const LoggedOut: React.FC<RootStackScreenProps<APP_SCREEN.LOGGED_OUT>> = () => {
  return (
    <Screen bg="background" bottomInsetColor="white" excludeEdges={['bottom']}>
      <Stack.Navigator>
        <Stack.Screen name={LOGGED_OUT_SCREENS.LOGIN} component={SCREENS.LoginScreen} />
        <Stack.Screen name={LOGGED_OUT_SCREENS.REGISTER} component={SCREENS.RegisterScreen} />
      </Stack.Navigator>
    </Screen>
  );
};

export default LoggedOut;
