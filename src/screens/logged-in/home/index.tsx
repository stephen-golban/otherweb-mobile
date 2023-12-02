import React from 'react';
import { LOGGED_IN_TABS, LoggedInTabsScreenProps } from '../../../typings/navigators';
import { useGetProductsQuery } from '../../../services/api';
import { HomeModule } from '../../../modules/logged-in';
import { useDispatch } from 'react-redux';
import { Product } from '../../../services/products/type';
import { setCart } from '../../../store/slices';

const Home: React.FC<LoggedInTabsScreenProps<LOGGED_IN_TABS.HOME>> = ({ navigation }) => {
  const { isLoading, refetch, data } = useGetProductsQuery();
  const dispatch = useDispatch();

  function onPressItem(item: Product) {
    return dispatch(setCart(item));
  }

  return <HomeModule data={data} onPressItem={onPressItem} refetch={refetch} loading={isLoading} />;
};

export { Home };
