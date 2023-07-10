import styled from "@emotion/styled";
import {RxCross2} from "react-icons/rx";

const Backdrop = styled.div`
display: none;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.50);
align-items: center;
justify-content: center;
&.open{
    display: flex;
}
`
const Modal = styled.div`
position: relative;
border-radius: 30px;
background: var(--white-color);
box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.10);
padding: 44px 24px;
@media (min-width: 768px) {
        padding: 50px 40px;
}
@media (min-width: 1260px) {
    padding: 50px 50px;
}
`
const Text = styled.p`
color: var(--primary-text-color);
text-align: center;
line-height: 0.77;
letter-spacing: -0.28px;
@media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.36px;
}

`
const BtnList = styled.ul`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
margin-top: 24px;

& li{
    &:not(:last-child){
        margin-right: 8px;
    }
}

@media (min-width: 768px) {
        margin-top: 32px;
        & li{
            &:not(:last-child){
                margin-right: 16px;
            }
        }
}
`

const Btn = styled.button`
border: none;
width: 137px;
display: inline-flex;
justify-content: center;
padding: 14px 18px;
cursor: pointer;
border-radius: 6px;
color: var(--white-color);
background: var(--accent-color);
border: 1px solid transparent;

&:hover{
    color: var(--accent-color);
    background: transparent;
    border: 1px solid var(--accent-color);
}

&.cancel{
    color: var(--primary-text-color);
    background: #D9D9D9;
&:hover{
    color: var(--white-color);
    background: var(--accent-color);
}
}
@media (min-width: 768px) {
        padding: 18px 39px;
        width: 192px;


}
`
const CloseModal = styled(RxCross2)`
position: absolute;
top: 18px;
right: 18px;
width: 18px;
height: 18px;
color: var(--primary-text-color);
transition: color var(--transition-duration) var(--timing-function);
&:hover{
    color: var(--accent-color);
}
@media (min-width: 768px) {
    top: 24px;
    right: 24px;
    width: 24px;
    height: 24px;

}
`
export {Backdrop, Modal, Text, BtnList, Btn, CloseModal}