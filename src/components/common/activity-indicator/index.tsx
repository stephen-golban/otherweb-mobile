import React from 'react';
import { ActivityIndicator as RNActivityIndicator, type ActivityIndicatorProps as RNActivityIndicatorProps } from 'react-native';

import { createStyled } from '../../../library/restyle';

import type { Color } from '../../../theme/colors';

interface IActivityIndicator extends Omit<RNActivityIndicatorProps, 'color'> {
  color?: Color;
}

const _ActivityIndicator: React.FC<IActivityIndicator> = props => {
  return <RNActivityIndicator {...props} />;
};

const ActivityIndicator = createStyled(_ActivityIndicator);

ActivityIndicator.defaultProps = {
  size: 'large',
};

type ActivityIndicatorProps = React.ComponentProps<typeof ActivityIndicator>;

export { ActivityIndicator, type ActivityIndicatorProps };
