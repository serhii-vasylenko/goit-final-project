import PageTitle from 'components/ReusableComponents/PageTitle/PageTitle';
import { HeadContainer, ProductsHead } from './ShoppingList.styled';

const ShoppingListPage = () => {
  return (
    <>
      <PageTitle title="Shopping list"></PageTitle>
      <ProductsHead>
        <div>Products</div>
        <HeadContainer>
          <div>Number</div>
          <div>Remove</div>
        </HeadContainer>
      </ProductsHead>
    </>
  );
};
export default ShoppingListPage;
