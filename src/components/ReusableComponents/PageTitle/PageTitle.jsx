import PropTypes from 'prop-types';
import {
  Section,
  Title,
  RectangleFirst,
  RectangleSecond,
  Circle,
} from './PageTitle.styled';

const PageTitle = ({ title }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <RectangleFirst />
      <RectangleSecond />
      <Circle />
    </Section>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
