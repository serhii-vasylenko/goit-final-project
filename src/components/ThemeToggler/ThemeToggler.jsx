import { useDispatch, useSelector } from 'react-redux';
import {
  TogglerWrapper,
  Switcher,
  Label,
  Circle,
} from './ThemeToggler.styled';
import { selectTheme } from 'redux/theme/selectors';
import { setTheme } from 'redux/theme/themeSlice';

const ThemeToggler = ({nav}) => {
  const dispatch = useDispatch();
  const stateTheme = useSelector(selectTheme);

  const handleToggleTheme = () => {
    const newTheme = stateTheme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
    //document.body.classList.toggle('dark')
    stateTheme === 'light' ? document.body.classList.remove('dark') : document.body.classList.add('dark')
  };

  return (
    <TogglerWrapper nav={nav}>
      <Label mode={stateTheme}>
        <Switcher
          type="checkbox"
          checked={stateTheme === 'dark'}
          onChange={handleToggleTheme}
        />
        <Circle />
      </Label>
    </TogglerWrapper>
  );
};

export default ThemeToggler;
