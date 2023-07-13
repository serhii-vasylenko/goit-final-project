import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import RecipeGalleryItem from '../ReusableComponents/RecipeGalleryItem/RecipeGalleryItem';
import SearchCapImage from '../SearchCap/SearhCap';
import {
  showErrorToast,
} from '../ReusableComponents/ToastCustom/showToast';

import getRecipesByTitle from '../../redux/recipes/operations/getRecipesByTitle';
import getRecipesByIngredient from '../../redux/recipes/operations/getRecipesByIngredient'
import {
  selectRecipeByTitle,
  selectError,
} from '../../redux/recipes/recipesSelector';

import { Section, List } from './SearchRecipesList.styled';


const SearchedRecipesList = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const searchedList = useSelector(selectRecipeByTitle);
  const error = useSelector(selectError);
  // console.log('searchedList :>> ', searchedList);

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
  }, [ dispatch, q, ing, searchedList.length, title, ingredient]);

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
          <SearchCapImage />
        )}
      </List>
    </Section>
  );
};

export default SearchedRecipesList;
