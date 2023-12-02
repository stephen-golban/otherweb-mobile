import React from 'react';
import { StatusBar } from 'react-native';

import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from '@shopify/restyle';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastProvider } from 'react-native-toast-notifications';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { THEME } from './src/theme';
import { persistor, store } from './src/store';
import { internationalization } from './src/library/i18n';

import ApplicationNavigator from './src/navigators';

const MyApp = () => {
  return (
    <SafeAreaProvider>
      <ToastProvider>
        <ThemeProvider theme={THEME['light']}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <StatusBar translucent backgroundColor={'transparent'} />
              <I18nextProvider i18n={internationalization}>
                <ApplicationNavigator />
              </I18nextProvider>
            </PersistGate>
          </Provider>
        </ThemeProvider>
      </ToastProvider>
    </SafeAreaProvider>
  );
};

export default MyApp;
