import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import React from 'react';
import { selectIngredientsList } from 'redux/ingredients/ingredientsSelector';

const RecipeInngredientsList = ({ ingredients, recipe_id }) => {




  return (
    <ul>
      {ingredients.map(({ _id, ttl, thb, measure }) => {
        return (
      <li key={nanoid()} >
        <p>{ttl}</p>           
          </li>
        );
      })}
    </ul>
  );
};

export default RecipeInngredientsList;