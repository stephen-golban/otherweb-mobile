import React from 'react';
import { FilledButton, Form, FormInput, View } from '../../../components/common';
import { PROFILE_SCREENS, ProfileStackScreenProps } from '../../../typings/navigators';
import { useUpdateUserMutation } from '../../../services/api';
import { useToast } from 'react-native-toast-notifications';
import { rxEmail } from '../../../library/regex';

const EmailEdit: React.FC<ProfileStackScreenProps<PROFILE_SCREENS.EMAIL_EDIT>> = ({ route, navigation }) => {
  const { email, id } = route.params;
  const toast = useToast();

  const [update, { isLoading }] = useUpdateUserMutation();

  async function onSubmit(data: { email: string }) {
    try {
      const res = await update({ id, email: data.email });
      if (res) {
        toast.show('Updated successfully');
        navigation.goBack();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form defaultValues={{ email }}>
      {({ control, formState, handleSubmit }) => {
        return (
          <View px="md">
            <FormInput label="Email" name="email" control={control} required rxFormat={rxEmail} keyboardType="email-address" />
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

export default EmailEdit;
