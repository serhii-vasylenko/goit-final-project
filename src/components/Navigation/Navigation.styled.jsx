import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';


const NavList = styled.ul`
display: flex;
align-items: center;
`

const NavLinkEl = styled(NavLink)`
color: var(--primary-text-color);
&:hover{
    color: var(--accent-color);
}
&.active {
    color: var(--accent-color);
}
`
const NavItem = styled.li`
font-size: 14px;
font-weight: 500;
line-height: 22.4px;
&:not(:last-child){
    margin-right: 30px;
}
`
export{NavList, NavLinkEl, NavItem}