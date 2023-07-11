import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import RecipePageHero from 'components/RecipePageHero/RecipePageHero';
import RecipeInngredientsList from 'components/RecipeInngredientsList/RecipeInngredientsList';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';
import { HeaderList } from './RecipePage.styled';

const RecipePage = () => {
  const [recipeData, setRecipeData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { recipeId } = useParams();
  console.log(useParams())

  //  Перенести функцію фетча до папки service:
  const fetchRecipe = async id => {
    const { data } = await axios.get(`/recipes/${id}`);
    return data;
  };

  useEffect(() => {
    async function getRecipe() {
      try {
        setIsLoading(true);
        const { recipe } = await fetchRecipe(recipeId);
        setRecipeData(recipe);
        console.log(recipe)
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    }

    getRecipe();
  }, [recipeId]);

  return (
    <div>
      {error && <p>{error.message}</p>}
      {isLoading && <p>Додати Loader...</p>}
      <div>
        <RecipePageHero recipeData={recipeData} recipe_id={recipeId} />
        <div>
          <HeaderList>
            <p>Ingredients</p>
            <p>
              Number
              <span>Add to list</span>
            </p>
          </HeaderList>
          {/* <RecipeInngredientsList
            ingredients={recipeData.ingredients}
            recipe_id={id}
          />
          <RecipePreparation /> */}
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
