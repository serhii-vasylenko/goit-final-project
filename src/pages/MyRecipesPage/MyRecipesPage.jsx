import { useDispatch, useSelector } from 'react-redux';
import { useLayoutEffect, useRef } from 'react';

import getOwnRecipe from 'redux/recipes/operations/getOwnRecipes';

import { MainContainer } from 'components/MainContainer/MainContainer';
import Loader from 'components/ReusableComponents/Loader/Loader';
import RecipeCardItem from 'components/ReusableComponents/RecipeCardItem/RecipeCardItem';

import { EmptyInfo, List, Section, Title } from './MyRecipiesPage.styled';
import SearchCapImage from 'components/ReusableComponents/SearchCap/SearhCap';
import deleteOwnRecipe from 'redux/recipes/operations/deleteOwnRecipe';
import getOwnRecipes from 'redux/recipes/operations/getOwnRecipes';
import Pagination from 'components/ReusableComponents/Pagination/Pagination';

const MyRecipesPage = () => {
  const { isLoading, error, ownRecipes } = useSelector(state => state.recipes);
  const listRef = useRef(null);
  const dispatch = useDispatch();

  const handleChange = num => {
    listRef.current?.scrollIntoView({ behavior: 'smooth' });
    dispatch(getOwnRecipe({ page: num }));
  };

  const onDeleteHandler = id => {
    dispatch(deleteOwnRecipe(id)).then(() =>
      dispatch(
        getOwnRecipes({
          page:
            (ownRecipes.totalOwnRecipes - 1) % ownRecipes.perPage === 0
              ? ownRecipes.currentPage - 1
              : ownRecipes.currentPage,
        })
      )
    );
  };

  useLayoutEffect(() => {
    dispatch(getOwnRecipe({ page: 1 }));
  }, [dispatch]);

  return (
    <Section>
      <MainContainer>
        <Title title="My recipes" />
        {isLoading ? (
          <Loader />
        ) : error ? (
          <div>{error}</div>
        ) : ownRecipes.recipe.length ? (
          <>
            <List ref={listRef}>
              {ownRecipes.recipe.map(recipe => (
                <RecipeCardItem
                  key={recipe._id}
                  onDeleteHandler={onDeleteHandler}
                  {...recipe}
                />
              ))}
            </List>
            <Pagination
              currentPage={ownRecipes.currentPage}
              pageSize={ownRecipes.perPage}
              totalCount={ownRecipes.totalOwnRecipes}
              onPageChange={handleChange}
            />
          </>
        ) : (
          <EmptyInfo>
            <SearchCapImage>
              You don't have any saved recipes yet.
            </SearchCapImage>
          </EmptyInfo>
        )}
      </MainContainer>
    </Section>
  );
};

export default MyRecipesPage;
