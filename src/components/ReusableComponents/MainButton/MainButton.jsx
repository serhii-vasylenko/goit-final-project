import { Button } from './MainButton.styled';

const MainButton = ({
  nameButton = '',
  fontSize = '16px',
  bgColor = '#22252A',
  textColor = '#FAFAFA',
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
  hoverStyles = { styleFirst: 'background-color' },
  hoverParams = { paramFirst: '#8BAA36' },
  focusStyles = { styleFirst: 'outline-color' },
  focusParams = { paramFirst: '#8BAA36' },
  fontFamily = 'Poppins',
  ...props
}) => {
  return (
    <Button
      fontSize={fontSize}
      bgColor={bgColor}
      textColor={textColor}
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

export default MainButton;
