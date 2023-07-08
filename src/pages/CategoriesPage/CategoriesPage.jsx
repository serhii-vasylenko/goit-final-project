import { CategoryList } from "components/CategoryList/CategoryList";
import PageTitle from "components/ReusableComponents/PageTitle/PageTitle";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
const CategoriesPage = () => {
  const [currentCategory, setCurrentCategory] = useState('Beef')
  const { categoryName } = useParams();

  useEffect(() => {
		// .then(setCategory)
  }, [categoryName])
  
  return <section>
    <PageTitle title={'Categories'} />
    <CategoryList list={[]} />
    
  </section>
};

export default CategoriesPage;