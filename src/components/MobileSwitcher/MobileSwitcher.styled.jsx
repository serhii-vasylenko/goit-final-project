import styled from "@emotion/styled"
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import {RxCross2} from "react-icons/rx";
import { useLocation } from "react-router";

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
color: ${({theme }) => theme.colors.mobileMenuColor};
transition: color ${({theme }) => theme.transforms.transitionDuration} ${({theme }) => theme.transforms.timingFunction};
&:hover{
    color: ${({theme }) => theme.colors.accentColor};
}

@media (min-width: 768px) and (max-width: 870px) {
        ${() => {
    const location = useLocation();
    if (
      location.pathname.includes('/main')
    ) {
      return `
        color: #22252a`;
    }
  }}
	}

    ${() => {
    const location = useLocation();
  if (location.pathname.includes('/recipes/')) {
      return `
        color: #22252a`;
    }
}}
`
const CloseMenu = styled(RxCross2)`
width: 32px;
height: 32px;
color: ${({theme }) => theme.colors.mobileMenuColor};
transition: color ${({theme }) => theme.transforms.transitionDuration} ${({theme }) => theme.transforms.timingFunction};
&:hover{
    color: ${({theme }) => theme.colors.accentColor};
}
`

export {MenuSwitcher, OpenMenu, CloseMenu}