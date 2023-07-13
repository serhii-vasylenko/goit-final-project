// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectIngredientsList } from 'redux/ingredients/ingredientsSelector';
// import getIngredientsList from 'redux/ingredients/operations/getIngredientsList';
import CustomCheckBox from './Checkbox';
import {
  IngredientList,
  IngredientItem,
  ImageContainer,
  NameIngredient,
  IngredientMeasure,
  HeaderList,
  ContainerList,
  ContentWrap
} from './RecipeInngredientsList.styled';

const RecipeInngredientsList = ({ ingredients } ) => {

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
      {ingredients?.map(({ _id, measure, img, name}) => {
        return (
          <IngredientItem key={`${measure}_${_id}`}>
           
              <ContentWrap>
                <ImageContainer>
                  <img src={img} alt="name" />
              </ImageContainer>
               <NameIngredient>{name}</NameIngredient>
              </ContentWrap>

              <ContentWrap>    
                <IngredientMeasure>{measure}</IngredientMeasure>
                <CustomCheckBox />
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
