import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { lazy, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { CategoryGallery } from './CategoryGallery/CategoryGallery';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import SigninPage from 'pages/SigninPage/SigninPage';
import { ThemeProvider } from '@emotion/react';
import { selectTheme } from 'redux/theme/selectors';

import * as themes from 'themes';
import RefreshingScreen from './RefreshingScreen/RefreshingScreen';

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const CategoriesPage = lazy(() =>
  import('pages/CategoriesPage/CategoriesPage')
);
const AddRecipePage = lazy(() => import('pages/AddRecipePage/AddRecipePage'));
const FavoritePage = lazy(() => import('pages/FavoritePage/FavoritePage'));
const SearchPage = lazy(() => import('pages/SearchPage'));
const MyRecipesPage = lazy(() => import('pages/MyRecipesPage/MyRecipesPage'));
const ShoppingListPage = lazy(() =>
  import('pages/ShoppingListPage/ShoppingListPage')
);
const RecipePage = lazy(() => import('pages/RecipePage/RecipePage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFound'));

// const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
// const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
// const SigninPage = lazy(() => import('pages/SigninPage/SigninPage'));

const App = () => {
  const dispatcher = useDispatch();
  const { isRefreshing, token } = useSelector(selectAuth);

  useEffect(() => {
    if (token) {
      return;
    }
    dispatcher(refreshUser());
  }, [dispatcher, token]);

  const stateTheme = useSelector(selectTheme);

  const dark = useMemo(() => themes.darkTheme, []);

  const light = useMemo(() => themes.lightTheme, []);

  const [theme, setTheme] = useState(light);

  useEffect(() => {
    stateTheme === 'light' ? setTheme(light) : setTheme(dark);
  }, [stateTheme, light, dark]);

  return (
    <ThemeProvider theme={theme}>
      {isRefreshing ? (
        <RefreshingScreen />
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Navigate to="/main" />} />
            <Route
              path="/main"
              element={
                <PrivateRoute component={MainPage} redirectTo={'/welcome'} />
              }
            />
            <Route path="categories" element={<CategoriesPage />}>
              <Route
                path=":categoryName"
                element={
                  <PrivateRoute
                    component={CategoryGallery}
                    redirectTo={'/welcome'}
                  />
                }
              />
            </Route>
            <Route path="add" element={<AddRecipePage />} />

            <Route path="my" element={<MyRecipesPage />} />

            <Route path="favorite" element={<FavoritePage />} />

            <Route path="recipes" element={<RecipePage />}>
              <Route
                path=":recipeId"
                element={
                  <PrivateRoute
                    component={RecipePage}
                    redirectTo={'/welcome'}
                  />
                }
              />
            </Route>

            <Route path="shopping-list" element={<ShoppingListPage />} />

            <Route path="search" element={<SearchPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route
            path="/welcome"
            element={
              <PublicRoute component={WelcomePage} redirectTo={'/main'} />
            }
          />
          <Route
            path="/signin"
            element={
              <PublicRoute component={SigninPage} redirectTo={'/main'} />
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute component={RegisterPage} redirectTo={'/main'} />
            }
          />
        </Routes>
      )}
    </ThemeProvider>
  );
};

export default App;
