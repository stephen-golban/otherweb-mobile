import { useState, useEffect } from 'react';
import { execFunc } from '../../../../library/method';
import { useTheme } from '../../../../theme';
import type { TextInputProps } from '../type';
import type { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';

type Props = Pick<TextInputProps, 'error' | 'editable' | 'rxFormat' | 'trigger' | 'nameTrigger' | 'onFocus' | 'onBlur' | 'onChangeText'>;

export default function useTextInput(props: Props) {
  const { editable, error, nameTrigger, onBlur, onFocus, rxFormat, trigger, onChangeText } = props;
  const { colors } = useTheme();

  const [focused, setFocused] = useState(false);
  const [disabled, setDisabled] = useState(editable === false);
  const [errorValue, setErrorValue] = useState(error === true);
  const [borderColor, setBorderColor] = useState(colors.primary);

  useEffect(() => {
    setDisabled(editable === false);
    setErrorValue(error === true);
  }, [editable, error]);

  useEffect(() => {
    if (disabled) {
      setBorderColor(colors.mutedGray);
    } else if (errorValue) {
      setBorderColor(colors.error);
    } else if (focused) {
      setBorderColor(colors.primary);
    } else {
      setBorderColor(colors.primary);
    }
  }, [focused, disabled, errorValue, colors]);

  function handleTextChange(text: string) {
    execFunc(onChangeText, text);
  }

  function handleFocus(e: NativeSyntheticEvent<TextInputFocusEventData>) {
    setFocused(true);
    execFunc(onFocus, e);
  }

  function handleBlur(e: NativeSyntheticEvent<TextInputFocusEventData>) {
    setFocused(false);
    execFunc(onBlur, e);
  }

  const containerRestyle = {
    borderColor: borderColor,
  };

  return {
    vars: {
      disabled,
      errorValue,
      borderColor,
      focused,
      containerRestyle,
    },
    fns: {
      handleBlur,
      handleFocus,
      handleTextChange,
    },
  };
}
