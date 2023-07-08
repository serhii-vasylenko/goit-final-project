import styled from "@emotion/styled";

export const MobileMenuEl = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 20;
background-color: #EBF3D4;
padding: 18px 16px;
transform: translateY(-100%);
transition: transform var(--transition-duration) var(--timing-function);
&.active {
      transform: translateY(0%);
    }
@media (min-width: 768px) {
        padding: 18px 32px 32px 32px;
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