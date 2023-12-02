import { apiService } from '../services/api';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cartReducer, userReducer } from './slices';
import { localStorage } from '../library/storage';

const persistConfig = {
  key: 'root',
  storage: localStorage,
  whitelist: ['cart', 'user'],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  [apiService.reducerPath]: apiService.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(apiService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export const hasHydrated = (): boolean => {
  const state = store.getState();
  return state._persist?.rehydrated ?? false;
};

export const persistor = persistStore(store);
