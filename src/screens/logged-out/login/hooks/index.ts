import { useDispatch } from 'react-redux';
import { saveString } from '../../../../library/storage';
import { useLoginMutation } from '../../../../services/api';
import { useToast } from 'react-native-toast-notifications';
import { setIsAuthenticated } from '../../../../store/slices';
import { APP_SCREEN, LOGGED_IN_TABS, LOGGED_OUT_SCREENS, LoggedOutStackScreenProps } from '../../../../typings/navigators';

export function useLogin(navigation: LoggedOutStackScreenProps<LOGGED_OUT_SCREENS.LOGIN>['navigation']) {
  const toast = useToast();

  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (credentials: { email: string; password: string }) => {
    try {
      const response = await login(credentials).unwrap();
      if (response) {
        dispatch(setIsAuthenticated(true));
        saveString('token', response.access_token);
        return navigation.navigate(APP_SCREEN.LOGGED_IN, { screen: LOGGED_IN_TABS.HOME });
      }
    } catch (error: any) {
      toast.show(error?.data.message || 'An unexpected error occurred', { type: 'danger' });
    }
  };

  return { isLoading, handleLogin };
}
