import React from 'react';
import * as Icons from '../../../components/icons';
import { Text, View } from '../../../components/common';
import { useTheme } from '../../../theme';
import { capitalize } from 'lodash';

interface ITabButton {
  icon: string;
  focused: boolean;
  title: string;
  badgeCount?: number;
}

const TabButton: React.FC<ITabButton> = ({ focused, icon, title, badgeCount }) => {
  const { colors } = useTheme();
  const Icon = Icons[icon as keyof typeof Icons];

  const hasBadge = !!badgeCount;

  return (
    <View center>
      <Icon color={focused ? colors.blue : colors.mutedGray} />
      <Text variant="12-reg" color={focused ? 'blue' : 'mutedGray'} mt="xs">
        {capitalize(title.toLowerCase())}
      </Text>
      {hasBadge && (
        <View position="absolute" right={-8} top={-5} bg="error" br={8} w={14} h={14} center>
          <Text variant="10-med">{badgeCount?.toString()}</Text>
        </View>
      )}
    </View>
  );
};

export default TabButton;
