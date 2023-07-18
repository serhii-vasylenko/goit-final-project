import { useDispatch } from "react-redux";
import { Suspense, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import { recipeOperations } from 'redux/recipes/operations';
import { CategoryList } from "components/CategoryList/CategoryList";
import PageTitle from "components/ReusableComponents/PageTitle/PageTitle";
import { PageTitleWrap } from "pages/AddRecipePage/AddRecipePage.styled";
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


  return <MainContainer style={{ paddingTop: '58px' }}>
    <PageTitleWrap>
      <PageTitle title={'Categories'}/>
    </PageTitleWrap>
    <CategoryList currentCategory={currentCategory} />
    <Suspense>
        <Outlet />
    </Suspense>
    </MainContainer>
}

export default CategoriesPage;