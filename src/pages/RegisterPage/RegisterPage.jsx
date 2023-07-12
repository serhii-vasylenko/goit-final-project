import { useSelector } from "react-redux";
import { useEffect } from 'react';

import { AuthForm } from "components/AuthForm/AuthForm";
import { selectAuth } from 'redux/auth/selectors';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import { Container, StyledLink} from "./RegisterPage.styled";

const RegisterPage = () => {
	const { fetchError } = useSelector(selectAuth);

  useEffect(() => {
    if (!fetchError) return;
    if (fetchError === 409)
      toast.error('Email is already used!');
    if (fetchError === 400 || fetchError === 500)
      toast.error('Something went wrong:(');
  }, [fetchError]);
	return (
		<Container>
		  <AuthForm />
		  <StyledLink to="/signin">
        Sign In
      </StyledLink>
		<ToastContainer
        position="top-right"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
		</Container>
	 );
};

export default RegisterPage;
