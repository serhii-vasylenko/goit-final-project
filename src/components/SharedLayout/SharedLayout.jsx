import { Suspense } from 'react';
import { Outlet } from 'react-router';

const SharedLayout = () => {
  return (
    <div >
      <Suspense fallback={<div>Loading</div>}>
        <Header/>
        <Outlet />
        <Footer/>
      </Suspense>
    </div>
  );
};

export default SharedLayout;