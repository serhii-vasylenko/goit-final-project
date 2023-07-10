import styled from "@emotion/styled"
import bgImg from './images/bg-img.png'
const FooterEl = styled.footer`
width: 100%;
height: 1px;
background-color: #22252A;
display: flex;
flex-direction: column;
`
const PrivacyContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
padding: 50px 20px;
background-color: #fafafa;;
color: #22252A;
line-height: 1;
letter-spacing: -0.14px;
background: url(${bgImg}) no-repeat;
background-position: right -30px bottom -150px;
background-size: 404px 496px;
`
const PrivacyTextBold = styled.p`
font-weight: 500;
margin-right: 40px;
opacity: 0.5;

`
const PrivacyText = styled.p`
opacity: 0.5;

`

export{FooterEl, PrivacyContainer, PrivacyTextBold, PrivacyText}