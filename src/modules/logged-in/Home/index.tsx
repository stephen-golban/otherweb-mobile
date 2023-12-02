import { FlatList } from 'react-native';
import React from 'react';
import { Product } from '../../../services/products/type';
import HomeItem from './parts/Home.Item';
import { Screen } from '../../../components/common';
import { useTheme } from '../../../theme';

interface IHomeModule {
  refetch(): void;
  data?: Product[];
  loading?: boolean;
  onPressItem(item: Product): void;
}

const HomeModule: React.FC<IHomeModule> = ({ data, onPressItem, refetch, loading }) => {
  const { spacing } = useTheme();

  return (
    <Screen style={{ paddingHorizontal: spacing.md, paddingTop: spacing.zero }} unsafe>
      <FlatList
        data={data}
        onRefresh={refetch}
        refreshing={loading}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <HomeItem {...item} onPress={() => onPressItem(item)} />}
        style={{ paddingTop: spacing.lg, marginBottom: spacing.huge }}
        contentContainerStyle={{ paddingBottom: spacing.lg }}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
};

export { HomeModule };
