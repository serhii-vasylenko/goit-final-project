import { nanoid } from 'nanoid'
import React from 'react'


const RecipeInngredientsList = ({ingredients, recipe_id}) => {
  return (
    <ul>

      {ingredients.map((ingredient, index) => {
        return (
          <li
            key={nanoid()}
          nameOfIngredient = {ingredient.id.name}
          >
            Test
          </li>
        )
      })}
       
    </ul>
  )
}

export default RecipeInngredientsList
