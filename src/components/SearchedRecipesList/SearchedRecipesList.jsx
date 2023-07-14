import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RecipeGalleryItem from '../ReusableComponents/RecipeGalleryItem/RecipeGalleryItem';
import SearchCapImage from '../ReusableComponents/SearchCap/SearhCap';
import { showErrorToast } from '../ReusableComponents/ToastCustom/showToast';

import {
  selectRecipeByTitle,
  selectRecipesByIngredient,
  selectError,
} from '../../redux/recipes/recipesSelector';
import getRecipesByTitle from 'redux/recipes/operations/getRecipesByTitle';
import getRecipesByIngredient from 'redux/recipes/operations/getRecipesByIngredient';

import { Section, List } from './SearchRecipesList.styled';
import { useLocation } from 'react-router';
import { useSearchParams } from 'react-router-dom';

const SearchedRecipesList = () => {
  const searchedList = useSelector(selectRecipeByTitle);
  const serchedIngredList = useSelector(selectRecipesByIngredient);
  const error = useSelector(selectError);
  console.log('searchedList :>> ', searchedList);
  console.log('serchedIngredList :>> ', serchedIngredList);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const cardsToShow = calculateCardsToShow(windowWidth);
  const location = useLocation();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (error) showErrorToast(error);
  }, [error]);

  useEffect(() => {
    if (location.state && location.state.from === '/main') {
      const params = Object.fromEntries(searchParams.entries());
      const { q, ing } = params;
      const title = searchParams.get('q');
      const ingredient = searchParams.get('ing');

      if (q && q !== '') {
        dispatch(getRecipesByTitle(title));
      }
      if (ing && ing !== '') {
        dispatch(getRecipesByIngredient(ingredient));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function calculateCardsToShow(width) {
    if (width < 768) {
      return 1;
    } else if (width >= 768 && width < 1280) {
      return 2;
    } else {
      return 4;
    }
  }
  //  const visibleRecipes =

  return (
    <Section>
      <List>
        {searchedList?.length && searchedList?.length !== 0 ? (
          searchedList
            .slice(0, cardsToShow)
            .map(({ _id: id, title, preview }) => (
              <RecipeGalleryItem key={id} id={id} title={title} src={preview} />
            ))
        ) : (
          <SearchCapImage>Try looking for something else...</SearchCapImage>
        )}
      </List>
    </Section>
  );
};

export default SearchedRecipesList;
