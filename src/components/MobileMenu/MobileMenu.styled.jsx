import styled from "@emotion/styled";
import bgImgTab from "./images/bg-tab.png"
import bgImgMob from "./images/bg-mob.png"

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
transition: transform var(--transition-duration) var(--timing-function);
background: #EBF3D4 url(${bgImgMob}) no-repeat;
background-position: right -285px bottom -85px;
background-size: 585px 378px;

&.active {
      transform: translateY(0%);
}
@media (min-width: 768px) {
        background: #EBF3D4 url(${bgImgTab}) no-repeat;
        background-position: right -323px bottom -335px;
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