import React from 'react';
import { FilledButton, Form, FormInput, View } from '../../../components/common';
import { PROFILE_SCREENS, ProfileStackScreenProps } from '../../../typings/navigators';
import { useUpdateUserMutation } from '../../../services/api';
import { useToast } from 'react-native-toast-notifications';
import { rxPassword } from '../../../library/regex';

const PasswordEdit: React.FC<ProfileStackScreenProps<PROFILE_SCREENS.PASSWORD_EDIT>> = ({ route, navigation }) => {
  const { pwd, id } = route.params;
  const toast = useToast();

  const [update, { isLoading }] = useUpdateUserMutation();

  async function onSubmit(data: { new_password: string }) {
    try {
      const res = await update({ id, password: data.new_password });
      if (res) {
        toast.show('Updated successfully');
        navigation.goBack();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form defaultValues={{ old_password: pwd, new_password: '' }}>
      {({ control, formState, handleSubmit, watch }) => {
        return (
          <View px="md">
            <FormInput label="Old password" name="old_password" control={control} required rxFormat={rxPassword} secureTextEntry />
            <FormInput
              label="New password"
              name="new_password"
              control={control}
              required
              rxFormat={rxPassword}
              secureTextEntry
              rules={{ validate: (val: string) => val !== watch('old_password') || 'The passwords are the same' }}
            />
            <FilledButton
              mt="md"
              bg="blue"
              onPress={handleSubmit(onSubmit)}
              center
              direction="row"
              loading={isLoading}
              disabled={!formState.isValid}
              t18n="dialog:continue"
            />
          </View>
        );
      }}
    </Form>
  );
};

export default PasswordEdit;
