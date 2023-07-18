import { useCallback } from 'react';
import {
  PaginationStyled,
  NumberButton,
  Icon,
  ArrowButton,
} from './PaginatorSearch.styled';
import sprite from '../../images/sprite.svg';

const Paginator = ({ data, itemsPerPage, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = useCallback(
    pageNumber => {
      if (pageNumber >= 1 && pageNumber <= pageCount) {
        onPageChange(pageNumber);
      }
    },
    [onPageChange, pageCount]
  );

  const renderPaginationItems = () => {
    const paginationItems = [];

    const visiblePagesCount = 10;
    let startPage;
    let endPage;

    if (pageCount <= visiblePagesCount) {
      startPage = 1;
      endPage = pageCount;
    } else {
      const pagesBeforeAndAfter = Math.floor((visiblePagesCount - 2) / 2);
      startPage = Math.max(currentPage - pagesBeforeAndAfter, 1);
      endPage = startPage + visiblePagesCount - 3;

      if (endPage > pageCount) {
        endPage = pageCount;
        startPage = endPage - visiblePagesCount + 3;
      }
    }

    paginationItems.push(
      <NumberButton
        key={1}
        onClick={() => handlePageChange(1)}
        className={currentPage === 1 ? 'active' : ''}
      >
        1
      </NumberButton>
    );

    if (startPage > 2) {
      paginationItems.push(
        <NumberButton key="ellipsis-left" disabled>
          ...
        </NumberButton>
      );
    }

    for (let i = startPage + 1; i < endPage; i++) {
      paginationItems.push(
        <NumberButton
          key={i}
          onClick={() => handlePageChange(i)}
          className={currentPage === i ? 'active' : ''}
        >
          {i}
        </NumberButton>
      );
    }

    if (endPage < pageCount) {
      paginationItems.push(
        <NumberButton key="ellipsis-right" disabled>
          ...
        </NumberButton>
      );
    }

    paginationItems.push(
      <NumberButton
        key={pageCount}
        onClick={() => handlePageChange(pageCount)}
        className={currentPage === pageCount ? 'active' : ''}
      >
        {pageCount}
      </NumberButton>
    );

    return paginationItems;
  };

  return (
    <PaginationStyled>
      <ArrowButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Icon disabled={currentPage === 1}>
          <use href={`${sprite}#arrow-left`}></use>
        </Icon>
      </ArrowButton>
      {renderPaginationItems()}
      <ArrowButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === pageCount}
      >
        <Icon disabled={currentPage === pageCount}>
          <use href={`${sprite}#arrow-right`}></use>
        </Icon>
      </ArrowButton>
    </PaginationStyled>
  );
};

export default Paginator;
