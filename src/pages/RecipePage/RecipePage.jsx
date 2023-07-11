import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import RecipePageHero from 'components/RecipePageHero/RecipePageHero';
import RecipeInngredientsList from 'components/RecipeInngredientsList/RecipeInngredientsList';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';
import { HeaderList } from './RecipePage.styled';
import { selectRecipeById } from 'redux/recipes/recipesSelector';
import getRecipesById from 'redux/recipes/operations/getRecipesById';
import getIngredientsList from 'redux/ingredients/operations/getIngredientsList';

const RecipePage = () => {

  const { recipeId } = useParams();
  const recipeInfo = useSelector(selectRecipeById);
  console.log(recipeInfo);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecipesById(recipeId));
 
  }, [dispatch, recipeId]);

  return (
    <div>
      <div>
        <RecipePageHero
       
          title={recipeInfo.data.recipe.title}
          description={recipeInfo.data.recipe.description}
          time={recipeInfo.data.recipe.time}
        />
        <div>
          <HeaderList>
            <p>Ingredients</p>
            <p>
              Number
              <span>Add to list</span>
            </p>
          </HeaderList>
          <RecipeInngredientsList
            ingredients={recipeInfo.data.recipe.ingredients}         
          /> 
          <RecipePreparation />
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
