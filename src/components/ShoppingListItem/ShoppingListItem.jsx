import sprite from '../../images/sprite.svg';
import defaultImage from '../../images/shoppingListPage/avocado.png';
import {
	CrossIcon,
  DescriptionContainer,
  Item,
  NumberContainer,
  ProductName,
  ProductQuantity,
  ShoppingImage,
  ShoppingImageContainer,
} from './ShoppingListItem.styled';

// import { useDeleteProductMutation } from 'redux/shopping-list/productsSlice';

const ShoppingListItem = id => {
//   const [deleteProduct, { isLoading }] = useDeleteProductMutation();
//   const clickHandler = () => {
//     deleteProduct(id);
//   };
  return (
    <ul>
      <Item>
        <DescriptionContainer>
          <ShoppingImageContainer>
            <ShoppingImage src={defaultImage} alt=""></ShoppingImage>
          </ShoppingImageContainer>

          <ProductName>Avocado</ProductName>
        </DescriptionContainer>

        <NumberContainer>
          <ProductQuantity>3</ProductQuantity>
          {/* <button onClick={() => clickHandler(id)}> */}
            <CrossIcon>
              <use href={`${sprite}#icon-cross`}></use>
            </CrossIcon>
          {/* </button> */}
        </NumberContainer>
      </Item>
    </ul>
  );
};
export default ShoppingListItem;
