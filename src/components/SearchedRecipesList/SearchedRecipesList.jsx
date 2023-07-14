import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import RecipeGalleryItem from '../ReusableComponents/RecipeGalleryItem/RecipeGalleryItem';
import SearchCapImage from '../ReusableComponents/SearchCap/SearhCap';
import { showErrorToast } from '../ReusableComponents/ToastCustom/showToast';

import getRecipesByTitle from '../../redux/recipes/operations/getRecipesByTitle';
import getRecipesByIngredient from '../../redux/recipes/operations/getRecipesByIngredient';
import {
  selectRecipeByTitle,
  selectRecipesByIngredient,
  selectError,
} from '../../redux/recipes/recipesSelector';

import { Section, List } from './SearchRecipesList.styled';

const SearchedRecipesList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const searchedList = useSelector(selectRecipeByTitle);
  const serchedIngredList = useSelector(selectRecipesByIngredient);
  const error = useSelector(selectError);
  console.log('searchedList :>> ', searchedList);
  console.log('serchedIngredList :>> ', serchedIngredList);

  const params = Object.fromEntries(searchParams.entries());
  const { q, ing } = params;

  const title = searchParams.get('q');
  const ingredient = searchParams.get('ing');

  useEffect(() => {
    if (q && q !== '') {
      dispatch(getRecipesByTitle(title));
    }
    if (ing && ing !== '') {
      dispatch(getRecipesByIngredient(ingredient));
    }
    if (title === '' || ingredient === '') {
      setSearchParams({});
    }
  }, [dispatch, q, ing, title, ingredient, searchedList.length]);

  useEffect(() => {
    if (error) showErrorToast(error);
  }, [error]);

  return (
    <Section>
      <List>
        {searchedList?.length && searchedList?.length !== 0 ? (
          searchedList.map(({ _id: id, preview, title }) => (
            <RecipeGalleryItem key={id} src={preview} title={title} />
          ))
        ) : (
          <SearchCapImage>Try looking for something else...</SearchCapImage>
        )}
      </List>
    </Section>
  );
};

export default SearchedRecipesList;
