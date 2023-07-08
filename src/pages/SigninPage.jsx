import { LoginForm } from 'components/LoginForm/LoginForm';
import { NavLink } from 'react-router-dom';

const SigninPage = () => {
  return (
    <div>
      <LoginForm />
		<NavLink to="/register">
        Register
      </NavLink>
    </div>
  );
};

export default SigninPage;
