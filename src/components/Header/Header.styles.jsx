import styled from "@emotion/styled";

const HeaderEl = styled.header`
position: absolute;
left: 50%;
transform: translate(-50%, 0);
display: flex;
align-items: center;
min-width: 320px;
margin: 0 auto;
padding: 0 16px;
padding-top: 18px;
z-index: 10; // не видаляти
@media (min-width: 375px) {
		width: 375px;
}
@media (min-width: 768px) {
	padding: 0 32px;
	padding-top: 18px;
	width: 768px;
}
@media (min-width: 1280px) {
	padding: 0 20px;
	padding-top: 18px;
	width: 1280px;
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
margin-left: auto;
`

export {HeaderEl, Logo, Wrapper}