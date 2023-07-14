import React from "react"
import { useSelector } from "react-redux"
import { selectPopularRecipes } from "redux/recipes/recipesSelector"

const PopularRecipes = () => {
    const popularRecipes = useSelector(selectPopularRecipes);
    // console.log("🚀 ~ file: PopularRecipe.jsx:7 ~ PopularRecipes ~ popularRecipes:", popularRecipes)
    
}

export default PopularRecipes;