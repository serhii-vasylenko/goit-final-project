import { createSlice } from '@reduxjs/toolkit';
import { recipeOperations } from './operations';
import { showMessageToast } from 'components/ReusableComponents/ToastCustom/showToast';

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
  recipeById: null,
  ownRecipes: {
    recipe: [],
    currentPage: 0,
    totalOwnRecipes: 0,
    totalPages: 0,
    perPage: 0,
  },
  currentAddedOwnRecipe: '',
  popularRecipes: [],
  recipesByIngredient: [],
  recipesByCategory: [],
  favoriteRecipes: {
    recipe: [],
    currentPage: 0,
    totalFavorites: 0,
    totalPages: 0,
    perPage: 0,
  },
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

    removeCurrentAddedOwnRecipe: (state, action) => {
      state.currentAddedOwnRecipe = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(recipeOperations.getCategoryList.pending, handlePending)
      .addCase(recipeOperations.getCategoryList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categoryList = action.payload.data.recipe;
      })
      .addCase(recipeOperations.getCategoryList.rejected, handleRejected)
      .addCase(recipeOperations.getMainPageRecipes.pending, handlePending)
      .addCase(
        recipeOperations.getMainPageRecipes.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.mainPageRecipes = action.payload.data.recipe;
        }
      )
      .addCase(recipeOperations.getMainPageRecipes.rejected, handleRejected)
      .addCase(recipeOperations.getRecipesById.pending, handlePending)
      .addCase(recipeOperations.getRecipesById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recipeById = action.payload.data.recipe;
      })
      .addCase(recipeOperations.getRecipesById.rejected, handleRejected)
      .addCase(recipeOperations.getOwnRecipes.pending, handlePending)
      .addCase(recipeOperations.getOwnRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ownRecipes = action.payload.data;
      })
      .addCase(recipeOperations.getOwnRecipes.rejected, handleRejected)
      .addCase(recipeOperations.deleteOwnRecipe.pending, handlePending)
      .addCase(recipeOperations.deleteOwnRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.ownRecipes.recipe.findIndex(
          ownRecipe => ownRecipe._id === action.payload.data.recipe._id
        );
        state.ownRecipes.recipe.splice(index, 1);
        showMessageToast(
          'Recipe was successfully deleted from your collection.'
        );
      })
      .addCase(recipeOperations.deleteOwnRecipe.rejected, handleRejected)
      .addCase(recipeOperations.addOwnRecipe.pending, handlePending)
      .addCase(recipeOperations.addOwnRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ownRecipes.recipe = [
          ...state.ownRecipes.recipe,
          action.payload.data.recipe,
        ];
        state.currentAddedOwnRecipe = action.payload.data.recipe._id;
      })
      .addCase(recipeOperations.addOwnRecipe.rejected, handleRejected)
      .addCase(recipeOperations.getFavoriteRecipes.pending, handlePending)
      .addCase(
        recipeOperations.getFavoriteRecipes.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.favoriteRecipes = action.payload.data;
        }
      )
      .addCase(recipeOperations.getFavoriteRecipes.rejected, handleRejected)
      .addCase(recipeOperations.addToFavoriteRecipes.pending, handlePending)
      .addCase(
        recipeOperations.addToFavoriteRecipes.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.favoriteRecipes.recipe = [
            ...state.favoriteRecipes.recipe,
            action.payload.data.recipe,
          ];
        }
      )
      .addCase(recipeOperations.addToFavoriteRecipes.rejected, handleRejected)
      .addCase(
        recipeOperations.deleteFromFavoriteRecipes.pending,
        handlePending
      )
      .addCase(
        recipeOperations.deleteFromFavoriteRecipes.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.error = null;
          const index = state.favoriteRecipes.recipe.findIndex(
            favoriteRecipe =>
              favoriteRecipe._id === action.payload.data.recipe._id
          );
          state.favoriteRecipes.recipe.splice(index, 1);
          showMessageToast('Recipe was successfully deleted from favorites.');
        }
      )
      .addCase(
        recipeOperations.deleteFromFavoriteRecipes.rejected,
        handleRejected
      )
      .addCase(recipeOperations.getRecipesByCategory.pending, handlePending)
      .addCase(
        recipeOperations.getRecipesByCategory.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.recipesByCategory = action.payload.data.recipes;
        }
      )
      .addCase(recipeOperations.getRecipesByCategory.rejected, handleRejected)
      .addCase(recipeOperations.getPopularRecipes.pending, handlePending)
      .addCase(
        recipeOperations.getPopularRecipes.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.popularRecipes = action.payload.data.recipe;
        }
      )
      .addCase(recipeOperations.getPopularRecipes.rejected, handleRejected);
  },
});

export const { setSearchFilter, removeCurrentAddedOwnRecipe } = recipesSlice.actions;
export default recipesSlice.reducer;
