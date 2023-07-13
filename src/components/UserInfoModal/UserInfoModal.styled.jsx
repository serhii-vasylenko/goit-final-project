import styled from "@emotion/styled";
import { HiPlus } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { LuEdit2 } from "react-icons/lu";

const ImgContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 103px;
height: 103px;
background-color: #D9D9D9;
border-radius: 50px;
margin: 0 auto;
margin-bottom: 52px;
overflow: hidden;
`
const UserImg = styled.img`
width: 100%;
height: 100%;
`
const SaveBtn = styled.button`
border: none;
width: 137px;
display: flex;
justify-content: center;
padding: 14px 18px;
margin: 0 auto;
margin-top: 52px;
cursor: pointer;
border-radius: 6px;
font-family: inherit;
color: var(--white-color);
background: var(--accent-color);
border: 1px solid transparent;
transition: all var(--transition-duration) var(--timing-function);

&:hover{
    color: var(--white-color);
    background: #22252A;
}
@media (min-width: 768px) {
        padding: 18px 39px;
        width: 192px;
}`

const AddPhotoBtn = styled.div`
position: absolute;
bottom: -2px;
right: 158px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50px;
border: none;
width: 24px;
height: 24px;
background-color: var(--accent-color);
cursor: pointer;
transition: all var(--transition-duration) var(--timing-function);

&:hover{
    background: #22252A;
}
`
const InputFile = styled.input`
width: 100%;
height: 100%;
opacity: 0
`
const Plus = styled(HiPlus)`
position: absolute;
left: 50%;
top: 50%;                         
transform: translate(-50%, -50%);
width: 18px;
height: 18px;
color: var(--white-color);

@media (min-width: 768px) {
    width: 18px;
    height: 18px;
}
`
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
export {ImgContainer, UserImg, SaveBtn, AddPhotoBtn, Plus, Field, Input, UserIcon, EditIcon, InputFile}