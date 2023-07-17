import styled from '@emotion/styled/macro';
import bgImg from './images/bg-img.png';
import { NavLink } from 'react-router-dom';
const FooterEl = styled.footer``;

const Wrapper = styled.div`
  background-color: ${({theme}) => theme.colors.footerBGColor};
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
  color: var(--white-color);
  font-size: 14px;
  line-height: 1.3;

  @media (min-width: 1280px) {
    font-size: 18px;
  }
`;

const Title = styled.h2`
  text-transform: capitalize;
  font-size: 18px;
  line-height: 1;
  font-weight: 700;
  color: var(--white-color);
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
  stroke: var(--accent-color);
`;

const PrivacyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px 20px;
  background-color: #fafafa;
  color: #22252a;
  line-height: 1;
  letter-spacing: -0.14px;
  background: url(${bgImg}) no-repeat;
  background-position: right -30px bottom -150px;
  background-size: 404px 496px;

  background-color: ${({theme}) => theme.colors.backgroundColor};
  color: ${({theme}) => theme.colors.privacyColor};
`;
const PrivacyTextBold = styled.p`
  font-weight: 500;
  margin-right: 40px;
  opacity: 0.5;
`;
const PrivacyText = styled.p`
  opacity: 0.5;
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
