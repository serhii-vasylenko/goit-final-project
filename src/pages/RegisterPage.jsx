import { AuthForm } from "components/AuthForm/AuthForm";
import { NavLink } from "react-router-dom";

const RegisterPage = () => {
	return (
		<div>
		  <AuthForm />
		  <NavLink to="/signin">
        Sign In
      </NavLink>
		</div>
	 );
};

export default RegisterPage;
