import styled from "@emotion/styled";
import { LuEdit2 } from "react-icons/lu";

const Modal = styled.div`
background-color: var(--background-color);
width: 177px;
height: 134px;
padding: 18px;
border-radius: 8px;
border: 1px solid var(--accent-color);
`
const ModalWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
`
const ModalText = styled.p`
font-weight: 500;
line-height: 1.6;

`
const EditIcon = styled(LuEdit2)`
width: 17px;
height: 17px;
`

export {Modal, ModalText, ModalWrapper, EditIcon}