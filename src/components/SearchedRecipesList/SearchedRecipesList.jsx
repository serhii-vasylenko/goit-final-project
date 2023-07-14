import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { useSearchParams } from 'react-router-dom';

import RecipeGalleryItem from '../ReusableComponents/RecipeGalleryItem/RecipeGalleryItem';
import SearchCapImage from '../ReusableComponents/SearchCap/SearhCap';
import { showErrorToast } from '../ReusableComponents/ToastCustom/showToast';

import {
  selectRecipeByTitle,
  selectRecipesByIngredient,
  selectError,
} from 'redux/search/searchSelector';
import getRecipesByTitle from 'redux/search/operations/getRecipesByTitle';
import getRecipesByIngredient from 'redux/search/operations/getRecipesByIngredient';
import { resetRecipeByTitle, resetRecipeByIngredient } from 'redux/search/searchSlice';

import { Section, List } from './SearchRecipesList.styled';

const SearchedRecipesList = () => {
  const searchedList = useSelector(selectRecipeByTitle);
  const serchedIngredList = useSelector(selectRecipesByIngredient);
  const error = useSelector(selectError);
  console.log('searchedList :>> ', searchedList);
  console.log('serchedIngredList :>> ', serchedIngredList);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  // const cardsToShow = calculateCardsToShow(windowWidth);

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
        dispatch(resetRecipeByIngredient())
        dispatch(getRecipesByTitle(title));
      }
      if (ing && ing !== '') {
        dispatch(resetRecipeByTitle())
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

  let visibleRecipes = searchedList
    ? searchedList
    : serchedIngredList.flatMap(obj => Object.values(obj)[0]);
  console.log(
    ' :>> ',
    serchedIngredList
      .filter(obj => obj.values !== undefined)
      .flatMap(obj => obj.values)
  );
  
  if (windowWidth >= 1280) {
    visibleRecipes = searchedList.slice(0, 12);
  }

  return (
    <Section>
      <List>
        {visibleRecipes?.length && visibleRecipes?.length !== 0 ? (
          visibleRecipes.map(({ _id: id, title, preview }) => (
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
