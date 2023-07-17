import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import RecipePageHero from 'components/RecipePageHero/RecipePageHero';
import RecipeInngredientsList from 'components/RecipeInngredientsList/RecipeInngredientsList';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';
import { selectError, selectRecipeById } from 'redux/recipes/recipesSelector';
import getRecipesById from 'redux/recipes/operations/getRecipesById';
import { MainContainer } from 'components/MainContainer/MainContainer';

const RecipePage = () => {
const dispatch = useDispatch()
  const recipeInfo = useSelector(selectRecipeById);
  const error = useSelector(selectError);

  // console.log(recipeInfo);

  
   const { recipeId } = useParams();

  useEffect(() => {
    dispatch(getRecipesById(recipeId));
 
  }, [dispatch, recipeId]);

  return (
    
    <div>
      {recipeInfo && !error && (
        <>
          <RecipePageHero      
          title={recipeInfo.title}
          description={recipeInfo.description}
          time={recipeInfo.time}
      />     
        <MainContainer>
           <RecipeInngredientsList
              ingredients={recipeInfo.ingredients}   
             recipeId={recipeId}  
          />  
          <RecipePreparation
          instructions={recipeInfo.instructions}
          image={recipeInfo.thumb} /> 
        </MainContainer>
        </>

      )}
              
      </div>
    
  );
};

export default RecipePage;
