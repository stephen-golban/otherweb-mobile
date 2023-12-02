import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../services/user/type';

interface UserState {
  isAuthenticated: boolean;
  profile: User;
}

const initialState: UserState = {
  isAuthenticated: false,
  profile: {
    email: '',
    password: '',
    name: '',
    avatar: '',
    role: '',
    id: 0,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<User>) {
      state.profile = action.payload;
    },
    setIsAuthenticated(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setProfile, setIsAuthenticated } = userSlice.actions;
export default userSlice.reducer;
