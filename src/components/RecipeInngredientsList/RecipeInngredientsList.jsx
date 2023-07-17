import { useAddProductMutation, useGetProductsQuery, useDeleteProductMutation } from 'redux/shopping-list/productsSlice';
// import CustomCheckBox from './Checkbox';
import {
  IngredientList,
  IngredientItem,
  NameIngredient,
  IngredientMeasure,
  HeaderList,
  ContainerList,
  ContentWrap,
  ContentWrapMeasure,
  Image,
  CheckBox
} from './RecipeInngredientsList.styled';

const RecipeInngredientsList = ({ ingredients, recipeId }) => {

  const { _id, measure, name, img } = ingredients;

  // const { data: shoppingList } = useGetProductsQuery();
  // const [deleteProduct] = useDeleteProductMutation();
  // const [addProduct] = useAddProductMutation();


  return (
    <>
      {ingredients && (
        <ContainerList>
          <HeaderList>
            <p>Ingredients</p>
            <p>
              Number
              <span>Add to list</span>
            </p>
          </HeaderList>
          <IngredientList>
            {ingredients?.map(({ _id, measure, img, name }) => {
              return (
                <IngredientItem key={`${measure}_${_id}`}>
                  <ContentWrap>
                    <Image src={img} alt="name" />
                    <NameIngredient>{name}</NameIngredient>
                  </ContentWrap>

                  <ContentWrapMeasure>
                    <IngredientMeasure>{measure}</IngredientMeasure>
                    <CheckBox
                      recipeId={recipeId}
                      type="checkbox"
                      ingredient={{ _id, measure, img, name }}
                    />
                  </ContentWrapMeasure>
                </IngredientItem>
              );
      })}
    </IngredientList>
    </ContainerList> 
     
    )}
       </> 
  );
};

export default RecipeInngredientsList;
