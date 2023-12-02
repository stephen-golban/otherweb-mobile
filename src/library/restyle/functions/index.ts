import {
  opacity,
  shadow,
  position,
  composeRestyleFunctions,
  backgroundColorShorthand,
  type ShadowProps,
  type OpacityProps,
  type PositionProps,
  type BackgroundColorShorthandProps,
} from '@shopify/restyle';

import { border, BorderProps } from './border';
import { layout, LayoutProps } from './layout';
import { spacing, SpacingProps } from './spacing';

import type { AppTheme } from '../../../theme';

type Theme = Omit<AppTheme, 'layout' | 'gutters'>;

type RestyleProps = LayoutProps &
  SpacingProps &
  BorderProps &
  ShadowProps<Theme> &
  OpacityProps<Theme> &
  PositionProps<Theme> &
  BackgroundColorShorthandProps<Theme>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps | any>([
  border,
  layout,
  shadow,
  spacing,
  opacity,
  position,
  backgroundColorShorthand,
]);

export { restyleFunctions };
export type { Theme, RestyleProps };
