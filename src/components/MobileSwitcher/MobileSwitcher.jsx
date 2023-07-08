import { MenuSwitcher, OpenMenu, CloseMenu } from "./MobileSwitcher.styled";

export const MobileSwitcher = ({ nav, setNav }) => {
    
   return  <MenuSwitcher onClick={() => setNav(!nav)}>
                {nav ? <CloseMenu/> : <OpenMenu />}
			</MenuSwitcher>
}