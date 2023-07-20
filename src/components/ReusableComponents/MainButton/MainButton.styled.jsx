import styled from '@emotion/styled';

export const Button = styled.button`
  font-size: ${props => props.fontSize};
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
  border: ${props => props.border};
  border-color: ${props => props.borderColor};
  border-radius: ${props => props.borderRadius};
  padding-top: ${props => props.padding.paddingTop};
  padding-bottom: ${props => props.padding.paddingBottom};
  padding-left: ${props => props.padding.paddingLeft};
  padding-right: ${props => props.padding.paddingRight};
  font-family: ${props => props.fontFamily};
  cursor: pointer;
  
  &:hover {
    ${props => props.hoverStyles.styleFirst} : ${props =>
      props.hoverParams.paramFirst};
       ${props => props.hoverStyles.styleSecond} : ${props =>
      props.hoverParams.paramSecond};
       ${props => props.hoverStyles.styleThird} : ${props =>
      props.hoverParams.paramThird};
  }

  &:focus {
    ${props => props.focusStyles.styleFirst}: ${props =>
      props.focusParams.paramFirst};
     ${props => props.hoverStyles.styleSecond} : ${props =>
      props.hoverParams.paramSecond};
       ${props => props.hoverStyles.styleThird} : ${props =>
      props.hoverParams.paramThird};
  }

  &:active {
    transform: scale(1.01);
  }

  transition: ${props => props.hoverStyles.styleFirst}
    var(--transition-duration) var(--timing-function);

  @media screen and (min-width: 768px) {
    font-size: calc(
      ${props => props.fontSize}*${props => props.cofByMedia768.font}
    );
    padding-top: calc(
      ${props => props.padding.paddingTop}*${props => props.cofByMedia768.padX}
    );
    padding-bottom: calc(
      ${props => props.padding.paddingBottom}*${props => props.cofByMedia768.padX}
    );
    padding-left: calc(
      ${props => props.padding.paddingLeft}*${props => props.cofByMedia768.padY}
    );
    padding-right: calc(
      ${props => props.padding.paddingRight}*${props => props.cofByMedia768.padY}
    );
  }

  @media screen and (min-width: 1280px) {
    font-size: calc(
      ${props => props.fontSize}*${props => props.cofByMedia1280.font}
    );
    padding-top: calc(
      ${props => props.padding.paddingTop}*${props => props.cofByMedia1280.padX}
    );
    padding-bottom: calc(
      ${props => props.padding.paddingBottom}*${props => props.cofByMedia1280.padX}
    );
    padding-left: calc(
      ${props => props.padding.paddingLeft}*${props => props.cofByMedia1280.padY}
    );
    padding-right: calc(
      ${props => props.padding.paddingRight}*${props => props.cofByMedia1280.padY}
    );
  }
`;
