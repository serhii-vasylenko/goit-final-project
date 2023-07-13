import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import RecipePageHero from 'components/RecipePageHero/RecipePageHero';
import RecipeInngredientsList from 'components/RecipeInngredientsList/RecipeInngredientsList';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';
import { HeaderList } from './RecipePage.styled';
import { selectRecipeById } from 'redux/recipes/recipesSelector';
import getRecipesById from 'redux/recipes/operations/getRecipesById';
import { MainContainer } from 'components/MainContainer/MainContainer';

const RecipePage = () => {

  const { recipeId } = useParams();
   const  recipeInfo  = useSelector(selectRecipeById);
  console.log(recipeInfo);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecipesById(recipeId));
 
  }, [dispatch, recipeId]);

  return (
    
      <div>
        <RecipePageHero
       
          title={recipeInfo.title}
          description={recipeInfo.description}
          time={recipeInfo.time}
        />
        <MainContainer>
          <HeaderList>
            <p>Ingredients</p>
            <p>
              Number
              <span>Add to list</span>
            </p>
          </HeaderList>
           {/* <RecipeInngredientsList
            ingredients={recipeInfo.ingredients}         
          />   */}
          {/* <RecipePreparation />  */}
        </MainContainer>
      </div>
    
  );
};

export default RecipePage;
