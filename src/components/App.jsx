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
const CategoriesPage = lazy(() => import('pages/CategoriesPage'));
const AddRecipePage = lazy(() => import('pages/AddRecipePage'));
const FavoritePage = lazy(() => import('pages/FavoritePage'));
const RecipePage = lazy(() => import('pages/RecipePage'));
const MyRecipesPage = lazy(() => import('pages/MyRecipesPage')); 
const SearchPage = lazy(() => import('pages/SearchPage'));
const ShoppingListPage = lazy(() => import('pages/ShoppingListPage'));

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
          element={
            <PublicRoute redirectTo="/main" component={<RegisterPage />} />
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute redirectTo="/main" component={<SigninPage />} />
          }
        />
        <Route
          path="/main"
          element={
            <PrivateRoute redirectTo="/login" component={<MainPage />} />
          }
        />
        <Route
          path="/categories/:categoryName"
          element={
            <PrivateRoute redirectTo="/login" component={<CategoriesPage />} />
          }
        />
        <Route
          path="/add"
          element={
            <PrivateRoute redirectTo="/login" component={<AddRecipePage />} />
          }
        />
        <Route
          path="/favorite"
          element={
            <PrivateRoute redirectTo="/login" component={<FavoritePage />} />
          }
        />
        <Route
          path="/recipe/:recipeId"
          element={
            <PrivateRoute redirectTo="/login" component={<RecipePage />} />
          }
        />
        <Route
          path="/my"
          element={
            <PrivateRoute redirectTo="/login" component={<MyRecipesPage />} />
          }
        />
        <Route
          path="/search"
          element={
            <PrivateRoute redirectTo="/login" component={<SearchPage />} />
          }
        />
        <Route
          path="/shopping-list"
          element={
            <PrivateRoute redirectTo="/login" component={<ShoppingListPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
