import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shoppingListApi = createApi({
  reducerPath: 'shopping-list',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://database-cli.onrender.com/so-yummy',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['ShoppingList'],
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => '/ingredients/shopping-list',
      providesTags: ['ShoppingList'],
    }),


    addProduct: builder.mutation({
      query: values => ({
        url: '/ingredients/shopping-list/add-ingredient',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['ShoppingList'],
    }),

	
    deleteProduct: builder.mutation({
      query: id => ({
        url: `shopping-list/remove-ingredient`,
        method: 'POST',
		  body: id,
      }),
      invalidatesTags: ['ShoppingList'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
} = shoppingListApi;
