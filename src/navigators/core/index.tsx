import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoggedIn from './logged-in';
import LoggedOut from './logged-out';

import { APP_SCREEN, type RootStackParamList } from '../../typings/navigators';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Group>
          <Stack.Screen name={APP_SCREEN.LOGGED_IN} component={LoggedIn} />
        </Stack.Group>
      ) : (
        <Stack.Group screenOptions={{ freezeOnBlur: true }}>
          <Stack.Screen name={APP_SCREEN.LOGGED_OUT} component={LoggedOut} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
