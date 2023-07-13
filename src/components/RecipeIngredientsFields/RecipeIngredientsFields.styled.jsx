import ReactSelect from 'react-select';
import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  margin-bottom: 100px;
`;

export const Title = styled.h2`
  color: #3e4462;
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.48px;
  margin-bottom: 24px;
`;

export const StyledSelect = styled(ReactSelect)`
  margin-right: 14px;
  &:focus {
    outline: 1px solid rgba(217, 217, 217, 1);
  }

  .custom-select {
    &__control {
      border: none; 
      border-radius: 6px;
      box-shadow: 0px 6.518518447875977px 7.8222222328186035px 0px
        rgba(0, 0, 0, 0.03);
      background-color: rgba(217, 217, 217, 0.157);

   
    }

    &menu-is-open {
      border-radius: 6px;
      background: #fff;
      box-shadow: 0px 6.518518447875977px 7.8222222328186035px 0px
        rgba(0, 0, 0, 0.03);
      font-size: 14px;
    }

    /* &__dropdown-indicator {
      width: 18px;
      fill: var(--accent-color);
    } */

    &__indicator-separator {
      display: none;
    }

    &__indicator {
      cursor: pointer;
      color: #333333;
      opacity: 0.3;
      &:hover,
      &:focus {
        color: var(--accent-color);
        opacity: 1;
      }

      &:active {
        transform: scale(1.01);
      }
      transition: stroke var(--transition-duration) var(--timing-function);
    }
  }
`;

export const Wrap = styled.div`
  display: flex;
`;
