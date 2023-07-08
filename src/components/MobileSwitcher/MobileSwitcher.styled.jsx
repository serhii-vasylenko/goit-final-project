import styled from "@emotion/styled"
const MenuSwitcher = styled.div`
display: block;
width: 32px;
height: 32px;
	@media (min-width: 1260px) {
        display: none;
	}
   

`
const OpenMenu = styled.img`
width: 28px;
height: 28px;


`
const CloseMenu = styled.img`
`

export {MenuSwitcher, OpenMenu, CloseMenu}