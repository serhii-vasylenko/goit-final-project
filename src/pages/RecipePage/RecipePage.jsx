import { useEffect, useState } from 'react';
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

  const [fetched, setFetched] = useState(false);
  console.log(recipeInfo);

  
   const { recipeId } = useParams();

  useEffect(() => {
    dispatch(getRecipesById(recipeId)).then(setFetched(true));
 
  }, [dispatch, recipeId]);

  return (
    
      <div>
        <RecipePageHero
       
          title={recipeInfo.title}
          description={recipeInfo.description}
          time={recipeInfo.time}
      />
      {fetched && recipeInfo && !error && (
        <MainContainer>
           <RecipeInngredientsList
            ingredients={recipeInfo.ingredients}         
          />  
          <RecipePreparation
          instructions={recipeInfo.instructions}
          image={recipeInfo.thumb} /> 
        </MainContainer>
      )}
        
      </div>
    
  );
};

export default RecipePage;
