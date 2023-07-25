import {
  useEffect,
  useLayoutEffect,
  useState,
  useCallback,
  useRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { useSearchParams } from 'react-router-dom';

import Loader from '../ReusableComponents/Loader/Loader';
import RecipeGalleryItem from '../ReusableComponents/RecipeGalleryItem';
import SearchCapImage from '../ReusableComponents/SearchCap';
import { showErrorToast } from '../ReusableComponents/ToastCustom/showToast';
import Paginator from '../Paginator/PaginatorSearch';

import {
  selectRecipeByTitle,
  selectRecipesByIngredient,
  selectCurrentPage,
  selectIsLoading,
  selectError,
} from 'redux/search/searchSelector';
import getRecipesByTitle from 'redux/search/operations/getRecipesByTitle';
import {
  resetRecipeByIngredient,
  setCurrentPage,
  resetCurrentPage,
} from 'redux/search/searchSlice';

import { Section, List } from './SearchRecipesList.styled';

const SearchedRecipesList = () => {
  const searchedList = useSelector(selectRecipeByTitle);
  const serchedIngredList = useSelector(selectRecipesByIngredient);
  const currentPage = useSelector(selectCurrentPage);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [visibleRecipes, setVisibleRecipes] = useState([]);

  const [searchParams] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();

  const listRef = useRef(null);
  const itemsPerPage = 6;

  useEffect(() => {
    if (error) showErrorToast(error);
  }, [error]);

  useEffect(() => {
    if (location.state && location.state.from === '/main') {
      const params = Object.fromEntries(searchParams.entries());
      const { q } = params;
      const title = searchParams.get('q');
      if (q && q !== '') {
        dispatch(resetCurrentPage());
        dispatch(resetRecipeByIngredient());
        dispatch(getRecipesByTitle(title));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const visibleRecipeList = useCallback(() => {
    let visibleList =
      searchedList?.length > 0 ? searchedList : serchedIngredList?.map(i => i);
    setVisibleRecipes(visibleList);
  }, [searchedList, serchedIngredList]);

  useEffect(() => {
    visibleRecipeList();
  }, [visibleRecipeList]);

  const handlePageChange = useCallback(
    pageNumber => {
      dispatch(setCurrentPage(pageNumber));
      listRef.current?.scrollIntoView({ behavior: 'smooth' });
    },
    [dispatch]
  );

  const currentPageData = visibleRecipes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const currentPageDataForLargeWindowWidth = visibleRecipes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage * 2
  );

  return (
    <Section>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {(windowWidth >= 1280
            ? currentPageDataForLargeWindowWidth
            : currentPageData
          )?.length || 0 ? (
            <List ref={listRef}>
              {(windowWidth >= 1280
                ? currentPageDataForLargeWindowWidth
                : currentPageData
              )
                .slice(
                  0,
                  windowWidth >= 1280
                    ? 12
                    : (windowWidth >= 1280
                        ? currentPageDataForLargeWindowWidth
                        : currentPageData
                      ).length
                )
                .map(({ _id: id, title, preview }) => (
                  <RecipeGalleryItem
                    key={id}
                    id={id}
                    title={title}
                    src={preview}
                  />
                ))}
            </List>
          ) : (
            <SearchCapImage>Try looking for something else...</SearchCapImage>
          )}
          {visibleRecipes.length !== 0 && (
            <Paginator
              data={visibleRecipes}
              itemsPerPage={itemsPerPage}
              onPageChange={handlePageChange}
            />
           )}
        </>
      )}
    </Section>
  );
};

export default SearchedRecipesList;
