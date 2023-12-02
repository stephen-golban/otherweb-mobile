import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { APP_SCREEN, RootStackScreenProps } from '../index';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';

enum LOGGED_IN_TABS {
  HOME = 'HOME',
  PROFILE = 'PROFILE',
  CART = 'CART',
}

enum PROFILE_SCREENS {
  INDEX = 'INDEX',
  AVATAR_EDIT = 'AVATAR_EDIT',
  NAME_EDIT = 'NAME_EDIT',
  EMAIL_EDIT = 'EMAIL_EDIT',
  PASSWORD_EDIT = 'PASSWORD_EDIT',
}

type LoggedInTabsParamList = {
  [LOGGED_IN_TABS.HOME]: undefined;
  [LOGGED_IN_TABS.CART]: undefined;
  [LOGGED_IN_TABS.PROFILE]: NavigatorScreenParams<ProfileStackParamList>;
};

type ProfileStackParamList = {
  [PROFILE_SCREENS.INDEX]: undefined;
  [PROFILE_SCREENS.NAME_EDIT]: { name: string; id: number };
  [PROFILE_SCREENS.AVATAR_EDIT]: { uri: string; id: number };
  [PROFILE_SCREENS.EMAIL_EDIT]: { email: string; id: number };
  [PROFILE_SCREENS.PASSWORD_EDIT]: { pwd: string; id: number };
};

type ProfileStackScreenProps<T extends keyof ProfileStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<ProfileStackParamList, T>,
  LoggedInTabsScreenProps<LOGGED_IN_TABS.PROFILE>
>;

type LoggedInTabsScreenProps<T extends keyof LoggedInTabsParamList> = CompositeScreenProps<
  BottomTabScreenProps<LoggedInTabsParamList, T>,
  RootStackScreenProps<APP_SCREEN.LOGGED_IN>
>;

export { LOGGED_IN_TABS, PROFILE_SCREENS };
export type { LoggedInTabsParamList, LoggedInTabsScreenProps, ProfileStackParamList, ProfileStackScreenProps };
