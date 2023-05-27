import { configureStore } from '@reduxjs/toolkit';
import { MenuSlice } from './MenuSlice/MenuSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'food',
  storage,
  whitelist: ['items'],
};

const persistedReducer = persistReducer(persistConfig, MenuSlice.reducer);

export const store = configureStore({
  reducer: {
    food: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
