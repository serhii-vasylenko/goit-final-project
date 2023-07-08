import burgerIcon from '../../images/burger-icon.svg';
import crossIcon from '../../images/cross-icon.svg';
import { MenuSwitcher, OpenMenu, CloseMenu } from "./MobileSwitcher.styled";
export const MobileSwitcher = ({ nav, setNav }) => {
    
   return  <MenuSwitcher onClick={() => setNav(!nav)}>
                {nav ? <CloseMenu src={crossIcon} /> : <OpenMenu src={burgerIcon} />}
			</MenuSwitcher>
}