import { Route, Routes } from 'react-router-dom';
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

import * as themes from 'themes'

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

const App = () => {
  const dispatcher = useDispatch();
  const { isRefreshing } = useSelector(selectAuth);
  useEffect(() => {
    dispatcher(refreshUser());
  }, [dispatcher]);

  const stateTheme = useSelector(selectTheme);
  console.log(stateTheme);
  
  const dark = useMemo(()=> (themes.darkTheme), []);
  
  const light = useMemo(()=> (themes.lightTheme), []);



  const [theme, setTheme] = useState(light)

  
  useEffect(() => {
    stateTheme === 'light' ? setTheme(light) : setTheme(dark)
  }, [stateTheme, light, dark])

  

  console.log(theme);

  return isRefreshing ? (
    <p>Refreshing user</p>
  ) : (
    
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute redirectTo="/main" component={<WelcomePage />} />
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/main" component={<RegisterPage />} />
            }
          ></Route>
          <Route
            path="/signin"
            element={
              <PublicRoute redirectTo="/main" component={<SigninPage />} />
            }
          ></Route>
          <Route element={<SharedLayout />}>
            <Route
              path="/main"
              element={
                <PrivateRoute redirectTo="/signin" component={<MainPage />} />
              }
            />
            <Route path="/categories" element={<CategoriesPage />}>
              <Route path=":categoryName" element={<CategoryGallery />} />
            </Route>
            <Route path="add" element={<AddRecipePage />} />
            <Route
              path="my"
              element={
                <PrivateRoute
                  redirectTo="/signin"
                  component={<MyRecipesPage />}
                />
              }
            />
            <Route path="favorite" element={<FavoritePage />} />
            <Route
              path="shopping-list"
				  element={<ShoppingListPage />}
            //   element={
            //     <PrivateRoute
            //       redirectTo="/signin"
            //       component={<ShoppingListPage />}
            //     />
            //   }
            />
            <Route path="search" element={<SearchPage />} />
            <Route path="/recipes/:recipeId" element={<RecipePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>     
      </ThemeProvider>
  );
};

export default App;
