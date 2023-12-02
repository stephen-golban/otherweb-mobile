import React from 'react';
import { useTheme } from '../../../theme';
import { rxEmail, rxPassword } from '../../../library/regex';
import { FilledButton, Form, FormInput, Screen, Text, View } from '../../../components/common';

interface ILoginModule {
  loading?: boolean;
  onPressLink(): void;
  onSubmit(args: Values): void;
}

const defaultValues = { email: '', password: '' };

type Values = typeof defaultValues;

const LoginModule: React.FC<ILoginModule> = ({ onPressLink, onSubmit, loading }) => {
  const { layout } = useTheme();

  return (
    <Form defaultValues={defaultValues}>
      {({ control, formState, handleSubmit }) => {
        return (
          <Screen style={[layout.fill]} unsafe>
            <View fill center>
              <View w="100%" px="md">
                <FormInput
                  required
                  name="email"
                  control={control}
                  rxFormat={rxEmail}
                  autoCapitalize="none"
                  labelI18n="auth:email"
                  keyboardType="email-address"
                  placeholder="email@example.com"
                />
                <FormInput
                  required
                  name="password"
                  secureTextEntry
                  control={control}
                  placeholder="******"
                  rxFormat={rxPassword}
                  textContentType="password"
                  labelI18n="auth:password"
                />
                <FilledButton
                  onPress={handleSubmit(onSubmit)}
                  loading={loading}
                  disabled={!formState.isValid}
                  t18n="dialog:continue"
                  direction="row"
                  minh={50}
                  center
                />
                <Text t18n="auth:link-to-register" onPress={onPressLink} color="primary" textDecorationLine="underline" mt="md" />
              </View>
            </View>
          </Screen>
        );
      }}
    </Form>
  );
};

export { LoginModule };
