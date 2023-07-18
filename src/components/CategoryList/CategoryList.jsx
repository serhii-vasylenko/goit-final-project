import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { selectCategoryList } from 'redux/recipes/recipesSelector';
import { Categories, Category, Line } from './CategoryList.styled';
import { useSelector } from 'react-redux';

export const CategoryList = ({ currentCategory }) => {
  const categories = useSelector(selectCategoryList);
  const containerRef = useRef(null);

  const handleScroll = (event, index) => {
    const container = containerRef.current;
    const category = container.children[index];

    const containerWidth = container.offsetWidth;
    const categoryWidth = category.offsetWidth;

    const scrollAmount =
      category.offsetLeft - (containerWidth - categoryWidth) / 2;

    container.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <Categories ref={containerRef}>
        {categories.map((item, index) => {
          return (
            <Category
              key={item._id}
              className={item.name.toLowerCase() === currentCategory.toLowerCase() ? 'active' : null}
              onClick={event => handleScroll(event, index)}
            >
              <Link to={`/categories/${item.name}`}>{item.name}</Link>
            </Category>
          );
        })}
      </Categories>
      <Line />
    </div>
  );
};
