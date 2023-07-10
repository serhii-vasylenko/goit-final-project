import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const AdviceBox = styled.div`
  position: absolute;
  top: 113px;
  left: 88px;

  width: 225px;
  /* height: 92px; */
  border-radius: 8px;
  padding: 8px;
  background: var(--background-color);

  @media screen and (min-width: 768px) {
    /* width: 378px; */
  }

  @media screen and (min-width: 1280px) {
    /* width: 578px; */
  }
`;

export const AdviceDesc = styled.p`
  margin-bottom: 7px;
  text-align: left;

  color: var(--secondary-text-color);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    /* width: 378px; */
  }

  @media screen and (min-width: 1280px) {
    /* width: 578px; */
  }
`;

export const AdviceDescAccent = styled.span`
  color: var(--accent-color);
`;

export const StyledLink = styled(Link)`
  width: 100%;
  display: inline-flex;
  justify-content: end;
  margin-right: auto;
  gap: 1px;
  /* margin-top: 12px; */
  /* margin-left: 12px; */
  /* padding: 10px 20px; */
  /* background-color: rgb(80, 200, 120); */

  /* justify-content: center; */
  /* align-items: center; */
  /* text-decoration: none; */
  /* text-transform: uppercase; */
  /* color: var(--secondary-text-color); */
  /* text-align: center; */
  /* 
  font-size: 10px;
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.2px; */
  cursor: pointer;
  /* border: 1px solid white; */
  /* transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1); */

  /* &:hover,
  &:focus {
    background-color: white;
    color: rgb(80, 200, 120);
    border: 1px solid rgb(80, 200, 120);
  } */
`;

export const LinkText = styled.span`
  display: inline-flex;

  /* display: inline-flex; */
  /* gap: 4px; */
  /* margin-top: 12px; */
  /* margin-left: 12px; */
  /* padding: 10px 20px; */
  /* background-color: rgb(80, 200, 120); */

  /* justify-content: center; */
  /* align-items: center; */
  /* text-decoration: none; */
  /* text-transform: uppercase; */
  /* color: var(--secondary-text-color); */
  /* text-align: center; */
  /* 
  font-size: 10px;
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.2px; */
  cursor: pointer;
  /* border: 1px solid white; */
  /* transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1); */

  /* &:hover,
  &:focus {
    background-color: white;
    color: rgb(80, 200, 120);
    border: 1px solid rgb(80, 200, 120);
  } */
`;
export const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
    >
      <path
        d="M3.5 9H15.5M15.5 9L11 4.5M15.5 9L11 13.5"
        stroke="#3E4462"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
