import styled from "@emotion/styled";
import { LuEdit2 } from "react-icons/lu";
import { FiArrowRight } from "react-icons/fi";

const Modal = styled.div`
position: absolute;
top: 0;
z-index: 110;
box-sizing: border-box;
background-color: var(--background-color);
width: 161px;
padding: 18px;
border-radius: 8px;
border: 1px solid var(--accent-color);
transform: translate(-90px, -196px);
transition: transform var(--transition-duration) var(--timing-function);
&.active {
    transform: translate(-90px, 58px); 
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
@media (min-width: 768px) {
    margin-bottom: 32px;
}
`
const ModalText = styled.p`
font-weight: 500;
line-height: 1.6;

`
const EditIcon = styled(LuEdit2)`
width: 14px;
height: 14px;
`
const Button = styled.button`
display: flex;
align-item: center;
justify-content: center;
width: 100%;
padding: 12px 0;
background-color: var(--accent-color);
color: var(--white-color);
border: none;
cursor: pointer;
border-radius: 24px 44px;
`
const ArrowIcon = styled(FiArrowRight)`
width: 18px;
height: 18px;
color: inherit;
margin-left: 4px;

`

export {Modal, ModalText, ModalWrapper, EditIcon, Button, ArrowIcon}