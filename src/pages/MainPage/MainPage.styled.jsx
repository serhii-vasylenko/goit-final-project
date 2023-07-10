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
  height: 713px;
  padding-top: 68px;
  text-align: center;

  background-image: url(${MobileBgLeavesBottom}), url(${MobileBg}),
    url(${MobileBgLeavesTop});
  background-size: 375 auto, 337px auto, 39px 184px;
  background-position: 0px 54px, right 38px, left top;
  background-repeat: no-repeat;

  //Завантаження ретінізованого 2х фонового зображення
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${MobileBgLeavesBottom2x}), url(${MobileBg2x}),
      url(${MobileBgLeavesTop2x});
  }

  @media screen and (min-width: 768px) {
    height: 640px;
    margin-top: -64px;

    background-image: url(${TabletBgLeavesBottom}), url(${TabletBg}),
      url(${TabletBgLeavesTop});
    background-size: 573px auto, 374px auto, 58px 315px;
    background-position: right top, right top, left top;

    // Завантаження ретінізованого 2х фонового зображення
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${TabletBgLeavesBottom2x}), url(${TabletBg2x}),
        url(${TabletBgLeavesTop2x});
    }
  }

  @media screen and (min-width: 1280px) {
    height: 800px;

    background-image: url(${DesktopBgLeavesBottom}), url(${DesktopBg}),
      url(${DesktopBgLeavesTop});
    background-size: 909px auto, 775px 625px, 107px 390px;

    // Завантаження ретінізованого 2х фонового зображення
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${DesktopBgLeavesBottom2x}), url(${DesktopBg2x}),
        url(${DesktopBgLeavesTop2x});
    }
  }
`;

export const HeroImg = styled.img`
  width: 320px;
  /* height: 296px; */

  @media screen and (min-width: 768px) {
    width: 378px;
    /* height: 351px; */
  }

  @media screen and (min-width: 1280px) {
    width: 578px;
    /* height: 539px; */
  }
`;

// const MainTitle = styled.section`
// color: ;

// `
