import { useState } from "react"
import { Link } from "react-router-dom"
import { Categories, Category, Line, ItemLine } from "./CategoryList.styled"
export const CategoryList = ({list}) => {
    // const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState(null)
    // const onCategoryClick = () => {
        
    // }
    return <>
        <Categories>
            {list.map(item => {
                return <Category onClick={() => setActiveCategory(item)} className={item === activeCategory ? 'active' : ' '}>
                    <Link to={`/categories/${item}`}>
                        {item}
                        <ItemLine />
                    </Link>
                </Category>
            })}
        </Categories>
        <Line/>
    </>
}