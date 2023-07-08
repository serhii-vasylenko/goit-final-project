import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';

const WelcomePage = lazy(() => import('pages/WelcomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const SigninPage = lazy(() => import('pages/SigninPage'));
const MainPage = lazy(() => import('pages/MainPage'));
const CategoriesPage = lazy(() => import('pages/CategoriesPage'));
const FavoritePage = lazy(() => import('pages/FavoritePage'));
const SearchPage = lazy(() => import('pages/SearchPage'))
const MyRecipesPage = lazy(()=> import('pages/MyRecipesPage'))
const ShoppingListPage = lazy(() => import('pages/ShoppingListPage'))
const NotFound = lazy(() => import('pages/NotFound'));

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
          <Route index element={<WelcomePage />} />
          <Route path="categories/:categoryName" element={<CategoriesPage />} />
          <Route path="add" element={<FavoritePage />} />
          <Route path="my" element={<MyRecipesPage />} />
          <Route path="favorite" element={<FavoritePage />} />
          <Route path="shopping-list" element={<ShoppingListPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path='*' element={<NotFound />}/>
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
