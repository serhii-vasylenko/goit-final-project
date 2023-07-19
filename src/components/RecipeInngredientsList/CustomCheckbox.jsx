import { useDispatch } from 'react-redux';

import {
  addToShoppingList,
  removeFromShoppingList,
} from 'redux/shopping-list/operations';
import { CheckBox } from './RecipeInngredientsList.styled';
import { showMessageToast } from 'components/ReusableComponents/ToastCustom/showToast';

const CustomCheckbox = ({ ingredient, shoppingList, recipeId }) => {
  const dispatch = useDispatch();
  const { _id, measure } = ingredient;

  const isProductInShoppingList = _id => {
    if (shoppingList.length !== 0) {
      const product = shoppingList.some(
        item => item._id === _id && item.recipeId === recipeId
      );
      return product;
    }
    return false;
  };

  const inShoppingList = isProductInShoppingList(_id);

  const toggleCheckBox = () => {
    if (inShoppingList) {
      dispatch(
        removeFromShoppingList({ measure, ingredientId: _id, recipeId })
      );
      showMessageToast('Product was deleted from your shopping-list.');
    } else {
      dispatch(addToShoppingList({ measure, ingredientId: _id, recipeId }));
      showMessageToast('Product was added to your shopping-list.');
    }
    return;
  };

  return (
    <CheckBox
      type="checkbox"
      checked={inShoppingList}
      onChange={toggleCheckBox}
    />
  );
};

export default CustomCheckbox;
