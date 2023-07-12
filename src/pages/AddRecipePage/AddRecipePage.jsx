import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { recipeOperations } from 'redux/recipes/operations';
// import { ingredientOperations } from 'redux/ingredients/operations';
import { MainContainer } from 'components/MainContainer/MainContainer';
import AddRecipeForm from 'components/AddRecipeForm/AddRecipeForm';
import PageTitle from 'components/ReusableComponents/PageTitle/PageTitle';

const AddRecipePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(recipeOperations.getCategoryList());
    // dispatch(ingredientOperations.getIngredientsList());
  }, [dispatch]);

  return (
    <MainContainer>
      <PageTitle title={'Add recipe'} />
      <AddRecipeForm />
    </MainContainer>
  );
};
export default AddRecipePage;
