import { useState, useEffect } from 'react';
import СhooseYourBreakfast from 'components/СhooseYourBreakfast/СhooseYourBreakfast';
import SearchForm from 'components/ReusableComponents/SearchForm/SearchForm';
import PreviewCategories from 'components/PreviewCategories/PreviewCategories';

import MobileDish from 'images/mainPage/images/hero-mobile-dish.png';
import MobileDishRetina from 'images/mainPage/images/hero-mobile-dish@2x.png';
import TabletDish from 'images/mainPage/images/hero-tablet-dish.png';
import TabletDishRetina from 'images/mainPage/images/hero-tablet-dish@2x.png';
import DesktopDish from 'images/mainPage/images/hero-desktop-dish.png';
import DesktopDishRetina from 'images/mainPage/images/hero-desktop-dish@2x.png';
import PointerDesktop from 'images/mainPage/images/pointer-desktop.png';
import PointerDesktopRetina from 'images/mainPage/images/pointer-desktop@2x.png';
import PointerTablet from 'images/mainPage/images/pointer-tablet.png';
import PointerTabletRetina from 'images/mainPage/images/pointer-tablet@2x.png';

import {
  HeroSection,
  HeroContainer,
  FlexWrapper,
  HeroTitle,
  HeroTitleAccent,
  HeroDescription,
  HeroImgWrapper,
  HeroImg,
  PointerImg,
} from './MainPage.styled';

const MainPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    const updateMedia = () => {
      if (window.innerWidth >= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <>
      <HeroSection>
        <HeroContainer>
          <FlexWrapper>
            <HeroTitle>
              <HeroTitleAccent>So</HeroTitleAccent>Yummy
            </HeroTitle>
            <HeroDescription>
              "What to cook?" is not only a recipe app, it is, in fact, your
              cookbook. You can add your own recipes to save them for the
              future.
            </HeroDescription>
            {isMobile && <SearchForm />}
          </FlexWrapper>
          <HeroImgWrapper>
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
            {isMobile && (
              <PointerImg
                srcSet={`${PointerDesktop} 200w,
                ${PointerTablet} 151w,
                ${PointerDesktopRetina} 400w,              
                ${PointerTabletRetina} 302w`}
                sizes="(min-width: 1280px) 200px, 151px"
                src={PointerTablet}
                alt="Pointer"
              />
            )}
            <СhooseYourBreakfast />
          </HeroImgWrapper>
          {!isMobile && <SearchForm />}
        </HeroContainer>
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
