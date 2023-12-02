import React from 'react';

import RootNavigator from './core';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, View } from '../components/common';

import { hasHydrated } from '../store';

const ApplicationNavigator = () => {
  const _hasHydrated = hasHydrated();

  if (!_hasHydrated) {
    return (
      <View center absoluteFill bg="background" zIndex={999}>
        <ActivityIndicator color="error" size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
