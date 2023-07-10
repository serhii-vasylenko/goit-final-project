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
  categoryList: [],
  mainPageRecipes: [],
  searchFilter: null,
  recipeByTitle: [],
  recipeById: {},
  ownRecipes: [],
  isLoading: false,
  error: null,
};
const recipesSlice = createSlice({
  name: 'recipes',
  initialState,

  reducers: {
    setSearchFilter: (state, action) => {
      state.searchFilter = action.payload;
    },
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
      .addCase(recipeOperations.getMainPageRecipes.pending, handlePending)
      .addCase(
        recipeOperations.getMainPageRecipes.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.mainPageRecipes = action.payload;
        }
      )
      .addCase(recipeOperations.getMainPageRecipes.rejected, handleRejected)
      .addCase(recipeOperations.getRecipesById.pending, handlePending)
      .addCase(recipeOperations.getRecipesById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recipeById = action.payload;
      })
      .addCase(recipeOperations.getRecipesById.rejected, handleRejected)
      .addCase(recipeOperations.getRecipesByTitle.pending, handlePending)
      .addCase(
        recipeOperations.getRecipesByTitle.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.recipeByTitle = action.payload;
        }
      )
      .addCase(recipeOperations.getRecipesByTitle.rejected, handleRejected)
      .addCase(recipeOperations.getOwnRecipe.pending, handlePending)
      .addCase(recipeOperations.getOwnRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ownRecipes = action.payload;
      })
      .addCase(recipeOperations.getOwnRecipe.rejected, handleRejected)
      .addCase(recipeOperations.deleteownRecipe.pending, handlePending)
      .addCase(recipeOperations.deleteownRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.ownRecipes.findIndex(
          ownRecipe => ownRecipe.id === action.payload.id
        );
        state.ownRecipes.splice(index, 1);
      })
      .addCase(recipeOperations.deleteownRecipe.rejected, handleRejected);
  },
});

export default recipesSlice.reducer;
