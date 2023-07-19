import { Logo } from "components/Header/Header.styles"
import ReactDOM from 'react-dom';
import logo from '../../images/logo.svg'
import { MobileMenuEl, Wrapper } from "./MobileMenu.styled"
import { NavLink } from 'react-router-dom';
import { Navigation } from "components/Navigation/Navigation";
import { MobileSwitcher } from "components/MobileSwitcher/MobileSwitcher";
import ThemeToggle from "components/ThemeToggler/ThemeToggler";
const menuRoot = document.getElementById('menu-root');

export const MobileMenu = ({nav, setNav}) => {
    return ReactDOM.createPortal(
        <MobileMenuEl className={nav ? 'active' : ' '}>
            <Wrapper>
                <NavLink to={'/'}><Logo src={logo} alt='logo' onClick={()=> setNav(false)}/></NavLink>
                <MobileSwitcher nav={nav} setNav={setNav}/>
            </Wrapper>
            <Navigation nav={nav} setNav={setNav} />
            <ThemeToggle nav={nav} />
        </MobileMenuEl>,
        menuRoot
    )
}