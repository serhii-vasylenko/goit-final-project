import searchCapSmall from '../../../images/searchPageCap/searchCapSmall.png';
import searchCapSmall2x from '../../../images/searchPageCap/searchCapSmall@2x.png';
import searchCapLarge from '../../../images/searchPageCap/searchCapLarge.png';
import searchCapLarge2x from '../../../images/searchPageCap/searchCapLarge@2x.png';

import { ImageContainer, Text } from './SearchCap.styled';

const SearchCapImage = ({children}) => {
    return (
      <ImageContainer>
        <picture>
          <source
            srcSet={`${searchCapLarge} 1x, ${searchCapLarge2x} 2x`}
            media="(min-width: 768px)"
          />
          <source
            srcSet={`${searchCapSmall} 1x, ${searchCapSmall2x} 2x`}
            media="(max-width: 767px)"
          />
          <img src={searchCapSmall} alt="vegitable" />
        </picture>
        <Text>{children}</Text>
      </ImageContainer>
    );
};

export default SearchCapImage;


