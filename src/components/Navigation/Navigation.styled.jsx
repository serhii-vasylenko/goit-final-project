import styled from "@emotion/styled";
import { NavLink, useLocation } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";

const NavList = styled.ul`
display: ${props => props.nav ? 'flex' : 'none'};
align-items: center;
flex-direction: column;
margin-top: ${props => props.nav ? '124px' : '0'};
color: ${({theme }) => theme.colors.mobileMenuColor};
@media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    color: ${({ theme }) => theme.colors.primaryTextColor};
    ${() => {
    const location = useLocation();
    if (location.pathname.includes('/recipes/')) {
      return `
        color: #22252a`;
    }
  }}
};

`

const NavLinkEl = styled(NavLink)`
display: flex;
align-items: center;
color: inherit;
transition: color ${({theme }) => theme.transforms.transitionDuration} ${({theme }) => theme.transforms.timingFunction};
&:hover{
    color: ${({theme }) => theme.colors.accentColor};
}
&.active {
    color: ${({theme }) => theme.colors.accentColor};
    font-weight: 600;
}

`
const NavItem = styled.li`
font-size: 18px;
font-weight: 500;
line-height: 1;
letter-spacing: -0.36px;

&:not(:last-child){
    margin-bottom: 40px;
}

@media (min-width: 768px) {
font-size: 24px;
letter-spacing: -0.48px;
}
@media (min-width: 1280px) {
font-size: 14px;
line-height: 22.4px;
letter-spacing: 0px;

&:not(:last-child){
margin-right: 30px;
margin-bottom: 0;
}
}
`
const SearchIcon = styled(FiSearch)`
width: 24px;
height: 24px;
margin-right: 8px;
`

export{NavList, NavLinkEl, NavItem, SearchIcon}