import { AuthForm } from "components/AuthForm/AuthForm";
import { Container, StyledLink} from "./RegisterPage.styled";

const RegisterPage = () => {
	return (
		<Container>
		  <AuthForm />
		  <StyledLink to="/signin">
        Sign In
      </StyledLink>
		</Container>
	 );
};

export default RegisterPage;
