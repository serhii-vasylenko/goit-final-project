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
  recipeById: null,
  ownRecipes: [],
  popularRecipes: [],
  recipesByIngredient: [],
  recipesByCategory: [],
  favoriteRecipes: [],
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
      .addCase(recipeOperations.getRecipesByTitle.pending, handlePending)
      .addCase(
        recipeOperations.getRecipesByTitle.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.recipeByTitle = action.payload.data.recipe;
        }
      )
      .addCase(recipeOperations.getRecipesByTitle.rejected, handleRejected)
      .addCase(recipeOperations.getOwnRecipes.pending, handlePending)
      .addCase(recipeOperations.getOwnRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ownRecipes = action.payload.data.recipe;
      })
      .addCase(recipeOperations.getOwnRecipes.rejected, handleRejected)
      .addCase(recipeOperations.deleteownRecipe.pending, handlePending)
      .addCase(recipeOperations.deleteownRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.ownRecipes.findIndex(
          ownRecipe => ownRecipe._id === action.payload.data.recipe._id
        );
        state.ownRecipes.splice(index, 1);
      })
      .addCase(recipeOperations.deleteownRecipe.rejected, handleRejected)
      .addCase(recipeOperations.addOwnRecipe.pending, handlePending)
      .addCase(recipeOperations.addOwnRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ownRecipes = [...state.ownRecipes, action.payload.data.recipe];
      })
      .addCase(recipeOperations.addOwnRecipe.rejected, handleRejected)
      .addCase(recipeOperations.getFavoriteRecipes.pending, handlePending)
      .addCase(recipeOperations.getFavoriteRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.favoriteRecipes =  action.payload.data.recipe;
      })
      .addCase(recipeOperations.getFavoriteRecipes.rejected, handleRejected)
      .addCase(recipeOperations.addToFavoriteRecipes.pending, handlePending)
      .addCase(recipeOperations.addToFavoriteRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.favoriteRecipes = [...state.favoriteRecipes, action.payload.data.recipe];
      })
      .addCase(recipeOperations.addToFavoriteRecipes.rejected, handleRejected)
      .addCase(recipeOperations.deleteFromFavoriteRecipes.pending, handlePending)
      .addCase(recipeOperations.deleteFromFavoriteRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.favoriteRecipes.findIndex(
          favoriteRecipe => favoriteRecipe._id === action.payload.data.recipe._id
        );
        state.favoriteRecipes.splice(index, 1);
      })
      .addCase(recipeOperations.deleteFromFavoriteRecipes.rejected, handleRejected)
      .addCase(recipeOperations.getRecipesByIngredient.pending, handlePending)
      .addCase(
        recipeOperations.getRecipesByIngredient.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.recipesByIngredient = action.payload.data.recipe;
        }
      )
      .addCase(recipeOperations.getRecipesByIngredient.rejected, handleRejected)
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

export default recipesSlice.reducer;
