import styled from '@emotion/styled';

export const Container = styled.div`
 position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
    opacity: 0;
    animation: fadeInOut 10s ease-in-out;

    @keyframes fadeInOut {
    0% { opacity: 0; transform: translateY(20px); }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { opacity: 0; transform: translateY(20px); }
  }
`;