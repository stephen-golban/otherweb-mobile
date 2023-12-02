import React from 'react';
import { BaseButton, Text, View } from '../../../../components/common';
import { ChevronIcon } from '../../../../components/icons';

interface IProfileRow {
  title: string;
  value?: string;
  isLast?: boolean;
  onPress?(): void;
}

const ProfileRow: React.FC<IProfileRow> = ({ title, value, isLast, onPress }) => {
  return (
    <BaseButton direction="row" align="center" bbw={isLast ? 0 : 1} bbc={isLast ? 'transparent' : 'mutedGray'} onPress={onPress} h={60}>
      <View fill>
        <Text variant="16-semi" color="primary">
          {title}
        </Text>
        {value && (
          <Text variant="14-reg" color="gray" mt="sm">
            {value}
          </Text>
        )}
      </View>
      <ChevronIcon style={{ marginLeft: 10 }} />
    </BaseButton>
  );
};

export default ProfileRow;
