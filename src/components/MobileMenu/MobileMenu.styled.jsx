import styled from "@emotion/styled";
import mobMenuImage from '../../images/backgroundImages/bg-mob.png'
import tabMenuImage from '../../images/backgroundImages/bg-tab.png'

export const MobileMenuEl = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 20;
overflow: hidden;
overflow-y:hidden; 
overflow-x:hidden;
padding: 18px 16px;
transform: translateY(-100%);
background: ${({theme }) => theme.colors.backgroundMobileMenu} url(${mobMenuImage}) no-repeat;
background-position: right -285px bottom -120px;
background-size: 585px 378px;
transition: all ${({theme }) => theme.transforms.transitionDuration} ${({theme }) => theme.transforms.timingFunction};


&.active {
      transform: translateY(0%);
}
@media (min-width: 768px) {
        background: ${({theme }) => theme.colors.backgroundMobileMenu} url(${tabMenuImage}) no-repeat;
        background-position: right -400px bottom -310px;
        background-size: 904px 747px;
        padding: 18px 32px 32px 32px;

}
@media (min-width: 1280px) {
        display: none;
	}
`
export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`