import { selectRecipesByCategory } from "redux/recipes/recipesSelector"
import { useSelector } from "react-redux"
export const CategoryItemList = () => {
    const categoryItems = useSelector(selectRecipesByCategory)
    console.log(categoryItems);
    return <ul>
        {categoryItems.map(item => {
            <li key={item._id}>
                {item.name}
            </li>
        })}

    </ul>
}