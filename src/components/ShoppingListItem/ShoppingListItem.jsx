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

  const clickHandler = productId => {
    showMessageToast('Product`s deleted!');
    deleteProduct({});
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
        <ProductQuantity></ProductQuantity>
        <DeleteBtn onClick={() => clickHandler(product._id)}>
          <CrossIcon>
            <use href={`${sprite}#icon-cross`}></use>
          </CrossIcon>
        </DeleteBtn>
      </NumberContainer>
    </Item>
  );
};
export default ShoppingListItem;
