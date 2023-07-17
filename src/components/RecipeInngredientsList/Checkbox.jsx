import React from 'react'
// import { useAddProductMutation, useDeleteProductMutation } from 'redux/shopping-list/productsSlice';
import { CheckBox } from './RecipeInngredientsList.styled';

const CustomCheckBox = ({ ingredients, addToShopList }) => {
  
  // const { _id, name, title, measure } = ingredients;


  return (
    <CheckBox
      type="checkbox"
      // onChange={addToShopList}
     >
      
    </CheckBox>
  )
}

export default CustomCheckBox;
