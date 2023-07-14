import { useDispatch, useSelector } from 'react-redux';
import { useLayoutEffect, useRef } from 'react';

import { selectUser } from 'redux/auth/selectors';
import usePagination from 'hooks/usePagination';

import { MainContainer } from 'components/MainContainer/MainContainer';
import Paginator from 'components/ReusableComponents/Paginator/Paginator';
import Loader from 'components/ReusableComponents/Loader/Loader';
import RecipeCardItem from 'components/ReusableComponents/RecipeCardItem/RecipeCardItem';

import { EmptyInfo, List, Section, Title } from './FavoritePage.styled';
import getFavoriteRecipes from 'redux/recipes/operations/getFavoriteRecipes';
import SearchCapImage from 'components/ReusableComponents/SearchCap/SearhCap';
import deleteFromFavoriteRecipes from 'redux/recipes/operations/deleteFromFavoriteRecipes';

const FavoritePage = () => {
  const { userId } = useSelector(selectUser);
  const { isLoading, error, favoriteRecipes } = useSelector(
    state => state.recipes
  );
  const listRef = useRef(null);
  const dispatch = useDispatch();
  const PER_PAGE = 3;

  const data = usePagination(favoriteRecipes, PER_PAGE);

  const handleChange = (e, p) => {
    data.jump(p);
    listRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const onDeleteHandler = id => {
    dispatch(deleteFromFavoriteRecipes(id));
  };

  useLayoutEffect(() => {
    dispatch(getFavoriteRecipes());
  }, [dispatch, userId]);

  return (
    <Section>
      <MainContainer>
        <Title title="Favorites" />
        {isLoading ? (
          <Loader />
        ) : error ? (
          <div>{error}</div>
        ) : favoriteRecipes.length ? (
          <>
            <List ref={listRef}>
              {data.currentData().map(recipe => (
                <RecipeCardItem
                  key={recipe._id}
                  onDeleteHandler={onDeleteHandler}
                  {...recipe}
                />
              ))}
            </List>
            <Paginator
              count={data.count}
              page={data.page()}
              handleChange={handleChange}
            />
          </>
        ) : (
          <EmptyInfo>
            <SearchCapImage>
              You don't have any favorite recipes yet.
            </SearchCapImage>
          </EmptyInfo>
        )}
      </MainContainer>
    </Section>
  );
};

export default FavoritePage;
