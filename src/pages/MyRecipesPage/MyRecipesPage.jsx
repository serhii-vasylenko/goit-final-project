import myRecipesSmall from './images/myRecipesSmall.png';
import myRecipesSmall2x from './images/myRecipesSmall@2x.png';
import myRecipesLarge from './images/myRecipesLarge.png';
import myRecipesLarge2x from './images/myRecipesLarge@2x.png';
import { MainContainer } from 'components/MainContainer/MainContainer';
import Paginator from 'components/ReusableComponents/Paginator/Paginator';
import Loader from 'components/ReusableComponents/Loader/Loader';
import RecipeCardItem from 'components/ReusableComponents/RecipeCardItem/RecipeCardItem';
import {
  ImageContainer,
  List,
  Section,
  Text,
  Title,
} from './MyRecipiesPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useLayoutEffect, useRef } from 'react';
import getOwnRecipe from 'redux/recipes/operations/getOwnRecipe';
import { selectUser } from 'redux/auth/selectors';
import usePagination from 'hooks/usePagination';

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

  useLayoutEffect(() => {
    dispatch(getOwnRecipe(userId));
  }, []);

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
                <RecipeCardItem key={recipe._id} {...recipe} />
              ))}
            </List>
            <Paginator
              count={data.count}
              page={data.page()}
              handleChange={handleChange}
            />
          </>
        ) : (
          <ImageContainer>
            <picture>
              <source
                srcSet={`${myRecipesLarge} 1x, ${myRecipesLarge2x} 2x`}
                media="(min-width: 768px)"
              />
              <source
                srcSet={`${myRecipesSmall} 1x, ${myRecipesSmall2x} 2x`}
                media="(max-width: 767px)"
              />
              <img src={myRecipesSmall} alt="vegitable" />
            </picture>
            <Text>You don't have any saved recipes yet.</Text>
          </ImageContainer>
        )}
      </MainContainer>
    </Section>
  );
};

export default MyRecipesPage;
