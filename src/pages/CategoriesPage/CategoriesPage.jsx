import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { recipeOperations } from 'redux/recipes/operations';
import { CategoryList } from "components/CategoryList/CategoryList";
import { CategoryItemList } from "components/CategoryItemList/CategoryItemList";
import PageTitle from "components/ReusableComponents/PageTitle/PageTitle";
import { MainEl } from "components/Main/Main.styled";

const CategoriesPage = () => {
  const [currentCategory, setCurrentCategory] = useState('beef')
  const { categoryName } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentCategory(categoryName)
    dispatch(recipeOperations.getRecipesByCategory(categoryName))
  }, [categoryName])

  useEffect(() => {
		dispatch(recipeOperations.getCategoryList())
  }, [dispatch])


  return <MainEl paddingBottom={'100px'}>
      <PageTitle title={'Categories'} />
    <CategoryList currentCategory={currentCategory} />
    <CategoryItemList/>
    </MainEl>
};

export default CategoriesPage;