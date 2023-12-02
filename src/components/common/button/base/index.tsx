import React from 'react';
import { TouchableOpacity } from 'react-native';

import { View } from '../../view';
import { Text } from '../../text';
import { ActivityIndicator } from '../../activity-indicator';

import { createStyled } from '../../../../library/restyle';

import type { ExtendedButtonProps } from './type';

const _Button = createStyled(TouchableOpacity);

type ButtonProps = React.ComponentProps<typeof _Button> & ExtendedButtonProps;

const BaseButton = (props: ButtonProps) => {
  const { text, t18n, loading, disabled, children, textProps, textColor, ...rest } = props;

  const disabled_btn = React.useMemo<ButtonProps>(() => {
    if (loading || disabled) {
      return { opacity: 0.5, disabled };
    }
    return { disabled };
  }, [loading, disabled]);

  if (loading) {
    return (
      <_Button {...rest} {...disabled_btn} activeOpacity={1}>
        <ActivityIndicator size="small" mr="sm" />
        {children || <Text t18n={t18n} text={text} color={textColor} variant="16-bold" {...textProps} />}
      </_Button>
    );
  }

  return (
    <_Button {...rest} {...disabled_btn} activeOpacity={1}>
      {children || <Text t18n={t18n} text={text} color={textColor} variant="16-bold" {...textProps} />}
    </_Button>
  );
};

export { BaseButton };
export type { ButtonProps };
