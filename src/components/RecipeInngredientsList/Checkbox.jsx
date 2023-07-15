import React from 'react'
// import { useAddProductMutation, useDeleteProductMutation } from 'redux/shopping-list/productsSlice';
import { CheckBox } from './RecipeInngredientsList.styled';

const CustomCheckBox = ({ ingredients, addToShopList }) => {
  
  // const { _id, name, title, measure } = ingredients;

//   const [deleteProduct] = useDeleteProductMutation();
//   const [addProduct] = useAddProductMutation();

//   const inShoppingList = shoppingList.data.find((product) => product.title === title);
  
//   const handleChange = (id) => {
//     if (inShoppingList) {
// addProduct(id)
//     }
//     deleteProduct(id)
//   }

  return (
    <CheckBox
      type="checkbox"
      // onChange={addToShopList}
     >
      
    </CheckBox>
  )
}

export default CustomCheckBox;
