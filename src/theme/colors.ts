const COLORS = {
  primary: 'rgb(0,0,0)',
  white: 'rgb(255,255,255)',
  transparent: 'transparent',

  black_40: 'rgba(0,0,0,0.4)',
  black_50: 'rgba(0,0,0,0.5)',
  black_60: 'rgba(0,0,0,0.6)',
  black_70: 'rgba(0,0,0,0.7)',
  black_80: 'rgba(0,0,0,0.8)',

  blue: 'rgb(0, 122, 255)',
  gray: 'rgb(159, 159, 159)',
  mutedGray: 'rgb(153, 153, 153)',
  background: 'rgb(249, 249, 249)',
  tertiary: 'rgba(118, 118, 128, 0.12)',
  nonOpaque: 'rgba(60, 60, 67, 0.36)',

  info: 'rgb(255, 215, 0)',
  error: 'rgb(254, 31, 31)',
};

type Color = keyof Colors;
type Colors = typeof COLORS;

export default COLORS;
export type { Color, Colors };
