import { useAddProductMutation, useGetProductsQuery, useDeleteProductMutation } from 'redux/shopping-list/productsSlice';
import CustomCheckBox from './Checkbox';
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
} from './RecipeInngredientsList.styled';

const RecipeInngredientsList = ({ ingredients, recipeId }) => {

  const { _id, measure, name, img } = ingredients;

  const { data } = useGetProductsQuery();
  // const [deleteProduct] = useDeleteProductMutation();
  const [addProduct] = useAddProductMutation();

  // function getIngredient(id) {
  //   if (shoppingList.length !== 0) {
  //     const ingredientId = shoppingList?.some(ingredient => ingredient.recipeId === id);
  //     return ingredientId;
  //   }
  //   return false;
  // };

  // const inShoppingList = getIngredient(recipeId);

   const toggleToShoppingList = (ingredients) => {
    // if (inShoppingList) {
    //   const ingredient = shoppingList.find(item => {
    //     return item.recipeId === recipeId;
    //   });
    //   deleteProduct(ingredient._id);
    //   return;
    // }
   
      addProduct({
        measure,
        name,
        img,
        recipeId,
      })
    ;
    return;
  };

  // console.log(data.data.shoppingList)
  // const [addProduct] = useAddProductMutation();

  //   const clickHandler = ingredients => {
  //     addProduct({ ingredientId: _id, recipeId: _id, measure: measure });
  //   };

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
                    <CustomCheckBox clickHandler={toggleToShoppingList} />
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
