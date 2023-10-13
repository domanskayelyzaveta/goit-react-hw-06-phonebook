import { configureStore } from '@reduxjs/toolkit';
import { phoneBookReducer } from './phoneBookReducer';

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

const phonebookPersistConfig = {
  key: 'phoneBook',
  storage,
  whitelist: ['contacts'],
};

const store = configureStore({
  reducer: {
    phoneBook: persistReducer(phonebookPersistConfig, phoneBookReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
