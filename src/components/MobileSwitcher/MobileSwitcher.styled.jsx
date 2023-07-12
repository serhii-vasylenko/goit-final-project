import styled from "@emotion/styled"
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import {RxCross2} from "react-icons/rx";

const MenuSwitcher = styled.div`
display: block;
width: 32px;
height: 32px;
	@media (min-width: 1280px) {
        display: none;
	}
   

`
const OpenMenu = styled(HiOutlineMenuAlt2)`
width: 32px;
height: 32px;
color: var(--primary-text-color);
transition: color var(--transition-duration) var(--timing-function);
&:hover{
    color: var(--accent-color);
}
`
const CloseMenu = styled(RxCross2)`
width: 32px;
height: 32px;
color: var(--primary-text-color);
transition: color var(--transition-duration) var(--timing-function);
&:hover{
    color: var(--accent-color);
}
`

export {MenuSwitcher, OpenMenu, CloseMenu}