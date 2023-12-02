import LAYOUT from '../../theme/layout';

import type { RestyleExtendedProps } from './type';
import type { RNStyleProperty } from '@shopify/restyle';

export const getKeys = <T extends { [key: string]: any }>(object: T) => Object.keys(object) as (keyof T)[];

export const transformExtendedPropsToStyles = (props: RestyleExtendedProps) => {
  return [
    props.fill && LAYOUT.fill,
    props.center && LAYOUT.center,
    props.fullSize && LAYOUT.fullSize,
    props.absoluteFill && LAYOUT.absoluteFill,
  ];
};

export const transformProperty = <T extends Record<string, any>>(obj: T, property: keyof T) => {
  const value = obj[property];

  const styleProperty = (typeof value === 'boolean' ? property : value) as RNStyleProperty;
  return { property, styleProperty };
};
