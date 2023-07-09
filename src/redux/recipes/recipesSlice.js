import { createSlice } from '@reduxjs/toolkit';
import { recipeOperations } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  categoryList: null,
  ingredientsList: null,
  mainPageRecipes: null,
  searchFilter: null,
  isLoading: false,
  error: null,
};
const recipesSlice = createSlice({
  name: 'recipes',
  initialState,

  reducers: {
    setSearchFilter: (state, action) => {
      state.searchFilter = action.payload;
    }
  },

  extraReducers: builder => {
    builder
      .addCase(recipeOperations.getCategoryList.pending, handlePending)
      .addCase(recipeOperations.getCategoryList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categoryList = action.payload;
      })
      .addCase(recipeOperations.getCategoryList.rejected, handleRejected)
      .addCase(recipeOperations.getIngredientsList.pending, handlePending)
      .addCase(
        recipeOperations.getIngredientsList.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.ingredientsList = action.payload;
        }
      )
      .addCase(recipeOperations.getIngredientsList.rejected, handleRejected)
      .addCase(recipeOperations.getMainPageRecipes.pending, handlePending)
      .addCase(
        recipeOperations.getMainPageRecipes.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.mainPageRecipes = action.payload;
        }
      )
      .addCase(recipeOperations.getMainPageRecipes.rejected, handleRejected);
  },
});

export default recipesSlice.reducer;
