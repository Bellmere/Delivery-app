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
  key: 'menu',
  storage,
  whitelist: ['items', 'menuList'],
};


const persistedReducer = persistReducer(persistConfig, MenuSlice.reducer);

export const store = configureStore({
  reducer: {
    menu: persistedReducer, // Change the reducer key to 'menu'
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

