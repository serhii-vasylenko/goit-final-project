import DesktopDishRetina from 'images/mainPage/images/hero-desktop-dish@2x.png';

import { Wrapper } from './RefreshingScreen.styled';

const RefreshingScreen = () => {
  return (
    <Wrapper>
      <img src={DesktopDishRetina} alt="Healthy salad" />
    </Wrapper>
  );
};

export default RefreshingScreen;
