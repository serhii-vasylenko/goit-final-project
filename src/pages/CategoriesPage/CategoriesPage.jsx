import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { recipeOperations } from 'redux/recipes/operations';
import { CategoryList } from "components/CategoryList/CategoryList";
import { CategoryGallery } from "components/CategoryGallery/CategoryGallery";
import PageTitle from "components/ReusableComponents/PageTitle/PageTitle";
import { MainContainer } from "components/MainContainer/MainContainer";

const CategoriesPage = () => {
  const [currentCategory, setCurrentCategory] = useState('beef')
  const { categoryName } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentCategory(categoryName)
    dispatch(recipeOperations.getRecipesByCategory(categoryName))
  }, [categoryName, dispatch])

  useEffect(() => {
		dispatch(recipeOperations.getCategoryList())
  }, [dispatch])


  return <MainContainer>
      <PageTitle title={'Categories'} />
      <CategoryList currentCategory={currentCategory} />
      <CategoryGallery/>
    </MainContainer>
}

export default CategoriesPage;