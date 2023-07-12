import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import RecipeCardItem from '../ReusableComponents/RecipeCardItem/RecipeCardItem';
import SearchCapImage from '../SearchCap/SearhCap';

import getRecipesByTitle from '../../redux/recipes/operations/getRecipesByTitle';
import { selectRecipeByTitle } from '../../redux/recipes/recipesSelector';

const SearchedRecipesList = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const searchedList = useSelector(selectRecipeByTitle);
  console.log('searchedList :>> ', searchedList);

  const params = Object.fromEntries(searchParams.entries());
  const { q, ingredient } = params;
  // console.log('params :>> ', params);

  const query = searchParams.get('q');
  // const ingred = searchParams.get('ingredient');

  useEffect(() => {
    if (q && q !== '') {
      // console.log('это поиск по названию :>> ');
      dispatch(getRecipesByTitle(query));
    }
    if (ingredient && ingredient !== '') {
      // console.log('это поиск по ингр :>> ');
      // функцию  притащить когда она будет
      // const result = await getRecipesByIngredient(ingredient);
    }
  }, [ingredient, q, dispatch, query]);

  return (
    <section>
      <ul>
        {searchedList?.data?.recipe.length &&
        searchedList?.data?.recipe.length !== 0 ? (
          searchedList.data.recipe.map(item => {
            return (
              <li key={item.id}>
                <RecipeCardItem resipe={item} />
              </li>
            );
          })
        ) : (
          <SearchCapImage />
        )}
      </ul>
    </section>
  );
};

export default SearchedRecipesList;
