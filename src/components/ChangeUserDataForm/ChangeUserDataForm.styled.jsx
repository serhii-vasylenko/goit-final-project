import styled from "@emotion/styled";
import { HiPlus } from "react-icons/hi";

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
object-fit: cover;

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
export {ImgContainer, UserImg, SaveBtn, AddPhotoBtn, Plus, InputFile}