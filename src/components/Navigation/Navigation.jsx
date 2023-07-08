// import search from '../../images/search.svg'
import { NavList, NavItem, NavLinkEl, SearchIcon } from './Navigation.styled'
export const Navigation = ({ nav, setNav }) => {
    const onListClick = () => {
        if(!nav) return
        setNav(false)
    }
    return (
        <nav>
            <NavList nav={nav} onClick={() => onListClick()}>
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
                        <SearchIcon/>
                        { nav ? 'Search' : null}
                        </NavLinkEl>  
                </NavItem>
                </NavList>
            </nav>
    )
}