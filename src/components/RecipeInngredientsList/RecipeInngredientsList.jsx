import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIngredientsList } from 'redux/ingredients/ingredientsSelector';
import getIngredientsList from 'redux/ingredients/operations/getIngredientsList';
import {
  IngredientList,
  IngredientItem,
  ImageContainer,
  NameIngredient,
  IngredientMeasure,
  ItemContainer,
  TextContainer,
} from './RecipeInngredientsList.styled';

const RecipeInngredientsList = ({ ingredients } ) => {


//   const ingredientsList = useSelector(selectIngredientsList);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getIngredientsList());
//   }, [dispatch]);
   
//    console.log(ingredientsList)






  //  console.log(ingredients)
   
 

  return (
    <IngredientList>
      {ingredients.map(({ _id, measure, img, name, desc }) => {
        return (
          <IngredientItem key={`${measure}_${_id}`}>
            <ItemContainer>
              <ImageContainer>
                <img src={img} alt="name" />
              </ImageContainer>
              <TextContainer>
                <NameIngredient>{name}</NameIngredient>
              </TextContainer>

              <IngredientMeasure>{measure}</IngredientMeasure>
            </ItemContainer>
          </IngredientItem>
        );
      })}
    </IngredientList>
  );
};

export default RecipeInngredientsList;
