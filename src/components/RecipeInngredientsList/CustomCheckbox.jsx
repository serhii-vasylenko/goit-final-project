import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addToShoppingList,
  removeFromShoppingList,
} from 'redux/shopping-list/operations';
import { CheckBox } from './RecipeInngredientsList.styled';

const CustomCheckbox = ({ ingredient, shoppingList, recipeId }) => {
  // //console.log(ingredient);
  // //console.log(recipeId)
  // //console.log(shoppingList);

  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const { _id, measure } = ingredient;

  //    useEffect(() => {
  //     if (shoppingList.length > 0) {
  //       const inShoppingList = shoppingList.filter(
  //         item => item.ingredientId === _id
  //       );
  //        setChecked(inShoppingList ? inShoppingList.id : false);

  //     }
  //   }, [shoppingList, dispatch, _id]);

  const toggleCheckBox = product => {
    if (checked) {
      dispatch(removeFromShoppingList(checked));
      setChecked(false);
    } else {
      dispatch(addToShoppingList(product));
      setChecked(true);
    }
  };

  return (
    <CheckBox
      type="checkbox"
      checked={checked}
      onChange={() => toggleCheckBox({ measure, ingredientId: _id, recipeId })}
    ></CheckBox>
  );
};

export default CustomCheckbox;
