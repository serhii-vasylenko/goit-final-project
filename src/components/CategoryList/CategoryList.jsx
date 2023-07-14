import { Link } from "react-router-dom"
import { selectCategoryList } from "redux/recipes/recipesSelector"
import { Categories, Category, Line, ItemLine } from "./CategoryList.styled"
import { useSelector } from "react-redux"
export const CategoryList = ({currentCategory}) => {
    const categories = useSelector(selectCategoryList)

    return <div style={{ overflow: 'hidden' }}>
        <Categories>
            {categories.map(item => {
                return <Category key={item._id} className={item.name === currentCategory ? 'active' : null}>
                    <Link to={`/categories/${item.name}`}>
                        {item.name}
                        <ItemLine />
                    </Link>
                </Category>
            })}
        </Categories>
        <Line/>
    </div>
}