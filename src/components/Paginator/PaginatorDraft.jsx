// import { useEffect, useState, useCallback } from 'react';
import { StyledPaginator } from '../ReusableComponents/Paginator/Paginator.styled';
// import {
//   selectRecipeByTitle,
//   selectRecipesByIngredient,
// } from '../../redux/search/searchSelector';
// import { useSelector } from 'react-redux';

// const pageSize = 2;

const PaginatorDraft = ({ visibleRecipes, setVisibleRecipes }) => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  //   const [visibleRecipes, setVisibleRecipes] = useState([]);
  // const [pagination, setPagination] = useState({
  //   count: 0,
  //   from: 0,
  //   to: pageSize,
  // });
  // const [pageCount, setPageCount] = useState(0);

  // useEffect(() => {
  //   const service = {
  //     getData: ({ from, to }) => {
  //       return new Promise((resolve, reject) => {
  //         const data = visibleRecipes.slice(from, to);
  //         resolve({
  //           count: data.length,
  //           data: data,
  //         });
  //       });
  //     },
  //   };

  //   service
  //     .getData({ from: pagination.from, to: pagination.to })
  //     .then(response => {
  //       setPagination(prevPagination => ({
  //         ...prevPagination,
  //         count: response.count,
  //       }));
  //       setVisibleRecipes(response.data);
  //       console.log('response', response);
  //     });
  // }, [visibleRecipes, pagination.from, pagination.to]);

  //   const visibleRecipeList = useCallback(() => {
  //     let visibleList =
  //       searchedList?.length > 0 ? searchedList : serchedIngredList?.map(i => i);
  //     setVisibleRecipes(visibleList);
  //   }, [searchedList, serchedIngredList]);

  //   useEffect(() => {
  //     visibleRecipeList();
  //   }, [visibleRecipeList]);
  //   console.log('visibleRecipes in PaginatorDraft:>> ', visibleRecipes);

  // useEffect(() => {
  //   setPageCount(Math.ceil(pagination.count / pageSize));
  // }, [pagination.count]);

  // const handlePageChange = (e, page) => {
  //   const from = (page - 1) * pageSize;
  //   const to = (page - 1) * pageSize + pageSize;

  //   setPagination(prevPagination => ({
  //     ...prevPagination,
  //     from: from,
  //     to: to,
  //   }));
  // };

  return (
    <StyledPaginator
    // count={pageCount}
    // color="primary"
    // size="small"
    // siblingCount={windowWidth > 768 ? 2 : 1}
    // //   page={page}
    // onChange={handlePageChange}
    />
  );
};

export default PaginatorDraft;
