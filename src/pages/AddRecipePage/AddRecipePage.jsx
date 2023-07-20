import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recipeOperations } from 'redux/recipes/operations';
import { ingredientOperations } from 'redux/ingredients/operations';
import { MainContainer } from 'components/MainContainer/MainContainer';
import AddRecipeForm from 'components/AddRecipeForm/';
import PageTitle from 'components/ReusableComponents/PageTitle/';
import { selectIngredientsList } from 'redux/ingredients/ingredientsSelector';
import PopularRecipes from 'components/PopularRecipes/PopularRecipes';
import Networks from 'components/ReusableComponents/Networks/';
import FormLoader from 'components/FormLoader/';
import { selectTheme } from 'redux/theme/selectors';
import {
  FormSection,
  SectionPopular,
  PopularTitle,
  FollowUsSection,
  FollowUsTitle,
  Wrapper,
  Container,
  PageTitleWrap,
} from './AddRecipePage.styled';


const AddRecipePage = () => {
  const dispatch = useDispatch();
  const themas = useSelector(selectTheme);

  useEffect(() => {
    dispatch(ingredientOperations.getIngredientsList());
    dispatch(recipeOperations.getCategoryList());
    dispatch(recipeOperations.getPopularRecipes());
  }, [dispatch]);

  const ingredientsList = useSelector(selectIngredientsList);

  return (
    <MainContainer>
      <PageTitleWrap>
        <PageTitle title={'Add recipe'} />
      </PageTitleWrap>

      <Wrapper>
        <FormSection>
          {ingredientsList ? <AddRecipeForm /> : <FormLoader />}
        </FormSection>

        <Container>
          <FollowUsSection>
            <FollowUsTitle>Follow us</FollowUsTitle>
            <Networks
              wFacebook={26}
              hFacebook={26}
              wYoutube={28}
              hYoutube={22}
              wTwitter={25}
              hTwitter={22}
              wInstagram={24}
              hInstagram={24}
              hoverColor={themas === 'light' ? '#1E1F28' : '#fafafa'}
              flex={'start'}
              boxShadow={'0 0 5px rgba(217, 217, 217, 1)'}
              outline={'none'}
              borderRadius={'4px'}
              iconColor={({ theme }) => theme.colors.accentColor}
            />
          </FollowUsSection>

          <SectionPopular>
            <PopularTitle>Popular recipe</PopularTitle>
            <PopularRecipes />
          </SectionPopular>
        </Container>
      </Wrapper>
    </MainContainer>
  );
};
export default AddRecipePage;
