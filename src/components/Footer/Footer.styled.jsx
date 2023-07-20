import styled from '@emotion/styled/macro';
import bgImgMob from '../../images/backgroundImages/bg-footer-mob.png';
import bgImgTab from '../../images/backgroundImages/bg-footer-tab.png';
import bgImgDesk from '../../images/backgroundImages/bg-footer-desk.png';
import { NavLink } from 'react-router-dom';
const FooterEl = styled.footer``;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.footerBGColor};
  display: flex;
  flex-direction: column;
  padding: 28px 0 18px;

  @media (min-width: 768px) {
    padding: 50px 0 24px;
  }
  @media (min-width: 1280px) {
    padding: 64px 0 50px;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Top = styled.div`
  display: grid;
  gap: 32px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 72px;
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: none;
    /* gap: 20px; */
  }
`;

const Info = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
    grid-column: 1 / span 2;
  }
  @media (min-width: 1280px) {
    gap: 40px;
  }
`;

const LogoTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;

  @media (min-width: 768px) {
    justify-content: start;
    gap: 12px;
  }
`;
const List = styled.ul`
  display: none;
  list-style: disc;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    display: flex;
    margin-left: 20px;
  }

  @media (min-width: 1280px) {
    gap: 14px;
  }
`;

const Item = styled.li`
  color: ${({ theme }) => theme.colors.whiteColor};
  font-size: 14px;
  line-height: 1.3;
  list-style: disc;

  @media (min-width: 1280px) {
    font-size: 18px;
  }
`;

const Title = styled.h2`
  text-transform: capitalize;
  font-size: 18px;
  line-height: 1;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.whiteColor};
  letter-spacing: 0.27px;
  font-style: normal;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

const LogoWrapper = styled(NavLink)`
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ebf3d4;
  border-radius: 6px;
`;
const Logo = styled.svg`
  height: 30px;
  width: 30px;
  stroke: ${({ theme }) => theme.colors.accentColor};
`;

const PrivacyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 28px 0;
  line-height: 1;
  letter-spacing: -0.14px;
  color: ${({ theme }) => theme.colors.privacyColor};
  background: ${({ theme }) => theme.colors.backgroundColor} url(${bgImgMob})
    no-repeat;
  background-position: right -50px bottom -70px;
  background-size: 216px 222px;

  @media (min-width: 768px) {
    padding: 32px 0;
    background: ${({ theme }) => theme.colors.backgroundColor} url(${bgImgTab})
      no-repeat;
    background-position: right -70px bottom -150px;
    background-size: 393px 404px;
  }
  @media (min-width: 1280px) {
    padding: 50px 0;
    background: ${({ theme }) => theme.colors.backgroundColor} url(${bgImgDesk})
      no-repeat;
    background-position: right -70px bottom -230px;
    background-size: 593px 611px;
  }
`;

const PrivacyTextBold = styled.p`
  color: ${({ theme }) => theme.colors.privacyColor};
  font-size: ${({ theme }) => theme.fontSizes[10]}px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.meduim};
  line-height: ${({ theme }) => theme.lineHeights['1']};
  letter-spacing: -0.1px;

  margin-right: 14px;
  opacity: 0.5;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes[14]}px;
    letter-spacing: -0.14px;
    margin-right: 28px;
  }

  @media (min-width: 1280px) {
    margin-right: 40px;
  }
`;

const PrivacyText = styled(PrivacyTextBold)`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export {
  FooterEl,
  Wrapper,
  Inner,
  Top,
  Title,
  List,
  Item,
  LogoTitle,
  LogoWrapper,
  Logo,
  Info,
  PrivacyContainer,
  PrivacyTextBold,
  PrivacyText,
};
