import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

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
import { getShoppingList } from 'redux/shopping-list/operations';
import { selectShoppingList } from 'redux/shopping-list/selectors';
import CustomCheckbox from './CustomCheckbox';

const RecipeInngredientsList = ({ ingredients, recipeId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingList());
  }, [dispatch]);

  const shoppingList = useSelector(selectShoppingList);

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
                    <IngredientMeasure>
                      {measure ?? 'No info'}
                    </IngredientMeasure>
                    <CustomCheckbox
                      ingredient={{ _id, name, img, measure }}
                      shoppingList={shoppingList}
                      recipeId={recipeId}
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
