import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import axios from "../../const/axiosBaseUrl";
import RecipePageHero from "components/RecipePageHero/RecipePageHero";


const RecipePage = () => {
   const [recipeData, setRecipeData] = useState(null);
const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

   const { recipe_id } = useParams();

//  Перенести функцію фетча до папки service: 
 const fetchRecipe = async id => {
  const url = `/recipes/${id}`;
  const { data } = await axios.get(url);
  return data;
}; 
   
    useEffect(() => {
    async function getRecipe() {
      try {
        setIsLoading(true);
        const { recipe } = await fetchRecipe(recipe_id);
        setRecipeData(recipe);
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    }

    getRecipe();
  }, [recipe_id]);

   return (
     <div>
       {error && (
         <p>
          {error.message}
         </p>
       )}
       {isLoading && <p>Додати Loader...</p>}
       <div>
         <RecipePageHero recipeData={recipeData} recipe_id={recipe_id}/>
       </div>
     </div>
   );
};

export default RecipePage;
