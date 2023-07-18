import styled from "@emotion/styled";
import {RxCross2} from "react-icons/rx";
import { Link } from "react-router-dom";

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
pointer-events: auto;
&.open{
    display: flex;
}
`
const Modal = styled.div`
position: relative;
border-radius: 30px;
background: ${({ theme }) => theme.colors.backgroundModalColor};
color: ${({theme }) => theme.colors.primaryTextColor};
box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.10);
padding: 44px 24px;
transition: all ${({theme }) => theme.transforms.transitionDuration} ${({theme }) => theme.transforms.timingFunction};
@media (min-width: 768px) {
        padding: 50px 40px;
}
@media (min-width: 1280px) {
    padding: 50px 50px;
}
`
const Text = styled.p`
color: inherit;
text-align: center;
line-height: 0.77;
letter-spacing: -0.28px;
transition: all ${({theme }) => theme.transforms.transitionDuration} ${({theme }) => theme.transforms.timingFunction};
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
display: flex;
justify-content: center;
padding: 14px 18px;
cursor: pointer;
border-radius: 6px;
font-family: inherit;
color: #23262a;
background: #D9D9D9;
border: 1px solid transparent;
transition: all ${({theme }) => theme.transforms.transitionDuration} ${({theme }) => theme.transforms.timingFunction};

&:hover{
    background: ${({theme }) => theme.colors.whiteColor};
    border: 1px solid #23262A;

}

@media (min-width: 768px) {
        padding: 18px 39px;
        width: 192px;


}
`
const BtnLogout = styled(Link)`
box-sizing: border-box;
border: none;
width: 137px;
display: flex;
justify-content: center;
padding: 14px 18px;
cursor: pointer;
border-radius: 6px;
font-family: inherit;
color: ${({theme }) => theme.colors.whiteColor};
background: ${({theme }) => theme.colors.accentColor};
border: 1px solid transparent;
transition: all ${({theme }) => theme.transforms.transitionDuration} ${({theme }) => theme.transforms.timingFunction};

&:hover{
    background: #22252A;
    
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
color: inherit;
transition: color ${({theme }) => theme.transforms.transitionDuration} ${({theme }) => theme.transforms.timingFunction};
&:hover{
    color: ${({theme }) => theme.colors.accentColor}
}
@media (min-width: 768px) {
    top: 24px;
    right: 24px;
    width: 24px;
    height: 24px;

}
`
export {Backdrop, Modal, Text, BtnList, Btn, CloseModal, BtnLogout}