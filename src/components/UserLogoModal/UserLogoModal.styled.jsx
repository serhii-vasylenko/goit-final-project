import styled from "@emotion/styled";
import { LuEdit2 } from "react-icons/lu";
import { FiArrowRight } from "react-icons/fi";

const Modal = styled.div`
position: absolute;
top: 0;
z-index: 110;
box-sizing: border-box;
background-color: ${({ theme }) => theme.colors.backgroundColor};
color: ${({ theme }) => theme.colors.backgroundColor};
width: 161px;
padding: 18px;
border-radius: 8px;
border: 1px solid ${({theme }) => theme.colors.accentColor};
transform: translate(-90px, -140px);
transition: all ${({theme }) => theme.transforms.transitionDuration} ${({theme }) => theme.transforms.timingFunction};
&.active {
    transform: translate(-90px, 78px); 
}
@media (min-width: 768px) {
    width: 177px;
}
`
const ModalWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
margin-bottom: 28px;
color: ${({theme }) => theme.colors.primaryTextColor};
@media (min-width: 768px) {
    margin-bottom: 32px;
}
`
const ModalText = styled.p`
font-weight: 500;
line-height: 1.6;
color: inherit;
`
const EditIcon = styled(LuEdit2)`
width: 14px;
height: 14px;
color: inherit;
cursor: pointer;
&:hover{
  stroke: ${({theme }) => theme.colors.accentColor};
}
`
const Button = styled.button`
display: flex;
align-item: center;
justify-content: center;
width: 100%;
padding: 12px 0;
font-family: inherit;
background-color: ${({theme }) => theme.colors.accentColor};
color: ${({theme }) => theme.colors.whiteColor};
border: none;
cursor: pointer;
border-radius: 24px 44px;
transition: all ${({theme }) => theme.transforms.transitionDuration} ${({theme }) => theme.transforms.timingFunction};
&:hover{
    background: #22252A;
    border: 1px solid ${({theme }) => theme.colors.logoutBtnColor};
}
`
const ArrowIcon = styled(FiArrowRight)`
width: 18px;
height: 18px;
color: inherit;
margin-left: 4px;

`

export {Modal, ModalText, ModalWrapper, EditIcon, Button, ArrowIcon}