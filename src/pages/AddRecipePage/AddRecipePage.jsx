import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recipeOperations } from 'redux/recipes/operations';
import { ingredientOperations } from 'redux/ingredients/operations';
import { MainContainer } from 'components/MainContainer/MainContainer';
import AddRecipeForm from 'components/AddRecipeForm/AddRecipeForm';
import PageTitle from 'components/ReusableComponents/PageTitle/PageTitle';
import { selectIngredientsList } from 'redux/ingredients/ingredientsSelector';
import PopularRecipes from 'components/PopularRecipes/PopularRecipes';
import Networks from 'components/ReusableComponents/Networks/Networks';
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
        {ingredientsList && <AddRecipeForm />}
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
          hoverColor={'#1E1F28'}
          flex={'start'}
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
