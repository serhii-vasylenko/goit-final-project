import { Logo } from "components/Header/Header.styles"
import { MobileMenuEl, Wrapper } from "./MobileMenu.styled"
import logo from '../../images/logo.svg'
import { NavLink } from 'react-router-dom';
import { Navigation } from "components/Navigation/Navigation";
import { MobileSwitcher } from "components/MobileSwitcher/MobileSwitcher";
import { ThemeToggle } from "components/ThemeToggler/ThemeToggler";
export const MobileMenu = ({nav, setNav}) => {
    return (
        <MobileMenuEl>
            <Wrapper>
                <NavLink to={'/'}><Logo src={logo} alt='logo' /></NavLink>
                <MobileSwitcher nav={nav} setNav={setNav}/>
            </Wrapper>
            <Navigation nav={nav} setNav={setNav} />
            <ThemeToggle nav={nav} />
        </MobileMenuEl>
    )
}