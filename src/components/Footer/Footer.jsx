import { MainEl } from "components/Main/Main.styled"
import { FooterEl, PrivacyContainer, PrivacyTextBold, PrivacyText } from "./Footer.styled"
export const Footer = () => {
    return <FooterEl>
        <MainEl>

        </MainEl>
        <PrivacyContainer>
            <PrivacyTextBold>&#169; 2023 All Rights Reserved.</PrivacyTextBold>
            <PrivacyText>Terms of Service</PrivacyText>
        </PrivacyContainer>
    </FooterEl>
}