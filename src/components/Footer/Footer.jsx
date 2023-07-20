import { MainContainer } from 'components/MainContainer/MainContainer';
import sprite from '../../images/sprite.svg';
import {
  FooterEl,
  PrivacyContainer,
  PrivacyTextBold,
  PrivacyText,
  Wrapper,
  Inner,
  Top,
  Info,
  Logo,
  LogoWrapper,
  Title,
  LogoTitle,
  List,
  Item,
} from './Footer.styled';
import Networks from 'components/ReusableComponents/Networks/Networks';
import Nav from 'components/Nav/Nav';
import SubscribeForm from 'components/SubscribeForm/SubscribeForm';
export const Footer = () => {
  return (
    <FooterEl>
      <Wrapper>
        <MainContainer>
          <Inner>
            <Top>
              <Info>
                <LogoTitle>
                  <LogoWrapper to="/">
                    <Logo fill="none">
                      <use href={`${sprite}#logo`}></use>
                    </Logo>
                  </LogoWrapper>
                  <Title>So Yummy</Title>
                </LogoTitle>
                <List>
                  <Item>Database of recipes that can be replenished</Item>
                  <Item>
                    Flexible search for desired and unwanted ingredients
                  </Item>
                  <Item>Ability to add your own recipes with photos </Item>
                  <Item>Convenient and easy to use </Item>
                </List>
              </Info>
              <Nav />
              <SubscribeForm />
            </Top>
            <Networks hoverColor={({theme}) => theme.colors.socialIconHover}
            iconColor={({ theme }) => theme.colors.socialIconColor}
            />
          </Inner>
        </MainContainer>
      </Wrapper>
      <PrivacyContainer>
        <PrivacyTextBold>&#169; 2023 All Rights Reserved.</PrivacyTextBold>
        <PrivacyText>Terms of Service</PrivacyText>
      </PrivacyContainer>
    </FooterEl>
  )
}
