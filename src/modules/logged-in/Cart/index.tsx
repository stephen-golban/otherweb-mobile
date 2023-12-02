import { FlatList } from 'react-native';
import React from 'react';
import { FilledButton, Screen } from '../../../components/common';
import { useTheme } from '../../../theme';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import CartItem from './parts/Cart.Item';

interface ICartModule {}

const CartModule: React.FC<ICartModule> = () => {
  const { spacing } = useTheme();
  const data = useSelector((state: RootState) => state.cart.items);

  return (
    <Screen
      style={{ paddingHorizontal: spacing.md, paddingTop: spacing.zero, flexDirection: 'row', justifyContent: 'space-between' }}
      unsafe>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: spacing.lg }}
        style={{ paddingTop: spacing.lg, marginBottom: spacing.huge }}
        renderItem={({ item }) => <CartItem {...item} />}
      />
      <FilledButton bg="blue" center text="Go to checkout" />
    </Screen>
  );
};

export { CartModule };
