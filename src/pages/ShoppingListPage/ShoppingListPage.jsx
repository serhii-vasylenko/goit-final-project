import {
  HeadContainer,
  Item,
  ProductsHead,
  Section,
  ShoppingList,
  Title,
} from './ShoppingList.styled';
import { MainContainer } from 'components/MainContainer/MainContainer';
import { showErrorToast } from 'components/ReusableComponents/ToastCustom/showToast';
import ShoppingListItem from 'components/ShoppingListItem/ShoppingListItem';
import { useGetProductsQuery } from 'redux/shopping-list/productsSlice';
import SearchCapImage from 'components/ReusableComponents/SearchCap/SearhCap';

const ShoppingListPage = () => {
  const { data, error} = useGetProductsQuery();

  if (!data) {
    return;
  }

  if (data) {
    console.log('Shopping-list', data);
  }

  if (error) {
    showErrorToast(error);
  }

  return (
    <Section>
      {/* {isLoading && <Loader />} */}
      <MainContainer>
        <Title title="Shopping list"></Title>

        {data && data.data.shoppingList.length <= 0 && (
          <SearchCapImage>
            There are not any products in your shopping-list
          </SearchCapImage>
        )}

        {data && data.data.shoppingList.length > 0 && (
          <>
            <ProductsHead>
              <div>Products</div>
              <HeadContainer>
                <div>Number</div>
                <div>Remove</div>
              </HeadContainer>
            </ProductsHead>

            <ShoppingList>
              {data.data.shoppingList.map(product => (
                <Item key={product._id + Math.random()}>
                  {<ShoppingListItem product={product} />}
                </Item>
              ))}
            </ShoppingList>
          </>
        )}
      </MainContainer>
    </Section>
  );
};
export default ShoppingListPage;
