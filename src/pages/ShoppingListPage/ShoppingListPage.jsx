//import PageTitle from 'components/ReusableComponents/PageTitle/PageTitle';
import {
  HeadContainer,
  ProductsHead,
  Section,
  ShoppingList,
  Title,
} from './ShoppingList.styled';
import { MainContainer } from 'components/MainContainer/MainContainer';
import ShoppingListItem from 'components/ShoppingListItem/ShoppingListItem';
// import { useGetProductsQuery } from 'redux/shopping-list/productsSlice';

const ShoppingListPage = () => {
//   const { data, error, isLoading } = useGetProductsQuery();
//   console.log("Products", data)
  

  return (
	<Section>

	
    <MainContainer>
      <Title title="Shopping list"></Title>

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
	 </Section>
  );
};
export default ShoppingListPage;
