import styled from '@emotion/styled';

import BgImgMob from 'images/sharedLayout/bg-mob.png';
import BgImgMob2x from 'images/sharedLayout/bg-mob@2x.png';
import BgImgTab from 'images/sharedLayout/bg-tab.png';
import BgImgTab2x from 'images/sharedLayout/bg-tab@2x.png';
import BgImgDesk from 'images/sharedLayout/bg-desk.png';
import BgImgDesk2x from 'images/sharedLayout/bg-desk@2x.png';

export const MainContainer = styled.main`
  min-height: calc(100vh - (58px + 590px));
  background-image: url(${BgImgMob});
  background-size: 256px 392px;
  background-position: left 0px bottom -175px;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${BgImgMob2x});
  }

  @media (min-width: 768px) {
    min-height: calc(100vh - (62px + 550px));
    background-image: url(${BgImgTab});
    background-size: 423px 646px;
    background-position: left 0px bottom -275px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${BgImgTab2x});
    }
  }

  @media (min-width: 1280px) {
    min-height: calc(100vh - (62px + 533px));
    background-image: url(${BgImgDesk});
    background-size: 558px 852px;
    background-position: left 0px bottom -375px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${BgImgDesk2x});
    }
  }
`;
