import { useCallback, useEffect, useState } from 'react';
import {
  PaginationStyled,
  NumberButton,
  Icon,
  ArrowButton,
} from './PaginatorSearch.styled';
import sprite from '../../images/sprite.svg';

const Paginator = ({ data, itemsPerPage, currentPage, onPageChange }) => {
  const [visiblePagesCount, setVisiblePagesCount] = useState(10);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const updateVisiblePagesCount = useCallback(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 767) {
      setVisiblePagesCount(6);
    } else {
      setVisiblePagesCount(10);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updateVisiblePagesCount);
    return () => {
      window.removeEventListener('resize', updateVisiblePagesCount);
    };
  }, [updateVisiblePagesCount]);

  const handlePageChange = useCallback(
    pageNumber => {
      if (pageNumber >= 1 && pageNumber <= pageCount) {
        onPageChange(pageNumber);
      }
    },
    [onPageChange, pageCount]
  );

  useEffect(() => {
    if (currentPage > pageCount) {
      onPageChange(1);
    }
  }, [currentPage, pageCount, onPageChange]);

  const renderPaginationItems = () => {
    const paginationItems = [];

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

    if (startPage > 1) {
      paginationItems.push(
        <NumberButton key="ellipsis-left" className="ellipsis-button" disabled>
          ...
        </NumberButton>
      );
    }

    for (let i = startPage; i < endPage; i++) {
      paginationItems.push(
        <NumberButton
          key={i}
          onClick={() => handlePageChange(i)}
          selected={currentPage === i}
        >
          {i}
        </NumberButton>
      );
    }

    if (endPage < pageCount) {
      paginationItems.push(
        <NumberButton key="ellipsis-right" className="ellipsis-button" disabled>
          ...
        </NumberButton>
      );
    }

    paginationItems.push(
      <NumberButton
        key={pageCount}
        onClick={() => handlePageChange(pageCount)}
        selected={currentPage === pageCount}
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
