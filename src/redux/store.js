import { configureStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from '@redux-devtools/extension';
import authSlice from 'redux/auth/authSlice';
import recipesSlice from './recipes/recipesSlice';
import ingredientsSlice from './ingredients/ingredientsSlice';

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
import { shoppingListApi } from './shopping-list/productsSlice';

const enhancer = devToolsEnhancer();

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore(
  {
    reducer: {
      auth: persistReducer(persistConfig, authSlice),
      recipes: recipesSlice,
      ingredients: ingredientsSlice,
		[shoppingListApi.reducerPath]: shoppingListApi.reducer,
    },
    middleware: getDefaultMiddleware => [
		...getDefaultMiddleware({
			serializableCheck: {
			  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		 }),
		 shoppingListApi.middleware,

	 ]
      
		
  },
  enhancer
);

export const persistor = persistStore(store);
export default store;
