import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LOGGED_IN_TABS, LoggedInTabsScreenProps, PROFILE_SCREENS, ProfileStackParamList } from '../../../typings/navigators';
import { Index } from './index';
import AvatarEdit from './Avatar.Edit';
import NameEdit from './Name.Edit';
import EmailEdit from './Email.Edit';
import PasswordEdit from './Password.Edit';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const Profile: React.FC<LoggedInTabsScreenProps<LOGGED_IN_TABS.PROFILE>> = () => {
  return (
    <Stack.Navigator screenOptions={{ title: 'Account', headerBackTitle: 'Back' }}>
      <Stack.Screen name={PROFILE_SCREENS.INDEX} component={Index} />
      <Stack.Screen name={PROFILE_SCREENS.AVATAR_EDIT} component={AvatarEdit} />
      <Stack.Screen name={PROFILE_SCREENS.NAME_EDIT} component={NameEdit} />
      <Stack.Screen name={PROFILE_SCREENS.EMAIL_EDIT} component={EmailEdit} />
      <Stack.Screen name={PROFILE_SCREENS.PASSWORD_EDIT} component={PasswordEdit} />
    </Stack.Navigator>
  );
};

export { Profile };
