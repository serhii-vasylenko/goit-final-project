import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToShoppingList, removeFromShoppingList } from 'redux/shopping-list/operations';
import { CheckBox} from './RecipeInngredientsList.styled'

const CustomCheckbox = ({ ingredient, shoppingList, recipeId }) => {
   // console.log(ingredient);
   // console.log(recipeId)
   // console.log(shoppingList);
   
   const [checked, setChecked] = useState(false);
   const dispatch = useDispatch();
   const { _id: ingredientId, measure } = ingredient;

//    useEffect(() => {
//     if (shoppingList.length > 0) {
//       const inShoppingList = shoppingList.filter(
//         item => item.ingredientId === _id
//       );
//        setChecked(inShoppingList ? inShoppingList.id : false);
       
//     }
//   }, [shoppingList, dispatch, _id]);


//   const toggleCheckBox = ( product) => {
//     if (checked) {
//        dispatch(removeFromShoppingList(checked))
//        setChecked(false);
//     } else {
//        dispatch(addToShoppingList(product))
//        setChecked(true);
//     }
//   };
   const toggleCheckBox = ({ measure, ingredientId, recipeId }) => {
     if (shoppingList.length === 0) return;

     const alreadyInSL = shoppingList.filter(
       item => item._id === ingredientId && item.recipeId === recipeId
     );
     //   (item._id === ingredientId && item.recipeId === recipeId)

     if (alreadyInSL.length > 0) {
       dispatch(
         removeFromShoppingList({
           ingredientId: ingredientId,
           recipeId: recipeId,
           measure: measure,
         })
       );
       setChecked(false);
     } else {
       dispatch(
         addToShoppingList({
           ingredientId: ingredientId,
           recipeId: recipeId,
           measure: measure,
         })
       );
       setChecked(true);
     }
   };

   
   
  return (
     <CheckBox
        type="checkbox"
        checked={checked}
      onChange={() => toggleCheckBox({ measure, ingredientId, recipeId})}
    >
     
    </CheckBox>
  );
}

export default CustomCheckbox
