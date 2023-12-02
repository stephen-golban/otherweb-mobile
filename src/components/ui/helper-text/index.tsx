import React, { useEffect, useState } from 'react';
import { Animated, LayoutChangeEvent, LayoutRectangle, StyleProp, TextStyle, ViewStyle } from 'react-native';

import { useTheme } from '../../../theme';

import { Text, View } from '../../common';

import type { HelperTextProps } from './type';

const HelperText: React.FC<HelperTextProps> = ({ msg, type, colorInfo = 'info', colorError = 'error', visible = false }) => {
  const theme = useTheme();

  const [currentMessage, setCurrentMessage] = useState<string>(msg ?? '');
  const [measured, setMeasured] = useState<LayoutRectangle>({ height: 0, width: 0, x: 0, y: 0 });

  const height = new Animated.Value(0);
  const opacity = new Animated.Value(0);

  useEffect(() => {
    setCurrentMessage(msg);
  }, [msg]);

  useEffect(() => {
    Animated.timing(height, {
      toValue: visible ? measured.height : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();

    Animated.timing(opacity, {
      toValue: visible ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [visible, measured.height]);

  const _onLayoutContent = (e: LayoutChangeEvent) => {
    setMeasured({ ...e.nativeEvent.layout });
  };

  const textStyle: StyleProp<TextStyle> = [{ height: measured.height, color: theme.colors[type === 'error' ? colorError : colorInfo] }];

  const animatedStyle = {
    height: height,
    opacity: opacity,
  };

  return (
    <View pt={3} pb="xs" justify="center" align="flex-start" w="100%" overflow="hidden">
      <View pointerEvents={'none'} onLayout={_onLayoutContent} style={{ position: 'absolute', zIndex: -999, opacity: 0 }}>
        <Text>{currentMessage}</Text>
      </View>
      <Animated.View style={animatedStyle}>
        <Text style={textStyle}>{currentMessage}</Text>
      </Animated.View>
    </View>
  );
};

export { HelperText };
