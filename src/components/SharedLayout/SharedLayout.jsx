import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { MainContainer } from './SharedLayout.styled';
import Loader from 'components/ReusableComponents/Loader/Loader'

const SharedLayout = () => {
  return (
    <>
        <Header />
        <MainContainer>
          <Suspense fallback={<Loader/>}>
            <Outlet />
          </Suspense>
        </MainContainer>
        <Footer />
    </>
  );
};

export default SharedLayout;
