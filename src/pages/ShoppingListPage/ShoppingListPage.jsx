import PageTitle from 'components/ReusableComponents/PageTitle/PageTitle';
import {
  HeadContainer,
  ProductsHead,
  ShoppingList,
} from './ShoppingList.styled';
import { MainContainer } from 'components/MainContainer/MainContainer';
import ShoppingListItem from 'components/ShoppingListItem/ShoppingListItem';
// import { useGetProductsQuery } from 'redux/shopping-list/productsSlice';

const ShoppingListPage = () => {
//   const { data, error, isLoading } = useGetProductsQuery();
//   console.log("Products", data)
  

  return (
    <MainContainer>
      <PageTitle title="Shopping list"></PageTitle>

      <ProductsHead>
        <div>Products</div>
        <HeadContainer>
          <div>Number</div>
          <div>Remove</div>
        </HeadContainer>
      </ProductsHead>

      <ShoppingList>
        <ShoppingListItem />
      </ShoppingList>

		{/* <ShoppingList>
          {products.map(item => (
            <li key={item.id}>{<ShoppingListItem item={item} />}</li>
          ))}
      </ShoppingList> */}
    </MainContainer>
  );
};
export default ShoppingListPage;
