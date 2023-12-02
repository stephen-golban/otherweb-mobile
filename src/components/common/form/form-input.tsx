import React from 'react';

import { Controller, UseControllerProps } from 'react-hook-form';

import type { TextInput as RNTextInput } from 'react-native';
import { TextInput, TextInputProps } from '../text-input';
import { View } from '../view';
import { Text } from '../text';
import { translate } from '../../../library/i18n';

type FormInputProps<T extends object> = TextInputProps & UseControllerProps<T> & { showError?: boolean };

const FormInputInner = <T extends object>(props: FormInputProps<T>, ref: React.ForwardedRef<RNTextInput>) => {
  const { control, name, rules, defaultValue, shouldUnregister, showError = true, ...inputProps } = props;

  const newRules = {
    required: { value: !!inputProps.required, message: translate('validation:required') },
    pattern: { value: inputProps.rxFormat, message: translate(inputProps.secureTextEntry ? 'validation:password' : 'validation:invalid') },
    ...rules,
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={newRules as any}
      defaultValue={defaultValue}
      shouldUnregister={shouldUnregister}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <View mb="sm" position="relative">
          <TextInput value={value} onBlur={onBlur} onChangeText={onChange} {...inputProps} ref={ref} />
          {showError && error && (
            <Text variant="10-med" mt="xs" color="error">
              {error.message}
            </Text>
          )}
        </View>
      )}
    />
  );
};

const FormInput = React.forwardRef(FormInputInner) as unknown as <T extends object>(
  props: FormInputProps<T> & { ref?: React.ForwardedRef<RNTextInput> },
) => ReturnType<typeof FormInputInner>;

export { FormInput };
