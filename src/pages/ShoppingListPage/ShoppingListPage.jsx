import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { nanoid } from 'nanoid';

import { MainContainer } from 'components/MainContainer/MainContainer';
import ShoppingListItem from 'components/ShoppingListItem/ShoppingListItem';
import SearchCapImage from 'components/ReusableComponents/SearchCap/SearhCap';
import { selectShoppingList } from 'redux/shopping-list/selectors';
import { getShoppingList } from 'redux/shopping-list/operations';

import {
  HeadContainer,
  Item,
  NotFound,
  ProductsHead,
  ShoppingList,
} from './ShoppingList.styled';
import PageTitle from 'components/ReusableComponents/PageTitle/PageTitle';

const ShoppingListPage = () => {
  const dispatch = useDispatch();
  const shoppingList = useSelector(selectShoppingList);

  useEffect(() => {
    dispatch(getShoppingList());
  }, [dispatch]);

  return (
    <MainContainer>
      <PageTitle title="Shopping list"></PageTitle>

      {shoppingList.length <= 0 && (
        <NotFound>
          <SearchCapImage>
            There are no products in your shopping-list
          </SearchCapImage>
        </NotFound>
      )}

      {shoppingList.length > 0 && (
        <>
          <ProductsHead>
            <div>Products</div>
            <HeadContainer>
              <div>Quantity</div>
              <div>Remove</div>
            </HeadContainer>
          </ProductsHead>

          <ShoppingList>
            {shoppingList.map(product => (
              <Item key={nanoid()}>
                {<ShoppingListItem product={product} />}
              </Item>
            ))}
          </ShoppingList>
        </>
      )}
    </MainContainer>
  );
};
export default ShoppingListPage;
