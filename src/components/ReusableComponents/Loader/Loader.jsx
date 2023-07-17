import { LoaderWrapper, StyledLoader } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <StyledLoader height={70} width={70} visible={true} />
    </LoaderWrapper>
  );
};

export default Loader;
