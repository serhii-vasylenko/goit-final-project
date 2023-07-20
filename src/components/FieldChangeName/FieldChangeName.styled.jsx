import styled from "@emotion/styled";
import { FiUser } from "react-icons/fi";
import { LuEdit2 } from "react-icons/lu";

const UserIcon = styled(FiUser)`
position: absolute;
left: 14px;
top: 50%;                         
transform: translate(0, -50%);
width: 18px;
height: 18px;
color: inherit;
@media (min-width: 768px) {
	left: 19px;
	width: 24px;
	height: 24px;
}
`
const EditIcon = styled(LuEdit2)`
position: absolute;
right: 14px;
top: 50%;                         
transform: translate(0, -50%);
width: 17px;
height: 17px;
color: inherit;
@media (min-width: 768px) {
	right: 18px;
	width: 24px;
	height: 24px;
}

`
const Field = styled.div`
position: relative;
width: 282px;
color: ${({theme }) => theme.colors.primaryTextColor};
@media (min-width: 768px) {
	width: 400px;
}
`
const Input = styled.input`
width: 100%;
padding: 15px 40px 15px 40px;
outline: none;
font-size: 18px;
letter-spacing: -0.36px;
color: inherit;
border-radius: 3px;
border: 1px solid ${({theme }) => theme.colors.modalInputBorderColor};
background: ${({ theme }) => theme.colors.backgroundModalColor};
transition: all ${({theme }) => theme.transforms.transitionDuration} ${({theme }) => theme.transforms.timingFunction};

:hover,
:focus,
:active {
  border: 1px solid ${({ theme }) => theme.borders.backgroundAuthFormColor};
  outline: rgba(35, 38, 42, 0.2);
}

@media (min-width: 768px) {
	padding: 17px 45px 17px 51px;
}
`
export {UserIcon, Input, Field, EditIcon}