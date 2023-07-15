import { Container } from 'components/MainContainer/MainContainer.styled';

import notFoundImageMob from 'images/notFoundPage/notFoundImage-mob.png';
import notFoundImageMob2x from 'images/notFoundPage/notFoundImage-mob@2x.png';
import notFoundImageTab from 'images/notFoundPage/notFoundImage-tab.png';
import notFoundImageTab2x from 'images/notFoundPage/notFoundImage-tab@2x.png';
import notFoundImagePc from 'images/notFoundPage/notFoundImage-pc.png';
import notFoundImagePc2x from 'images/notFoundPage/notFoundImage-pc@2x.png';
import { PictureWrapper, Section, Text, TextWrapper, Title } from './NotFound.styled';

const NotFoundPage = () => {
  return (
    <Section>
      <Container>
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
        <TextWrapper>
          <Title>We are sorry,</Title>
          <Text>but the page you were looking for can’t be found..</Text>
        </TextWrapper>
      </Container>      
    </Section>
  );
};

export default NotFoundPage;
