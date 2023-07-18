import { configureStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from '@redux-devtools/extension';
import authSlice from 'redux/auth/authSlice';
import recipesSlice from './recipes/recipesSlice';
import searchSlice from './search/searchSlice';
import ingredientsSlice from './ingredients/ingredientsSlice';
import shoppingListSlice from './shopping-list/shoppingListSlice'
import themeSlice from './theme/themeSlice';

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

const enhancer = devToolsEnhancer();

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const themePersistConfig = {
  key: 'theme',
  storage,
};

const store = configureStore(
  {
    reducer: {
      auth: persistReducer(persistConfig, authSlice),
      recipes: recipesSlice,
      search: searchSlice,
      ingredients: ingredientsSlice,
      products: shoppingListSlice,
      theme: persistReducer(themePersistConfig, themeSlice),
    },
    middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    ],
  },
  enhancer
);

export const persistor = persistStore(store);
export default store;
