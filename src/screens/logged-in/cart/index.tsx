import React from 'react';
import { LOGGED_IN_TABS, LoggedInTabsScreenProps } from '../../../typings/navigators';
import { CartModule } from '../../../modules/logged-in';

const Cart: React.FC<LoggedInTabsScreenProps<LOGGED_IN_TABS.CART>> = ({ navigation }) => {
  return <CartModule />;
};

export { Cart };
