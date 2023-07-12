import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { recipeOperations } from 'redux/recipes/operations';
// import { ingredientOperations } from 'redux/ingredients/operations';

const AddRecipePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(recipeOperations.getCategoryList());
    // dispatch(ingredientOperations.getIngredientsList());
  }, [dispatch]);

  return <>add</>;
};
export default AddRecipePage;