import { useDispatch } from 'react-redux';

import { removeFromShoppingList } from 'redux/shopping-list/operations';
import { showMessageToast } from 'components/ReusableComponents/ToastCustom/showToast';

import sprite from '../../images/sprite.svg';
import defaultImage from '../../images/shoppingListPage/avocado.png';
import {
  CrossIcon,
  DeleteBtn,
  DescriptionContainer,
  Item,
  NumberContainer,
  ProductName,
  ProductQuantity,
  ShoppingImage,
  ShoppingImageContainer,
} from './ShoppingListItem.styled';

const ShoppingListItem = ({ product }) => {
  const dispatch = useDispatch();

  const clickHandler = product => {
    showMessageToast('Product was deleted from your shopping-list.');

    dispatch(
      removeFromShoppingList({
        ingredientId: product._id,
        recipeId: product.recipeId,
        measure: product.measure,
      })
    );
  };

  return (
    <Item>
      <DescriptionContainer>
        <ShoppingImageContainer>
          <ShoppingImage
            src={product.img ? product.img : defaultImage}
            alt={product.name}
          ></ShoppingImage>
        </ShoppingImageContainer>

        <ProductName>{product.name}</ProductName>
      </DescriptionContainer>

      <NumberContainer>
        <ProductQuantity>{product.measure ?? 'No info'}</ProductQuantity>
        <DeleteBtn onClick={() => clickHandler(product)}>
          <CrossIcon>
            <use href={`${sprite}#icon-cross`}></use>
          </CrossIcon>
        </DeleteBtn>
      </NumberContainer>
    </Item>
  );
};
export default ShoppingListItem;
