import { NavLink } from 'react-router-dom';
import { useState } from "react";
import logo from '../../images/logo.svg'
import { HeaderEl, Logo, Wrapper} from './Header.styles';
import { Navigation } from 'components/Navigation/Navigation';
import { UserLogo } from 'components/UserLogo/UserLogo';
import { ThemeToggle } from 'components/ThemeToggler/ThemeToggler';
import { MobileSwitcher } from 'components/MobileSwitcher/MobileSwitcher';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
export const Header = () => {
    const [nav, setNav] = useState(false);
    console.log(nav);
    return (
        <HeaderEl>
            <NavLink to={'/'}><Logo src={logo} alt='logo'/></NavLink>
            <Navigation/>
            <Wrapper>
                <UserLogo />
                <ThemeToggle />     
            </Wrapper>
            <MobileSwitcher nav={nav} setNav={setNav} />
           { nav ?  <MobileMenu nav={nav} setNav={setNav} /> : null}
        </HeaderEl >)
}
