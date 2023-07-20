import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectError, selectIsLoading, selectRecipeById } from 'redux/recipes/recipesSelector';
import getRecipesById from 'redux/recipes/operations/getRecipesById';
import { MainContainer } from 'components/MainContainer/MainContainer';
import RecipePageHero from 'components/RecipePageHero';
import RecipeInngredientsList from 'components/RecipeInngredientsList';
import RecipePreparation from 'components/RecipePreparation';
import Loader from 'components/ReusableComponents/Loader';

const RecipePage = () => {
  const dispatch = useDispatch();
  const recipeInfo = useSelector(selectRecipeById);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const { recipeId } = useParams();

  useEffect(() => {
    dispatch(getRecipesById(recipeId));
  }, [dispatch, recipeId]);

  return (
    <>
      {recipeInfo && !error && (
        <>
          <RecipePageHero
            title={recipeInfo.title}
            description={recipeInfo.description}
            time={recipeInfo.time}
          />
          <MainContainer>
            {isLoading && <Loader />}
            <RecipeInngredientsList
              ingredients={recipeInfo.ingredients}
              recipeId={recipeId}
            />
            <RecipePreparation
              instructions={recipeInfo.instructions}
              image={recipeInfo.thumb}
            />
          </MainContainer>
        </>
      )}
    </>
  );
};

export default RecipePage;
