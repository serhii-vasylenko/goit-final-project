import getCategoryList from "./getCategoryList";
import getMainPageRecipes from "./getMainPageRecipes";
import getRecipesById from "./getRecipesById";
import getRecipesByTitle from "./getRecipesByTitle";
import deleteownRecipe from "./deleteOwnRecipe";
import getOwnRecipe from "./getOwnRecipe";
import addOwnRecipe from "./addOwnRecipe";
import addToFavoriteRecipes from "./addToFavoriteRecipes";
import getRecipesByIngredient from "./getRecipesByIngredient";
import deleteFromFavoriteRecipes from "./deleteFromFavoriteRecipes";
import getRecipesByCategory from "./getRecipesByCategory";

 export const recipeOperations = {
    getCategoryList,
    getMainPageRecipes,
    getRecipesById,
    getRecipesByTitle,
    deleteownRecipe,
    getOwnRecipe,
    addOwnRecipe,
    addToFavoriteRecipes,
    getRecipesByIngredient,
    deleteFromFavoriteRecipes,
    getRecipesByCategory,
}

