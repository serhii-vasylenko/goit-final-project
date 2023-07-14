import styled from "@emotion/styled";
import { FiUser } from "react-icons/fi";
import { LuEdit2 } from "react-icons/lu";

const UserIcon = styled(FiUser)`
position: absolute;
left: 19px;
top: 50%;                         
transform: translate(0, -50%);
width: 24px;
height: 24px;
color: #23262A;
`
const EditIcon = styled(LuEdit2)`
position: absolute;
right: 18px;
bottom: 20px;
width: 19px;
height: 19px;
color: #23262A;

`
const Field = styled.div`
position: relative;
width: 400px;
`
const Input = styled.input`
width: 100%;
padding: 16px 45px 16px 51px;
outline: none;
font-size: 18px;
letter-spacing: -0.36px;
color: var(--primary-text-color);
border-radius: 3px;
border: 1px solid rgba(0, 0, 0, 0.20);

`
export {UserIcon, Input, Field, EditIcon}