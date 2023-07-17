import FormError from 'components/ReusableComponents/FormError/FormError';
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
import Loader from 'components/ReusableComponents/Loader/Loader';

const ShoppingListPage = () => {
  const { data, error, isLoading } = useGetProductsQuery();

    if (data) {
      console.log('Shopping-list', data);
    }

  if (error) {
    showErrorToast(error);
  }

  return (
    <Section>
      {isLoading && <Loader />}
      <MainContainer>
        <Title title="Shopping list"></Title>

        <ProductsHead>
          <div>Products</div>
          <HeadContainer>
            <div>Number</div>
            <div>Remove</div>
          </HeadContainer>
        </ProductsHead>

        {data && data.data.shoppingList.length === 0 && (
          <FormError>
            There are not any products in your shopping-list
          </FormError>
        )}

        {data && data.data.shoppingList.length > 0 && (
          <ShoppingList>
            {data.data.shoppingList.map(product => (
              <Item key={product._id}>
                {<ShoppingListItem product={product} />}
              </Item>
            ))}
          </ShoppingList>
        )}
      </MainContainer>
    </Section>
  );
};
export default ShoppingListPage;
