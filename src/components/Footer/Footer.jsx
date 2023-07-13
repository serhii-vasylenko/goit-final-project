import { MainContainer } from 'components/MainContainer/MainContainer';
import {
  FooterEl,
  PrivacyContainer,
  PrivacyTextBold,
  PrivacyText,
} from './Footer.styled';
export const Footer = () => {
  return (
    <FooterEl>
      <MainContainer></MainContainer>
      <PrivacyContainer>
        <PrivacyTextBold>&#169; 2023 All Rights Reserved.</PrivacyTextBold>
        <PrivacyText>Terms of Service</PrivacyText>
      </PrivacyContainer>
    </FooterEl>
  );
};
