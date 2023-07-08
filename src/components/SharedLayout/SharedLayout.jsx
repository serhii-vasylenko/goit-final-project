import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { MainEl } from 'components/Main/Main.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router';

const SharedLayout = () => {
  return <>
      <Header />
    <MainEl>
        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      </MainEl>
      <Footer/>
    </>
};

export default SharedLayout;