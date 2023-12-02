import React from 'react';
import { useTheme } from '../../../../theme';
import FastImage from 'react-native-fast-image';
import { BaseButton, Text, View } from '../../../../components/common';
import { Product } from '../../../../services/products/type';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { addToProductQuantity, removeFromProductQuantity } from '../../../../store/slices';

interface ICartItem extends Product {}

const CartItem: React.FC<ICartItem> = ({ id, images, price, title }) => {
  const { layout } = useTheme();
  const dispatch = useDispatch();
  const quantity = useSelector((state: RootState) => state.cart.quantityById[id]) || 0;

  return (
    <View
      fill
      px="lg"
      py="xl"
      br={12}
      mb={10}
      bg="white"
      maxh={114}
      elevation={2}
      shadowRadius={6}
      shadowOpacity={0.1}
      shadowColor="primary"
      shadowOffset={{ width: 0, height: 2 }}
      direction="row">
      <View fill maxw={50} maxh={50}>
        <FastImage
          style={layout.fullSize}
          resizeMode={FastImage.resizeMode.contain}
          source={{ uri: images[0], priority: FastImage.priority.high }}
          defaultSource={require('../../../../assets/images/no-image.jpg')}
        />
      </View>
      <View fill ml="lg" direction="row" align="center" justify="space-between">
        <View fill>
          <Text variant="14-semi" color="primary">
            {title}
          </Text>
          <Text variant="16-semi" mt="sm" color="gray">
            ${price}
          </Text>
        </View>
        <View direction="row" align="center" cg="xs">
          <BaseButton onPress={() => dispatch(removeFromProductQuantity(id))} bg="tertiary" center py={6} px={11} br="sm" w={35}>
            <Text color="blue" variant="18-semi">
              -
            </Text>
          </BaseButton>
          <View bg="tertiary" center py={6} px={10} br="sm">
            <Text color="blue" variant="18-semi">
              {quantity}
            </Text>
          </View>
          <BaseButton onPress={() => dispatch(addToProductQuantity(id))} bg="tertiary" center py={6} px={11} br="sm" w={35}>
            <Text color="blue" variant="18-semi">
              +
            </Text>
          </BaseButton>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
