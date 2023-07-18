import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { selectAuth } from 'redux/auth/selectors';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useSelector(selectAuth);

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component/>;
};