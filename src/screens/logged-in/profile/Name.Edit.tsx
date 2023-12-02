import React from 'react';
import { FilledButton, Form, FormInput, View } from '../../../components/common';
import { PROFILE_SCREENS, ProfileStackScreenProps } from '../../../typings/navigators';
import { useUpdateUserMutation } from '../../../services/api';
import { useToast } from 'react-native-toast-notifications';

const NameEdit: React.FC<ProfileStackScreenProps<PROFILE_SCREENS.NAME_EDIT>> = ({ route, navigation }) => {
  const { name, id } = route.params;
  const toast = useToast();

  const [update, { isLoading }] = useUpdateUserMutation();

  async function onSubmit(data: { name: string }) {
    try {
      const res = await update({ id, name: data.name });
      if (res) {
        toast.show('Updated successfully');
        navigation.goBack();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form defaultValues={{ name }}>
      {({ control, formState, handleSubmit }) => {
        return (
          <View px="md">
            <FormInput label="Name" name="name" control={control} required />
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

export default NameEdit;
