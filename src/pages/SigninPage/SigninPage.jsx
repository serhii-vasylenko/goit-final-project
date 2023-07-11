import { LoginForm } from 'components/LoginForm/LoginForm';
import { Container } from '../RegisterPage/RegisterPage.styled';
import { StyledLink } from './SigninPage.styled';

const SigninPage = () => {
  return (
    <Container>
      <LoginForm />
		<StyledLink to="/register">
        Register
      </StyledLink >
    </Container>
  );
};

export default SigninPage;
