import { useDispatch, useSelector } from 'react-redux';
import { useLayoutEffect, useRef } from 'react';

import getOwnRecipe from 'redux/recipes/operations/getOwnRecipes';
import { selectUser } from 'redux/auth/selectors';
import usePagination from 'hooks/usePagination';

import { MainContainer } from 'components/MainContainer/MainContainer';
import Paginator from 'components/ReusableComponents/Paginator/Paginator';
import Loader from 'components/ReusableComponents/Loader/Loader';
import RecipeCardItem from 'components/ReusableComponents/RecipeCardItem/RecipeCardItem';

import { EmptyInfo, List, Section, Title } from './MyRecipiesPage.styled';
import SearchCapImage from 'components/ReusableComponents/SearchCap/SearhCap';
import deleteownRecipe from 'redux/recipes/operations/deleteOwnRecipe';

const MyRecipesPage = () => {
  const { userId } = useSelector(selectUser);
  const { isLoading, error, ownRecipes } = useSelector(state => state.recipes);
  const listRef = useRef(null);
  const dispatch = useDispatch();
  const PER_PAGE = 3;

  const data = usePagination(ownRecipes, PER_PAGE);

  const handleChange = (e, p) => {
    data.jump(p);
    listRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const onDeleteHandler = id => {
    dispatch(deleteownRecipe(id));
  };

  useLayoutEffect(() => {
    dispatch(getOwnRecipe(userId));
  }, [dispatch, userId]);

  return (
    <Section>
      <MainContainer>
        <Title title="My recipes" />
        {isLoading ? (
          <Loader />
        ) : error ? (
          <div>{error}</div>
        ) : ownRecipes.length ? (
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
              You don't have any saved recipes yet.
            </SearchCapImage>
          </EmptyInfo>
        )}
      </MainContainer>
    </Section>
  );
};

export default MyRecipesPage;
