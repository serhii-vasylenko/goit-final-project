import PropTypes from 'prop-types';
import {
  Wrapper,
  Title,
  RectangleFirst,
  RectangleSecond,
  Circle,
} from './PageTitle.styled';

const PageTitle = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <RectangleFirst />
      <RectangleSecond />
      <Circle />
    </Wrapper>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
