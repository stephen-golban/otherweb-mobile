import React from 'react';
import { ScrollView, ViewProps } from 'react-native';

import styles from '../../style';
import { useTheme } from '../../../../../theme';
import { useStyle } from '../../../../../library/hooks';

import ScreenInset from '../inset';

import type { ScreenComponentProps } from '../../type';
import type { SafeAreaViewProps } from 'react-native-safe-area-context';

function ScreenWithScrolling(Wrapper: React.ComponentType<ViewProps | SafeAreaViewProps>, props: ScreenComponentProps) {
  const S = useStyle(styles);
  const { colors } = useTheme();

  const {
    statusBarStyle,
    bg,
    actualUnsafe,
    children,
    onScroll,
    edges,
    hiddenStatusBar = false,
    statusColor = undefined,
    bottomInsetColor = 'background',
    style = {},
    leftInsetColor = 'background',
    rightInsetColor = 'background',
  } = props;

  return (
    <>
      <Wrapper edges={edges} style={[S.outer]}>
        <ScrollView
          onScroll={onScroll}
          children={children}
          overScrollMode={'never'}
          scrollEventThrottle={16}
          contentContainerStyle={[style]}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={[S.inner, bg ? { backgroundColor: colors[bg] } : {}]}
        />
      </Wrapper>
      <ScreenInset
        edges={edges}
        bottomInsetColor={bottomInsetColor}
        statusColor={statusColor}
        statusBarStyle={statusBarStyle}
        hiddenStatusBar={hiddenStatusBar}
        leftInsetColor={leftInsetColor}
        rightInsetColor={rightInsetColor}
        unsafe={actualUnsafe}
      />
    </>
  );
}

export default ScreenWithScrolling;
