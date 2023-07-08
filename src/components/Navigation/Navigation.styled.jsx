import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';


const NavList = styled.ul`
display: ${props => props.nav ? 'flex' : 'none'};
align-items: center;
flex-direction: column;
@media (min-width: 1260px) {
    display: flex;
    flex-direction: row;
}
`

const NavLinkEl = styled(NavLink)`
display: flex;
align-items: center;
color: var(--primary-text-color);
&:hover{
    color: var(--accent-color);
}
&.active {
    color: var(--accent-color);
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
@media (min-width: 1260px) {
    font-size: 14px;
    line-height: 22.4px;
    letter-spacing: 0px;
    &:not(:last-child){
        margin-right: 30px;
        margin-bottom: 0;
    }

}
`

export{NavList, NavLinkEl, NavItem}