import {
  Container,
  LinkStyled,
  LinksContainer,
  Logo,
  Text,
  TextContainer,
  Title,
} from './WellcomePage.styled';
import logo from '../../images/logo.svg';

const WelcomePage = () => {
  return (
    <Container>
      <Logo src={logo} alt="logo" />

      <TextContainer>
        <Title>Welcome to the app!</Title>
        <Text>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </Text>
      </TextContainer>

      <LinksContainer>
        <LinkStyled to="/register">Registration</LinkStyled>
        <LinkStyled to="/signin">Sign In</LinkStyled>
      </LinksContainer>
    </Container>
  );
};

export default WelcomePage;
