import { createSlice } from '@reduxjs/toolkit';
import getRecipesByIngredient from '../search/operations/getRecipesByIngredient';
import getRecipesByTitle from '../search/operations/getRecipesByTitle';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  recipeByTitle: [],
  recipesByIngredient: [],
  searchFilter: '',
  isLoading: false,
  error: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,

  reducers: {
    setSearchFilter: (state, action) => {
      state.searchFilter = action.payload;
    },

    resetRecipeByTitle: state => {
      state.recipeByTitle = initialState.recipeByTitle;
    },

    resetRecipeByIngredient: state => {
      state.recipesByIngredient = initialState.recipesByIngredient;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getRecipesByTitle.pending, handlePending)
      .addCase(getRecipesByTitle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recipeByTitle = action.payload.data.recipe;
      })
      .addCase(getRecipesByTitle.rejected, handleRejected)
      .addCase(getRecipesByIngredient.pending, handlePending)
      .addCase(getRecipesByIngredient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recipesByIngredient = action.payload.data.recipe;
      })
      .addCase(getRecipesByIngredient.rejected, handleRejected);
  },
});

export const { resetRecipeByTitle, resetRecipeByIngredient } =
  searchSlice.actions;

export default searchSlice.reducer;
