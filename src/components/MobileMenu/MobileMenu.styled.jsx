import styled from "@emotion/styled";
import bgImg from "./images/bg-image@1x.png"
import bgImgMob from "./images/bg-image-mob@1x.png"

export const MobileMenuEl = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100%;
z-index: 20;
background-color: #EBF3D4;
overflow: hidden;
padding: 18px 16px;
transform: translateY(-100%);
transition: transform var(--transition-duration) var(--timing-function);
&.active {
      transform: translateY(0%);
}
 &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: url(${bgImgMob});
                background-repeat: no-repeat;
                background-position: right -225px bottom -80px;
                background-size: 550px 360px;
                filter: blur(4.5px);


        }
@media (min-width: 768px) {
        padding: 18px 32px 32px 32px;
        &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: url(${bgImg});
                background-repeat: no-repeat;
                background-position: right -375px bottom -240px;
                background-size: 882px 658px;
                filter: blur(4.5px);

        }
}
@media (min-width: 1260px) {
        display: none;
	}
`
export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`