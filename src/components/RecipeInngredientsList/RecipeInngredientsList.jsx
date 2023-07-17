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

  // const { data: shoppingList } = useGetProductsQuery()
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

              <ContentWrap>    
                <IngredientMeasure>{measure}</IngredientMeasure>
                <CustomCheckBox id={_id} measure={measure}/>
              </ContentWrap>
           
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
