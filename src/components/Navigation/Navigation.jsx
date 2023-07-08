import search from '../../images/search.svg'
import { NavList, NavItem, NavLinkEl } from './Navigation.styled'
export const Navigation = () => {
    return (
        <nav>
            <NavList>
                <NavItem> 
                    <NavLinkEl to={'/categories/:categoryName'}>
                        Categories   
                    </NavLinkEl>
                    </NavItem>
                <NavItem> 
                    <NavLinkEl to={'/add'}>
                        Add recipes 
                    </NavLinkEl>
                </NavItem>
                <NavItem>
                    <NavLinkEl to={'/my'}>
                        My recipes  
                    </NavLinkEl>
                </NavItem>
                    <NavItem>
                        <NavLinkEl to={'/favorite'}>
                         Favorites   
                        </NavLinkEl>
                </NavItem>
                    <NavItem>
                        <NavLinkEl to={'/shopping-list'}>
                         Shopping list 
                        </NavLinkEl>      
                </NavItem>
                    <NavItem>
                        <NavLinkEl to={'/search'}>
                         <img src={search} alt='search-icon' />
                        </NavLinkEl>  
                </NavItem>
                </NavList>
            </nav>
    )
}