import styled from '@emotion/styled';

import MobileBgLeavesBottom from 'images/mainPage/images/hero-mobile-leaves-bottom.png';
import MobileBgLeavesBottom2x from 'images/mainPage/images/hero-mobile-leaves-bottom@2x.png';
import TabletBgLeavesBottom from 'images/mainPage/images/hero-tablet-leaves-bottom.png';
import TabletBgLeavesBottom2x from 'images/mainPage/images/hero-tablet-leaves-bottom@2x.png';
import DesktopBgLeavesBottom from 'images/mainPage/images/hero-desktop-leaves-bottom.png';
import DesktopBgLeavesBottom2x from 'images/mainPage/images/hero-desktop-leaves-bottom@2x.png';

import MobileBgLeavesTop from 'images/mainPage/images/hero-mobile-leaves-top.png';
import MobileBgLeavesTop2x from 'images/mainPage/images/hero-mobile-leaves-top@2x.png';
import TabletBgLeavesTop from 'images/mainPage/images/hero-tablet-leaves-top.png';
import TabletBgLeavesTop2x from 'images/mainPage/images/hero-tablet-leaves-top@2x.png';
import DesktopBgLeavesTop from 'images/mainPage/images/hero-desktop-leaves-top.png';
import DesktopBgLeavesTop2x from 'images/mainPage/images/hero-desktop-leaves-top@2x.png';

import MobileBg from 'images/mainPage/images/hero-mobile.png';
import MobileBg2x from 'images/mainPage/images/hero-mobile@2x.png';
import TabletBg from 'images/mainPage/images/hero-tablet.png';
import TabletBg2x from 'images/mainPage/images/hero-tablet@2x.png';
import DesktopBg from 'images/mainPage/images/hero-desktop.png';
import DesktopBg2x from 'images/mainPage/images/hero-desktop@2x.png';

export const HeroSection = styled.section`
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  background-image: url(${MobileBgLeavesBottom}), url(${MobileBg}),
    url(${MobileBgLeavesTop});
  background-size: 375 auto, 337px auto, 39px 184px;
  background-position: right 54px, right 38px, left top;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${MobileBgLeavesBottom2x}), url(${MobileBg2x}),
      url(${MobileBgLeavesTop2x});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${TabletBgLeavesBottom}), url(${TabletBg}),
      url(${TabletBgLeavesTop});
    background-size: 573px auto, 374px auto, 58px 315px;
    background-position: right top, right top, left top;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${TabletBgLeavesBottom2x}), url(${TabletBg2x}),
        url(${TabletBgLeavesTop2x});
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${DesktopBgLeavesBottom}), url(${DesktopBg}),
      url(${DesktopBgLeavesTop});
    background-size: 909px auto, 775px 625px, 107px 390px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${DesktopBgLeavesBottom2x}), url(${DesktopBg2x}),
        url(${DesktopBgLeavesTop2x});
    }
  }
`;

export const HeroContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 68px 0px 83px;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    max-width: 375px;
    padding: 68px 27.5px 83px 27.5px;    
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    display: flex;
    align-items: center;
    padding-top: 159px;
    padding-left: 38px;
    padding-bottom: 130px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    gap: 68px;
    padding-top: 126px;
    padding-left: 20px;
    padding-bottom: 135px;
  }
`;

export const FlexWrapper = styled.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 44px;
  }

  @media screen and (min-width: 768px) {
    width: 362px;
  }

  @media screen and (min-width: 1280px) {
    width: 510px;
  }
`;

export const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primaryTextColor};
  font-size: ${({ theme }) => theme.fontSizes[60]}px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights['1']};
  letter-spacing: -0.3px;

  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes[72]}px;
    letter-spacing: -0.36px;

    margin-bottom: 24px;
  }

  @media screen and (min-width: 1280px) {
    font-size: ${({ theme }) => theme.fontSizes[100]}px;
    letter-spacing: -0.5px;

    margin-bottom: 14px;
  }
`;

export const HeroTitleAccent = styled.span`
  color: ${({ theme }) => theme.colors.accentColor};
`;

export const HeroDescription = styled.p`
  color: ${({ theme }) => theme.colors.primaryTextColor};
  font-size: ${({ theme }) => theme.fontSizes[14]}px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights['1_3']};
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 465px;
    font-size: ${({ theme }) => theme.fontSizes[18]}px;
    margin-bottom: 50px;
  }
`;

export const HeroImgWrapper = styled.div`
  position: relative;

  @media screen and (max-width: 767px) {
    margin-bottom: 24px;
  }
`;

export const HeroImg = styled.picture`
  width: 320px;
  height: 296px;

  @media screen and (min-width: 768px) {
    width: 378px;
    height: 351px;
  }

  @media screen and (min-width: 1280px) {
    width: 578px;
    height: 539px;
  }
`;

export const PointerImg = styled.picture`
  position: absolute;

  @media screen and (min-width: 768px) {
    top: 289px;
    left: 145px;
  }

  @media screen and (min-width: 1280px) {
    top: 420px;
    left: 390px;
  }

  img {
    @media screen and (min-width: 768px) {
      top: 289px;
      left: 145px;
      width: 151px;
      height: 100px;
    }

    @media screen and (min-width: 1280px) {
      top: 420px;
      left: 390px;
      width: 200px;
      height: 135px;
    }
  }
`;
