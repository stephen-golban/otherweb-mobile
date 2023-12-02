import React from 'react';
import { useTheme } from '../../../../theme';
import FastImage from 'react-native-fast-image';
import { BaseButton, Text, View } from '../../../../components/common';
import { Product } from '../../../../services/products/type';
import { truncate } from 'lodash';

interface IHomeItem extends Product {
  onPress(): void;
}

const HomeItem: React.FC<IHomeItem> = ({ description, images, price, title, onPress }) => {
  const { layout } = useTheme();

  return (
    <BaseButton onPress={onPress} maxh={166}>
      <View
        p="md"
        br="sm"
        mb={10}
        bg="white"
        elevation={2}
        shadowRadius={6}
        shadowOpacity={0.1}
        shadowColor="primary"
        shadowOffset={{ width: 0, height: 2 }}
        direction="row">
        <View fill maxw={150} h="100%">
          <FastImage
            style={layout.fullSize}
            resizeMode={FastImage.resizeMode.cover}
            source={{ uri: images[0], priority: FastImage.priority.high }}
            defaultSource={require('../../../../assets/images/no-image.jpg')}
          />
        </View>
        <View fill ml="lg">
          <Text variant="18-semi" mt="sm" color="primary">
            {title}
          </Text>
          <Text variant="14-med" my="xs" color="gray">
            {truncate(description, { length: 40, omission: '...' })}
          </Text>
          <Text variant="16-semi" mt="sm" color="primary">
            ${price}
          </Text>
        </View>
      </View>
    </BaseButton>
  );
};

export default HomeItem;
