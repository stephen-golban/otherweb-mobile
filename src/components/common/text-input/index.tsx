import React from 'react';
import { TextInput as RNTextInput } from 'react-native';

import { useTranslation } from 'react-i18next';

import style from './style';
import type { TextInputProps } from './type';
import TextInputLabel from './parts/Input.Label';
import useTextInput from './hooks';
import { View } from '../view';
import { useTheme } from '../../../theme';
import { useStyle } from '../../../library/hooks';

const TextInput = React.forwardRef((props: TextInputProps, ref: React.ForwardedRef<RNTextInput>) => {
  const {
    error,
    label,
    required,
    editable,
    rxFormat,
    labelI18n,
    multiline,
    placeholder,
    nameTrigger,
    rightChildren,
    placeholderI18n,
    placeholderTextColor,
    placeholderTextColorTheme,
    onBlur,
    trigger,
    onFocus,
    onChangeText,
    ...rest
  } = props;

  const [t] = useTranslation();
  const { colors } = useTheme();
  const styles = useStyle(style);
  const { fns, vars } = useTextInput({ error, onBlur, trigger, onFocus, onChangeText, rxFormat, nameTrigger, editable });

  const placeholderColor = React.useMemo(() => {
    if (!editable) {
      return colors.mutedGray;
    }
    return placeholderTextColor || (placeholderTextColorTheme && colors[placeholderTextColorTheme]);
  }, [editable, placeholderTextColor]);

  return (
    <>
      <TextInputLabel label={label} labelI18n={labelI18n} required={required} />
      <View style={[styles.containerInput, vars.containerRestyle]}>
        <RNTextInput
          {...rest}
          ref={ref}
          editable={editable}
          autoCorrect={false}
          spellCheck={false}
          multiline={multiline}
          onBlur={fns.handleBlur}
          clearButtonMode={'never'}
          onFocus={fns.handleFocus}
          selectionColor={colors.primary}
          onChangeText={fns.handleTextChange}
          underlineColorAndroid={'transparent'}
          placeholderTextColor={placeholderColor}
          style={[styles.input, multiline && styles.multiline]}
          placeholder={placeholder || (placeholderI18n && t(placeholderI18n))}
        />
        {rightChildren}
      </View>
    </>
  );
});

export { TextInput };
export type { TextInputProps };
