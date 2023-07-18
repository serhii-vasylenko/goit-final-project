import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vw;
  background: var(--background-color);

  img {
    width: 320px;
    height: 296px;
    animation: rotation 2s var(--timing-function) infinite;

    @media screen and (min-width: 768px) {
      width: 378px;
      height: 351px;
    }

    @media screen and (min-width: 1280px) {
      width: 578px;
      height: 539px;
    }
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;