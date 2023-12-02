import { ReactNode } from 'react';

import { UseFormTrigger } from 'react-hook-form';
import { TextInputProps as RNTextInputProps } from 'react-native';
import { I18nKeys } from '../../../library/i18n';
import { Color } from '../../../theme/colors';

export type ErrorLineProps = {
  error: boolean;
  disabled: boolean;
};

export type FocusedLineProps = {
  focused: boolean;
  disabled: boolean;
};

export type TextInputProps = RNTextInputProps & {
  /**
   * Format text before call onChangeText function
   * @default undefined
   */
  rxFormat?: RegExp;

  /**
   * Trigger name field of react hook form
   * @default undefined
   */
  nameTrigger?: string;

  /**
   * Call trigger react hook form
   * @default undefined
   */
  trigger?: UseFormTrigger<any>;

  /**
   * Translate placeholder by I18n
   * @default undefined
   */
  placeholderI18n?: I18nKeys;

  /**
   * Fill placeholder color by Theme
   * @default undefined
   */
  placeholderTextColorTheme?: Color;

  /**
   * Children right input.(ex:Icon show/hide password)
   */
  rightChildren?: ReactNode;

  /**
   * Invalid input or not
   * @default false
   */
  error?: boolean;
} & LabelProps;

export type LabelProps = {
  /**
   * Label of text input
   */
  label?: string;

  /**
   * Translate label by I18n
   * @default undefined
   */
  labelI18n?: I18nKeys;

  /**
   * Add red dot right label or not
   * @default false
   */
  required?: boolean;
};
