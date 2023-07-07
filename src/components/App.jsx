import { Route, Routes } from 'react-router';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';

const WellcomPage = lazy(() => import('pages/WellcomPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const SigninPage = lazy(() => import('pages/SigninPage'));
const MainPage = lazy(() => import('pages/MainPage'));

const App = () => {
  const dispatcher = useDispatch();
  const { isRefreshing } = useSelector(selectAuth);
  useEffect(() => {
    dispatcher(refreshUser());
  }, [dispatcher]);

  return isRefreshing ? (
    <p>Refreshing user</p>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<WellcomPage />} />
        <Route
          path="/register"
          element={<PublicRoute redirectTo="/main" component={<RegisterPage />} />}
        ></Route>
        <Route
          path="/signin"
          element={<PublicRoute redirectTo="/main" component={<SigninPage />} />}
        ></Route>
        <Route
          path="/main"
          element={
            <PrivateRoute redirectTo="/login" component={<MainPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;