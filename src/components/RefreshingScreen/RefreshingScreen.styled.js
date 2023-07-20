import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vw;
  background: ${({ theme }) => theme.colors.backgroundColor};

  img {
    width: 320px;
    height: 296px;
    animation: ${({ theme }) => `rotation 2s ${theme.transforms.timingFunction} infinite`};

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