import { AuthForm } from "components/AuthForm/AuthForm";
import { NavLink } from "react-router-dom";
import { Container} from "./pagesStyles/RegisterPage.styled";

const RegisterPage = () => {
	return (
		<Container>
		  <AuthForm />
		  <NavLink to="/signin">
        Sign In
      </NavLink>
		</Container>
	 );
};

export default RegisterPage;
