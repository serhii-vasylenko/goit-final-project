import React from 'react';
import { Item, Link, List, Navigation } from './Nav.styled';
import { useDispatch } from 'react-redux';
const Nav = () => {
  const dispatch = useDispatch();
  const selectOption = selectedOption => ({
    type: 'recipes/setSearchFilter',
    payload: selectedOption,
  });
  return (
    <>
      <Navigation>
        <List>
          <Item>
            <Link
              onClick={() => dispatch(selectOption('ingredient'))}
              to={'/search'}
            >
              Ingredients
            </Link>
          </Item>
          <Item>
            <Link to={'/add'}>Add recipes</Link>
          </Item>
          <Item>
            <Link to={'/my'}>My recipes</Link>
          </Item>
          <Item>
            <Link to={'/favorite'}>Favorite</Link>
          </Item>
          <Item>
            <Link to={'/shopping-list'}>Shopping list</Link>
          </Item>
        </List>
      </Navigation>
    </>
  );
};

export default Nav;
