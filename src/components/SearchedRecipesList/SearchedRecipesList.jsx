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
  // console.log('searchedList :>> ', searchedList);

  const params = Object.fromEntries(searchParams.entries());
  const { q, ingredient } = params;

  const query = searchParams.get('q');
  const ingred = searchParams.get('ingredient');

  useEffect(() => {
    if (q && q !== '') {
      dispatch(getRecipesByTitle(query));
    }
    if (ingredient && ingredient !== '') {
      // функцию  притащить когда она будет
      // dispatch(getRecipesByIngredient(ingred));
    }
  }, [dispatch, q, ingredient, searchedList.length, query, ingred]);

  return (
    <section>
      <ul>
        {searchedList?.length && searchedList?.length !== 0 ? (
          searchedList.map(item => {
            return (
              <li key={item._id}>
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
