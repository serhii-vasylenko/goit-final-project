import notFoundImageMob from 'images/notFoundPage/notFoundImage-mob.png';
import notFoundImageMob2x from 'images/notFoundPage/notFoundImage-mob@2x.png';
import notFoundImageTab from 'images/notFoundPage/notFoundImage-tab.png';
import notFoundImageTab2x from 'images/notFoundPage/notFoundImage-tab@2x.png';
import notFoundImagePc from 'images/notFoundPage/notFoundImage-pc.png';
import notFoundImagePc2x from 'images/notFoundPage/notFoundImage-pc@2x.png';
import {
  PictureWrapper,
  Text,
  TextWrapper,
  Title,
} from './ErrorBanner.styled';

const ErrorBanner = () => {
  return (
    <>
      <TextWrapper>
        <Title>We are sorry,</Title>
        <Text>but something went wrong, please reload the page...</Text>
      </TextWrapper>
      <PictureWrapper>
        <picture>
          <source
            media="(min-width: 1240px)"
            srcSet={`${notFoundImagePc}, ${notFoundImagePc2x} 2x`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${notFoundImageTab}, ${notFoundImageTab2x} 2x`}
          />
          <img
            src={notFoundImageMob}
            srcSet={`${notFoundImageMob}, ${notFoundImageMob2x} 2x`}
            alt="Not Found Page"
          />
        </picture>
      </PictureWrapper>
    </>
  );
};

export default ErrorBanner;
