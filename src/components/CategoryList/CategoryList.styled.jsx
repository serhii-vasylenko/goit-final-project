import styled from '@emotion/styled';

const Categories = styled.ul`
  display: flex;
  align-items: center;
  padding-top: 100px;
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
  color: #bdbdbd;
  font-size: 18px;
  font-weight: 400;
  line-height: 1;
  padding-bottom: 27px;
  text-transform: capitalize;
  transition: color var(--transition-duration) var(--timing-function);

  &:not(:last-child) {
    margin-right: 55px;
  }

  &:hover,
  &:focus {
    color: var(--accent-color);
  }

  &.active::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    display: block;
    width: 100%;
    height: 3px;
    background: var(--accent-color);
  }
`;

const Line = styled.span`
  display: block;
  width: 1240px;
  height: 1px;
  background: #e0e0e0;
`;
export { Categories, Category, Line };
