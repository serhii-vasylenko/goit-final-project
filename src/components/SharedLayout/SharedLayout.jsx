import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router';

const SharedLayout = () => {
  return (
    <>
        <Header />
        <main>
          <Suspense fallback={<div>Loading</div>}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
    </>
  );
};

export default SharedLayout;
