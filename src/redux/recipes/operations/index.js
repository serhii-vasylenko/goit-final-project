import getCategoryList from './getCategoryList';
import getMainPageRecipes from './getMainPageRecipes';
import getRecipesById from './getRecipesById';
import getRecipesByTitle from '../../search/operations/getRecipesByTitle';
import deleteOwnRecipe from './deleteOwnRecipe';
import getOwnRecipes from './getOwnRecipes';
import addOwnRecipe from './addOwnRecipe';
import addToFavoriteRecipes from './addToFavoriteRecipes';
import getRecipesByIngredient from '../../search/operations/getRecipesByIngredient';
import deleteFromFavoriteRecipes from './deleteFromFavoriteRecipes';
import getRecipesByCategory from './getRecipesByCategory';
import getFavoriteRecipes from './getFavoriteRecipes';
import getPopularRecipes from './getPopularRecipes';

export const recipeOperations = {
  getCategoryList,
  getMainPageRecipes,
  getRecipesById,
  getRecipesByTitle,
  deleteOwnRecipe,
  getOwnRecipes,
  addOwnRecipe,
  addToFavoriteRecipes,
  getRecipesByIngredient,
  deleteFromFavoriteRecipes,
  getRecipesByCategory,
  getFavoriteRecipes,
  getPopularRecipes,
};
