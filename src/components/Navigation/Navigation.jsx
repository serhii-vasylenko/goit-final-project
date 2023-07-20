import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavList, NavItem, NavLinkEl, SearchIcon } from './Navigation.styled';
import { useLocation } from 'react-router';
import { selectOption } from 'components/SearchTypeSelector/SearchTypeSelector';

export const Navigation = ({ nav, setNav }) => {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    setActive(location.pathname.includes('/categories/'));
  }, [location.pathname]);

  const onListClick = () => {
    if (!nav) return;
    setNav(false);
  };
  return (
    <nav>
      <NavList nav={nav} onClick={() => onListClick()}>
        <NavItem>
          <NavLinkEl to={'/categories/Beef'} className={active ? 'active' : ''}>
            Categories
          </NavLinkEl>
        </NavItem>
        <NavItem>
          <NavLinkEl to={'/add'}>Add recipes</NavLinkEl>
        </NavItem>
        <NavItem>
          <NavLinkEl to={'/my'}>My recipes</NavLinkEl>
        </NavItem>
        <NavItem>
          <NavLinkEl to={'/favorite'}>Favorites</NavLinkEl>
        </NavItem>
        <NavItem>
          <NavLinkEl to={'/shopping-list'}>Shopping list</NavLinkEl>
        </NavItem>
        <NavItem>
          <NavLinkEl
            to={'/search'}
            onClick={() => dispatch(selectOption('Title'))}
          >
            <SearchIcon />
            {nav ? <p>Search</p> : null}
          </NavLinkEl>
        </NavItem>
      </NavList>
    </nav>
  );
};
