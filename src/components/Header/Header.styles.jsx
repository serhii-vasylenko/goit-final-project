import styled from "@emotion/styled";

const HeaderEl = styled.header`
min-width: 320px;
margin: 0 auto;
padding: 0 16px;
margin-top: 18px;
margin-bottom: 18px;
display: flex;
align-items: center;
@media (min-width: 375px) {
		width: 375px;
	}
@media (min-width: 768px) {
        padding: 0 32px;
		width: 768px;
	}
	@media (min-width: 1260px) {
        padding: 0 20px;
		width: 1260px;
	}
`

const Logo = styled.img`
width: 40px;
height: 40px;
margin-right: 187px;
@media (min-width: 768px) {
    width: 44px;
    height: 44px;
		
	}
	@media (min-width: 1260px) {
		margin-right: 187px;
	}
`
const Wrapper = styled.div`
display: flex;
align-items: center;
margin-left: auto
`

export {HeaderEl, Logo, Wrapper}