import { useEffect, useState } from 'react';
import { StyledPaginator } from './Paginator.styled';

const Paginator = ({ count, page, handleChange }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <StyledPaginator
      count={count}
      color="primary"
      size="small"
      siblingCount={windowWidth > 768 ? 2 : 1}
      page={page}
      onChange={handleChange}
    />
  );
};

export default Paginator;
