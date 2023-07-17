import { useState, useEffect } from 'react';

function usePagination(data, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleData, setVisibleData] = useState([]);

  const count = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    setVisibleData(data.slice(begin, end));
  }, [data, currentPage, itemsPerPage]);

  function next() {
    setCurrentPage(currentPage => Math.min(currentPage + 1, count));
  }

  function prev() {
    setCurrentPage(currentPage => Math.max(currentPage - 1, count));
  }

  function jump(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage(currentPage => Math.min(pageNumber, count));
  }

  return { next, prev, jump, currentData: visibleData, count };
}

export default usePagination;
