import { I18nKeys } from '../library/i18n';

export type CustomOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type ValidateMessageObject = {
  keyT: I18nKeys;
  optionsTx?: Record<string, I18nKeys>;
  options?: Record<string, string | number>;
};
