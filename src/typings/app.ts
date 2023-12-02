import type { ThemeType } from '@theme/index';

export interface IAppState {
  firstTime: boolean;

  asGuest: boolean;

  token: string | undefined;

  loadingApp: boolean;

  theme: ThemeType;

  locale: 'en' | 'ru' | 'ro';
}
