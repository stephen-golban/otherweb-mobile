import React from 'react';
import { BaseButton, FilledButton, Form, FormInput, Text, View } from '../../../components/common';

import FastImage from 'react-native-fast-image';
import { useTheme } from '../../../theme';
import ProfileRow from './parts/Profile.Row';
import { User } from '../../../services/user/type';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { PROFILE_SCREENS, ProfileStackParamList } from '../../../typings/navigators';
import { useDispatch } from 'react-redux';

interface IProfileModule {
  data: User;
}

const ProfileModule: React.FC<IProfileModule> = ({ data }) => {
  const { layout } = useTheme();
  const { navigate } = useNavigation<NavigationProp<ProfileStackParamList>>();

  return (
    <View fill p="md">
      <View w={120} h={120} br="round" overflow="hidden" alignSelf="center">
        <FastImage source={{ uri: data.avatar }} style={layout.fullSize} />
        <BaseButton
          onPress={() => navigate(PROFILE_SCREENS.AVATAR_EDIT, { uri: data.avatar, id: data.id })}
          w="100%"
          bg="black_70"
          py="sm"
          center
          position="absolute"
          bottom={0}
          zIndex="xs"
          left={0}
          right={0}>
          <Text variant="12-reg" textTransform="uppercase">
            EDIT
          </Text>
        </BaseButton>
      </View>
      <View mt="lg" br="sm" bg="white" p="sm" px="md">
        <ProfileRow
          title="Username"
          value={data.name}
          onPress={() => navigate(PROFILE_SCREENS.NAME_EDIT, { name: data.name, id: data.id })}
        />
        <ProfileRow
          title="Email"
          value={data.email}
          onPress={() => navigate(PROFILE_SCREENS.EMAIL_EDIT, { email: data.email, id: data.id })}
        />
        <ProfileRow title="Password" isLast onPress={() => navigate(PROFILE_SCREENS.PASSWORD_EDIT, { pwd: data.password, id: data.id })} />
      </View>
    </View>
  );
};

export { ProfileModule };
