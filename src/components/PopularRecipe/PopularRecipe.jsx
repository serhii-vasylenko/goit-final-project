import React from "react"
import { useSelector } from "react-redux"
import { selectPopularRecipes } from "redux/recipes/recipesSelector"

const PopularRecipes = () => {
     const popularRecipes = useSelector(selectPopularRecipes);
     const intoProduction = popularRecipes.slice(3);
     console.log("🚀 ~ file: PopularRecipe.jsx:9 ~ PopularRecipes ~ intoProduction:", intoProduction)
     
     return (
        <section>
            <h2>Popular recipe</h2>
        </section>
     )
 
    
}

export default PopularRecipes;