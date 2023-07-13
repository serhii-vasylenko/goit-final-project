import styled from "@emotion/styled";

const UserWrapper = styled.div`
display: flex;
align-items: center;
margin-right: 50px;
`
const ImgContainer = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;
width: 44px;
height: 44px;
background-color: #D9D9D9;
border-radius: 50px;
overflow: hidden;

`
const UserImg = styled.img`
width: 100%;
height: 100%;
`
const UserName = styled.p`
color: var(--primary-text-color);
font-size: 14px;
font-weight: 600;
line-height: 170%;
margin-left: 14px;
transition: color var(--transition-duration) var(--timing-function);
&:hover{
    color: var(--accent-color);
}
`

export{UserWrapper, ImgContainer, UserImg, UserName}