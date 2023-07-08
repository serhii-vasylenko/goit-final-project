import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg'
import { HeaderEl, Logo, Wrapper} from './Header.styles';
import { Navigation } from 'components/Navigation/Navigation';
import { UserLogo } from 'components/UserLogo/UserLogo';
import { ThemeToggle } from 'components/ThemeToggler/ThemeToggler';

export const Header = () => {
    return (
        <HeaderEl>
            <NavLink to={'/'}><Logo src={logo} alt='logo'/></NavLink>
            <Navigation/>
            <Wrapper>
                <UserLogo />
                <ThemeToggle/>
            </Wrapper>
        </HeaderEl >)
}
