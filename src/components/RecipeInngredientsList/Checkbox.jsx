import React from 'react'
// import { useAddProductMutation, useDeleteProductMutation } from 'redux/shopping-list/productsSlice';
import { CheckBox } from './RecipeInngredientsList.styled';

const CustomCheckBox = ({ ingredients, clickHandler }) => {
  
  // const { _id, name, title, measure } = ingredients;


  return (
    <CheckBox
      type="checkbox"
      onChange={clickHandler}
     >
      
    </CheckBox>
  )
}

export default CustomCheckBox;
