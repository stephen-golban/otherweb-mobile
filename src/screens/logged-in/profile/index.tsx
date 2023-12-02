import React from 'react';
import { useGetProfileQuery } from '../../../services/api';
import { loadString } from '../../../library/storage';
import { ProfileModule } from '../../../modules/logged-in';
import { ActivityIndicator, View } from '../../../components/common';
import { PROFILE_SCREENS, ProfileStackScreenProps } from '../../../typings/navigators';
import { useFocusEffect } from '@react-navigation/core';

const Index: React.FC<ProfileStackScreenProps<PROFILE_SCREENS.INDEX>> = () => {
  const { data, isLoading, refetch } = useGetProfileQuery(loadString('token')!, { skip: false });

  useFocusEffect(
    React.useCallback(() => {
      refetch();
    }, [refetch]),
  );

  if (isLoading || !data) {
    return (
      <View center>
        <ActivityIndicator />
      </View>
    );
  }

  return <ProfileModule data={data} />;
};

export { Index };
