import { Svg, NoPopularTitle } from './NoPopularRecipes.styled';
import sprite from '../../images/AddRecipePage/sprite.svg';

const NoPopularRecipes = () => {
    return (
        <div>
            <Svg>
            <use href={`${sprite}#cat`}></use>
          </Svg>
          <NoPopularTitle>No new popular recipes yet</NoPopularTitle>
        </div>
    )
}

export default NoPopularRecipes;