import Small from './images/Small.png';
import Small2x from './images/Small@2x.png';
import Large from './images/Large.png';
import Large2x from './images/Large@2x.png';
const { ImageContainer, Text } = require('./EmptyDataInfo.styled');

const EmptyDataInfo = ({ children }) => {
  return (
    <ImageContainer>
      <picture>
        <source
          srcSet={`${Large} 1x, ${Large2x} 2x`}
          media="(min-width: 768px)"
        />
        <source
          srcSet={`${Small} 1x, ${Small2x} 2x`}
          media="(max-width: 767px)"
        />
        <img src={Small} alt="vegitable" />
      </picture>
      <Text>{children}</Text>
    </ImageContainer>
  );
};

export default EmptyDataInfo;
