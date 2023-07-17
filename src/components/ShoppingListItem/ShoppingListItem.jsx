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
import { useDeleteProductMutation } from 'redux/shopping-list/productsSlice';
import { showMessageToast } from 'components/ReusableComponents/ToastCustom/showToast';

const ShoppingListItem = ({ product }) => {
  const [deleteProduct] = useDeleteProductMutation();

  const clickHandler = product => {
    showMessageToast('Product`s deleted!');
    deleteProduct({
		ingredientId: product._id,
		recipeId: product.recipeId,
		measure: product.measure
	 });
	 console.log({ingredientId: product._id,
		recipeId: product.recipeId,
		measure: product.measure})
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
        <ProductQuantity>{product.measure}</ProductQuantity>
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
