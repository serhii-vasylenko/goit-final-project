// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// import { selectMainPageRecipes } from 'redux/recipes/recipesSelector';
// import getMainPageRecipes from 'redux/recipes/operations/getMainPageRecipes';

const PreviewCategories = () => {
  // const dispatch = useDispatch();
  // const categories = useSelector(selectMainPageRecipes);

  // useEffect(() => {
  //   dispatch(getMainPageRecipes());
  // }, [dispatch]);

  return (
    <section>
      <ul>
        <li>
          <h2>Breakfast</h2>
          <Link>See all</Link>
        </li>
        <li>
          <h2>Miscellaneous</h2>
          <Link>See all</Link>
        </li>
        <li>
          <h2>Vegan</h2>
          <Link>See all</Link>
        </li>
        <li>
          <h2>Desserts</h2>
          <Link>See all</Link>
        </li>
      </ul>
      {/* <button type="button" onClick={()=>{dispatch(getMainPageRecipes())}}>ggggg</button>/ */}
    </section>
    
  );
};

export default PreviewCategories;
