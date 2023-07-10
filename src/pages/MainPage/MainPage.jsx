// import { Link } from 'react-router-dom';
import СhooseYourBreakfast from 'components/СhooseYourBreakfast/СhooseYourBreakfast';
import SearchForm from 'components/ReusableComponents/SearchForm/SearchForm';
import PreviewCategories from 'components/PreviewCategories/PreviewCategories';

import MobileDish from 'images/mainPage/images/hero-mobile-dish.png';
import MobileDishRetina from 'images/mainPage/images/hero-mobile-dish@2x.png';
import TabletDish from 'images/mainPage/images/hero-tablet-dish.png';
import TabletDishRetina from 'images/mainPage/images/hero-tablet-dish@2x.png';
import DesktopDish from 'images/mainPage/images/hero-desktop-dish.png';
import DesktopDishRetina from 'images/mainPage/images/hero-desktop-dish@2x.png';

import { HeroSection, HeroImg } from './MainPage.styled';

const MainPage = () => {
  return (
    <>
      <HeroSection>
        <h1>
          <span>So</span>Yummy
        </h1>
        <p>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </p>
        <HeroImg
          srcSet={`${MobileDish} 320w,
          ${TabletDish} 378w,
          ${DesktopDish} 578w,
          ${MobileDishRetina} 640w,
          ${TabletDishRetina} 756w,
          ${DesktopDishRetina} 1156w`}
          sizes="(min-width: 1280px) 578px, (min-width: 768px) 378px, 320px"
          src={MobileDish}
          alt="Healthy salad"
        />
        <СhooseYourBreakfast />
        <SearchForm />
      </HeroSection>
      <PreviewCategories />
    </>
  );
};

export default MainPage;
// srcSet="images/mainPage/images/hero-mobile-dish.png 320w,
//           images/mainPage/images/hero-tablet-dish.png 378w,
//           images/mainPage/images/hero-desktop-dish.png 578w,
//           images/mainPage/images/hero-mobile-dish@2x.png 640w,
//           images/mainPage/images/hero-tablet-dish@2x.png 756w,
//           images/mainPage/images/hero-desktop-dish@2x.png 1156w"
