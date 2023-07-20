import styled from "@emotion/styled";
import { HiPlus } from "react-icons/hi";

const Form = styled.form`
@media (min-width: 768px) {
}
@media (min-width: 1280px) {
	padding: 10px 0;
}
`
const ImgContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 88px;
height: 88px;
background-color: #D9D9D9;
border-radius: 50px;
margin: 0 auto;
margin-bottom: 54px;
overflow: hidden;
@media (min-width: 768px) {
	margin-bottom: 50px;
    width: 103px;
    height: 103px;
}
@media (min-width: 1280px) {
	margin-bottom: 52px;
}
`
const UserImg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;

`
const SaveBtn = styled.button`
border: none;
width: 100%;
display: flex;
justify-content: center;
padding: 14px 18px;
margin: 0 auto;
margin-top: 24px;
cursor: pointer;
border-radius: 6px;
font-family: inherit;
color: ${({theme }) => theme.colors.whiteColor};
background: ${({theme }) => theme.colors.accentColor};
border: 1px solid transparent;
transition: all ${({theme }) => theme.transforms.transitionDuration} ${({theme }) => theme.transforms.timingFunction};

&:hover{
    color: ${({theme }) => theme.colors.whiteColor};
    background: #22252A;
    border: 1px solid ${({theme }) => theme.colors.logoutBtnColor};
}
@media (min-width: 768px) {
        padding: 18px 39px;
        margin-top: 32px;

}
`

const AddPhotoBtn = styled.label`
position: absolute;
bottom: -2px;
right: 100px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50px;
border: none;
width: 24px;
height: 24px;
background: ${({theme }) => theme.colors.accentColor};
cursor: pointer;
border: 1px solid transparent;
transition: all ${({theme }) => theme.transforms.transitionDuration} ${({theme }) => theme.transforms.timingFunction};

&:hover{
    background: #22252A;
    border: 1px solid ${({theme }) => theme.colors.logoutBtnColor};
}
@media (min-width: 768px) {
    right: 158px;
}
`
const InputFile = styled.input`
display: none;
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
color: ${({theme }) => theme.colors.whiteColor};

@media (min-width: 768px) {
    width: 18px;
    height: 18px;
}
`
export {Form, ImgContainer, UserImg, SaveBtn, AddPhotoBtn, Plus, InputFile}