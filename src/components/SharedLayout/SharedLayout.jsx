import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { MainContainer } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <MainContainer>
        <Header />
        <main>
          <Suspense fallback={<div>Loading</div>}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </MainContainer>
    </>
  );
};

export default SharedLayout;
