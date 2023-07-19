import { Container } from './MainContainer.styled';

export const MainContainer = ({ children }) => {
    window.scrollBy({
      top: -2000,
      behavior: 'smooth',
    });
  return <Container>{children}</Container>;
};
