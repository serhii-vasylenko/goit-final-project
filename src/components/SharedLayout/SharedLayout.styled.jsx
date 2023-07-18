import styled from '@emotion/styled';
import bgImgMob from '../../images/backgroundImages/main-bg-mob.png';
import bgImgTab from '../../images/backgroundImages/main-bg-tab.png';
import bgImgDesk from '../../images/backgroundImages/main-bg-desk.png';

export const MainContainer = styled.main`
  display: block;
  min-height: calc(100vh - (58px + 590px));
  width: 100%;
  background: ${({theme }) => theme.colors.backgroundColor} url(${bgImgMob}) no-repeat;
  background-position: left -98px bottom -210px;
  background-size: 354px 404px;

  @media (min-width: 768px) {
    min-height: calc(100vh - (62px + 550px));
    background: ${({theme }) => theme.colors.backgroundColor} url(${bgImgTab}) no-repeat;
    background-position: left -140px bottom -250px;
    background-size: 478px 507px;
  }
  @media (min-width: 1280px) {
    background: ${({theme }) => theme.colors.backgroundColor} url(${bgImgDesk}) no-repeat;
    background-position: left -200px bottom -520px;
    background-size: 917px 1041px;
  }
`;
