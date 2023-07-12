import { recipeHeroWrapper } from './RecipePageHero.styled'

const RecipePageHero = ({children}) => {
  return <recipeHeroWrapper>{children}<recipeHeroWrapper/>; 
}

export default RecipePageHero
