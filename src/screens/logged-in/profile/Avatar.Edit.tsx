import React from 'react';
import { FilledButton, Form, FormInput, View } from '../../../components/common';
import { PROFILE_SCREENS, ProfileStackScreenProps } from '../../../typings/navigators';
import { useUpdateUserMutation } from '../../../services/api';
import { useToast } from 'react-native-toast-notifications';

const AvatarEdit: React.FC<ProfileStackScreenProps<PROFILE_SCREENS.AVATAR_EDIT>> = ({ route, navigation }) => {
  const { uri, id } = route.params;
  const toast = useToast();

  const [update, { isLoading }] = useUpdateUserMutation();

  async function onSubmit(data: { uri: string }) {
    try {
      const res = await update({ id, avatar: data.uri });
      if (res) {
        toast.show('Updated successfully');
        navigation.goBack();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form defaultValues={{ uri }}>
      {({ control, formState, handleSubmit }) => {
        return (
          <View px="md">
            <FormInput label="Avatar" name="uri" control={control} required />
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

export default AvatarEdit;
