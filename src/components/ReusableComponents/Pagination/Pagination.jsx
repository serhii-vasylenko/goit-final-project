import React from 'react';
import sprite from '../../../images/sprite.svg';
import { DOTS, usePagination } from 'hooks/useBackendPagination';
import { Icon, Item, List, PaginationStyled } from './Pagination.styled';
const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 1) {
    return null;
  }

  const onNext = () => {
    if (currentPage === paginationRange.length) {
      return;
    }
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <PaginationStyled>
      <List>
        <Item disabled={currentPage === 1} onClick={onPrevious}>
          <Icon disabled={currentPage === 1}>
            <use href={`${sprite}#arrow-left`}></use>
          </Icon>
        </Item>
        {paginationRange.map((pageNumber, idx) => {
          if (pageNumber === DOTS) {
            return (
              <Item key={`${idx}-${pageNumber}`} dots={true}>
                &#8230;
              </Item>
            );
          }

          return (
            <Item
              key={`${idx}-${pageNumber}`}
              selected={pageNumber === currentPage}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </Item>
          );
        })}
        <Item disabled={currentPage === lastPage} onClick={onNext}>
          <Icon disabled={currentPage === lastPage}>
            <use href={`${sprite}#arrow-right`}></use>
          </Icon>
        </Item>
      </List>
    </PaginationStyled>
  );
};

export default Pagination;
