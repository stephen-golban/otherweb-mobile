import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { APP_SCREEN, LOGGED_IN_TABS, LoggedInTabsParamList, RootStackScreenProps } from '../../../typings/navigators';

import * as SCREENS from '../../../screens/logged-in';
import { StyleSheet } from 'react-native';
import TabButton from './Tab.Button';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

const Tab = createBottomTabNavigator<LoggedInTabsParamList>();

const LoggedIn: React.FC<RootStackScreenProps<APP_SCREEN.LOGGED_IN>> = () => {
  const { count, items, quantityById } = useSelector((state: RootState) => state.cart);

  const total = items.reduce((sum, item) => {
    const quantity = quantityById[item.id] || 0;
    return sum + item.price * quantity;
  }, 0);

  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false, tabBarStyle: styles.tabBar, title: 'Best Shop' }}>
      <Tab.Screen
        name={LOGGED_IN_TABS.HOME}
        component={SCREENS.Home}
        options={{
          tabBarIcon: ({ focused }) => <TabButton focused={focused} icon="HomeIcon" title={LOGGED_IN_TABS.HOME} />,
        }}
      />
      <Tab.Screen
        name={LOGGED_IN_TABS.PROFILE}
        component={SCREENS.Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabButton focused={focused} icon="UserIcon" title="Profile" />,
        }}
      />
      <Tab.Screen
        name={LOGGED_IN_TABS.CART}
        component={SCREENS.Cart}
        options={{
          title: `Total: $${total}`,
          tabBarIcon: ({ focused }) => <TabButton focused={focused} icon="CartIcon" title={LOGGED_IN_TABS.CART} badgeCount={count} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default LoggedIn;

const styles = StyleSheet.create({
  tabBar: {
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    elevation: 30,
    position: 'absolute',
    borderTopWidth: 0,
  },
});
