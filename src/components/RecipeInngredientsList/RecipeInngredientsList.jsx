// import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import { useDispatch } from 'react-redux';
// import {useGetProductsQuery, useAddProductMutation} from '../../redux/shopping-list/productsSlice'

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

const RecipeInngredientsList = ({ ingredients }) => {
  // const [shopList, setShopList] = useState([]);
  // // const dispatch = useDispatch()
  // const { data: shoppingList } = useGetProductsQuery()
  // const [addProduct] = useAddProductMutation();

  // const addToShopList = (e, _id) => {
  //   e.preventDefault();
  //   if(ingredients._id) {
  //      addProduct()
  //   }
   
    
  // }

  // useEffect(() => {
  //   setShopList(shoppingList)
  // },[shoppingList])

  // console.log(shoppingList)
 
  // const addToList = (ingredient, id) => {
  //   const { name, _id, measure, title } = ingredients; 
  //   addProduct()
  // }


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
                    <CustomCheckBox
                      // shoppingList={shoppingList}
                      // addToShopList={addToShopList}
                      ingredients={ingredients}
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
