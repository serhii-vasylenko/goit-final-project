import { useSelector } from "react-redux"
import { selectRecipesByCategory } from "redux/recipes/recipesSelector"
import RecipeGalleryItem from "components/ReusableComponents/RecipeGalleryItem/RecipeGalleryItem";
import { Gallery } from "./CategoryGallery.styled";
export const CategoryGallery = () => {
    const categoryItems = useSelector(selectRecipesByCategory)
    return <Gallery>
        {categoryItems?.map(({ _id: id, title, preview }) => {
            let recipePhoto = '';

            if (preview) {
            recipePhoto = preview;
            } else {
            recipePhoto =
                'https://cdn.pixabay.com/photo/2012/04/18/23/29/film-38241_960_720.png';
            }
            return (
                <RecipeGalleryItem key={id} id={id} title={title} src={recipePhoto} />

           )
        })}

    </Gallery>
}