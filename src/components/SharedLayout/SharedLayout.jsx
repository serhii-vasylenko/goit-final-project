import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router';
import { MainContainer } from './SharedLayout.styled';
import Loader from 'components/ReusableComponents/Loader';
import { useDispatch } from 'react-redux';
import { getUserInfo } from 'redux/auth/operations';
import MotivationToast from 'components/MotivationToast/MotivationToast';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

const SharedLayout = () => {
  const isLogin = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogin) {
      dispatch(getUserInfo());
    }
  }, [dispatch, isLogin]);

  return (
    <>
      <Header />
      <MainContainer>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <MotivationToast />
      </MainContainer>
      <Footer />
    </>
  );
};

export default SharedLayout;
