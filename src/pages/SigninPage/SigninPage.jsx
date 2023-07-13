import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { LoginForm } from 'components/LoginForm/LoginForm';
import { selectAuth } from 'redux/auth/selectors';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import { Container } from '../RegisterPage/RegisterPage.styled';
import { StyledLink } from './SigninPage.styled';

const SigninPage = () => {
  const { fetchError } = useSelector(selectAuth);

  useEffect(() => {
    if (!fetchError) return;
    if (fetchError === 401)
      toast.error('User is not found! Check email and password and try again.');
    if (fetchError === 400 || fetchError === 500)
      toast.error('Something went wrong:(');
  }, [fetchError]);

  return (
    <Container>
      <LoginForm />
      <StyledLink to="/register">Registration</StyledLink>
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

export default SigninPage;
