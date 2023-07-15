import styled from "@emotion/styled";

const UserWrapper = styled.div`
display: flex;
align-items: center;
margin-right: 32px;
@media (min-width: 768px) {
    margin-right: 50px;
}
`
const ImgContainer = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;
width: 34px;
height: 34px;
background-color: #D9D9D9;
border-radius: 50px;
overflow: hidden;
@media (min-width: 768px) {
    width: 44px;
    height: 44px;
}

`
const UserImg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
const UserName = styled.p`
color: var(--primary-text-color);
font-size: 12px;
font-weight: 600;
line-height: 170%;
margin-left: 14px;
transition: color var(--transition-duration) var(--timing-function);
&:hover{
    color: var(--accent-color);
}
@media (min-width: 768px) {
    font-size: 14px;
}
`

export{UserWrapper, ImgContainer, UserImg, UserName}