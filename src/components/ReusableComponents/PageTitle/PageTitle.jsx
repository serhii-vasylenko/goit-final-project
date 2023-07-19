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

export default PageTitle;
