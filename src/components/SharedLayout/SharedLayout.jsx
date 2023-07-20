import Footer from 'components/Footer';
import { Header } from 'components/Header/Header';
import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router';
import { MainContainer, Content } from './SharedLayout.styled';
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
        <Content>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
          <MotivationToast />
        </Content>
      </MainContainer>
      <Footer style={{ marginTop: 'auto' }} />
    </>
  );
};

export default SharedLayout;
