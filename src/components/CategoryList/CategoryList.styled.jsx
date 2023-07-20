import styled from '@emotion/styled';

const Categories = styled.ul`
  display: flex;
  align-items: center;
  padding-top: 95px;
  /* width:100%; */
  flex-wrap: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Category = styled.li`
  position: relative;
  color:  ${({theme }) => theme.colors.categoryListItem};
  font-size: 18px;
  font-weight: 400;
  line-height: 1;
  padding-bottom: 27px;
  text-transform: capitalize;
  transition: color ${({theme }) => theme.transforms.transitionDuration} ${({theme }) => theme.transforms.timingFunction};

  &:not(:last-child) {
    margin-right: 55px;
  }

  &:hover,
  &:focus {
    color: ${({theme }) => theme.colors.accentColor};
  }
  &.active{
      color: ${({theme }) => theme.colors.accentColor};
  }
  &.active::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    display: block;
    width: 100%;
    height: 3px;
    background: ${({theme }) => theme.colors.accentColor};
  }
`;

const Line = styled.span`
  display: block;
  width: 1240px;
  height: 1px;
  background: ${({theme }) => theme.colors.categoryListLine};
`;
export { Categories, Category, Line };
