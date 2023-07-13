import PropTypes from 'prop-types';
import { Button } from './MainButton.styled';

const MainButton = ({
  //пропси за замовчуванням їх не чіпати, але всі ці пропси прописати на свої коли будете додавати компонент
  nameButton = '',
  fontSize = '16px',
  bgColor = '#22252A',
  color = '#FAFAFA',
  border = '1px',
  borderColor = 'transparent',
  borderRadius = '24px 44px',
  cofByMedia768 = { font: 1, padX: 1, padY: 1 },
  cofByMedia1280 = { font: 1, padX: 1, padY: 1 },
  padding = {
    paddingTop: '12px',
    paddingBottom: '12px',
    paddingLeft: '48px',
    paddingRight: '48px',
  },
  hoverStyles = { styleFirst: 'background-color' }, //додати кількість необхідних стилів для ховеру(фокусу), якщо потрібно, тут не міняти
  hoverParams = { paramFirst: '#8BAA36' }, //додати кількість необхідних параметрів для ховеру(фокусу), якщо потрібно, тут не міняти
  focusStyles = { styleFirst: 'outline-color' }, //додати кількість якщо потрібно, тут не міняти
  focusParams = { paramFirst: '#8BAA36' }, //додати кількість  тут не міняти
  fontFamily = 'Poppins',
  ...props
}) => {
  return (
    <Button
      fontSize={fontSize}
      bgColor={bgColor}
      color={color}
      border={border}
      borderColor={borderColor}
      borderRadius={borderRadius}
      cofByMedia768={cofByMedia768}
      cofByMedia1280={cofByMedia1280}
      padding={padding}
      hoverStyles={hoverStyles}
      hoverParams={hoverParams}
      focusStyles={focusStyles}
      focusParams={focusParams}
      fontFamily={fontFamily}
      {...props}
    >
      {nameButton}
    </Button>
  );
};

MainButton.propTypes = {
  nameButton: PropTypes.string,
  fontSize: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.string,
  cofByMedia768: PropTypes.exact({
    font: PropTypes.number,
    padX: PropTypes.number,
    padY: PropTypes.number,
  }),

  cofByMedia1280: PropTypes.exact({
    font: PropTypes.number,
    padX: PropTypes.number,
    padY: PropTypes.number,
  }),
  padding: PropTypes.exact({
    paddingTop: PropTypes.string,
    paddingBottom: PropTypes.string,
    paddingLeft: PropTypes.string,
    paddingRight: PropTypes.string,
  }),
  hoverStyles: PropTypes.object,
  hoverParams: PropTypes.object,
  focusStyles: PropTypes.object,
  focusParam: PropTypes.object,
  fontFamily: PropTypes.string,
};

export default MainButton;
