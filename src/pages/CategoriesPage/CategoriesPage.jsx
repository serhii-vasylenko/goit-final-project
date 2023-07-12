import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import getCategoryList from "redux/recipes/operations/getCategoryList";
import { CategoryList } from "components/CategoryList/CategoryList";
import PageTitle from "components/ReusableComponents/PageTitle/PageTitle";
import { MainEl } from "components/Main/Main.styled";
const categrs = ['beef', 'breakfast', 'chicken', 'dessert', 'goat', 'lamb', 'miscellaneous', 'pasta', 'pork', 'seafood', 'side']

const CategoriesPage = () => {
  const [currentCategory, setCurrentCategory] = useState('beef')
  const { categoryName } = useParams();
  const categories = useSelector(state => state.recipes.categoryList)
  console.log(categories);
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentCategory(categoryName)
  }, [categoryName])

  useEffect(() => {
		dispatch(getCategoryList())
  }, [dispatch])

  console.log('current', currentCategory);

  return <MainEl paddingBottom={'100px'}>
      <PageTitle title={'Categories'} />
      <CategoryList list={categrs} />
    </MainEl>
};

export default CategoriesPage;