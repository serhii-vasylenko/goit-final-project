import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import RecipeGalleryItem from '../ReusableComponents/RecipeGalleryItem/RecipeGalleryItem';
import SearchCapImage from '../ReusableComponents/SearchCap/SearhCap';
import { showErrorToast } from '../ReusableComponents/ToastCustom/showToast';

import {
  selectRecipeByTitle,
  selectRecipesByIngredient,
  selectError,
} from '../../redux/recipes/recipesSelector';

import { Section, List } from './SearchRecipesList.styled';

const SearchedRecipesList = () => {
  const searchedList = useSelector(selectRecipeByTitle);
  const serchedIngredList = useSelector(selectRecipesByIngredient);
  const error = useSelector(selectError);
  console.log('searchedList :>> ', searchedList);
  console.log('serchedIngredList :>> ', serchedIngredList);


  useEffect(() => {
    if (error) showErrorToast(error);
  }, [error]);

  //  const visibleRecipes = 

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
