import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import RecipeGalleryItem from '../ReusableComponents/RecipeGalleryItem/RecipeGalleryItem';
import SearchCapImage from '../SearchCap/SearhCap';

import getRecipesByTitle from '../../redux/recipes/operations/getRecipesByTitle';
import { selectRecipeByTitle } from '../../redux/recipes/recipesSelector';

import { Section, List } from './SearchRecipesList.styled';

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
    <Section>
      <List>
        {searchedList?.length && searchedList?.length !== 0 ? (
          searchedList.map(({ _id: id, preview, title }) => (
            <RecipeGalleryItem key={id} src={preview} title={title} />
          ))
        ) : (
          <SearchCapImage />
        )}
      </List>
    </Section>
  );
};

export default SearchedRecipesList;
