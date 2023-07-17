import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

import Pagination from 'components/ReusableComponents/Pagination/Pagination';
import { MainContainer } from 'components/MainContainer/MainContainer';
import Loader from 'components/ReusableComponents/Loader/Loader';
import RecipeCardItem from 'components/ReusableComponents/RecipeCardItem/RecipeCardItem';

import { EmptyInfo, List, Section, Title } from './FavoritePage.styled';
import getFavoriteRecipes from 'redux/recipes/operations/getFavoriteRecipes';
import SearchCapImage from 'components/ReusableComponents/SearchCap/SearhCap';
import deleteFromFavoriteRecipes from 'redux/recipes/operations/deleteFromFavoriteRecipes';

const FavoritePage = () => {
  const { isLoading, error, favoriteRecipes } = useSelector(
    state => state.recipes
  );
  const listRef = useRef(null);
  const dispatch = useDispatch();

  const handleChange = num => {
    listRef.current?.scrollIntoView({ behavior: 'smooth' });
    dispatch(getFavoriteRecipes({ page: num }));
  };

  const onDeleteHandler = async id => {
    dispatch(deleteFromFavoriteRecipes(id)).then(() =>
      dispatch(
        getFavoriteRecipes({
          page:
            (favoriteRecipes.totalFavorites - 1) % favoriteRecipes.perPage === 0
              ? favoriteRecipes.currentPage - 1
              : favoriteRecipes.currentPage,
        })
      )
    );
  };

  useEffect(() => {
    dispatch(getFavoriteRecipes({ page: 1 }));
  }, [dispatch]);

  return (
    <Section>
      <MainContainer>
        <Title title="Favorites" />
        {isLoading ? (
          <Loader />
        ) : error ? (
          <div>{error}</div>
        ) : favoriteRecipes.recipe.length ? (
          <>
            <List ref={listRef}>
              {favoriteRecipes.recipe.map(recipe => (
                <RecipeCardItem
                  key={recipe._id}
                  onDeleteHandler={onDeleteHandler}
                  {...recipe}
                />
              ))}
            </List>

            <Pagination
              currentPage={favoriteRecipes.currentPage}
              pageSize={favoriteRecipes.perPage}
              totalCount={favoriteRecipes.totalFavorites}
              onPageChange={handleChange}
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
