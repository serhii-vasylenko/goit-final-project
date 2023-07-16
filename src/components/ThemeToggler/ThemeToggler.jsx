import { useDispatch, useSelector } from 'react-redux';
import {
  TogglerWrapper,
  Swithcher,
  Label,
  Cyrcle,
} from './ThemeToggler.styled';
import { selectTheme } from 'redux/theme/selectors';
import { setTheme } from 'redux/theme/themeSlice';

const ThemeToggler = () => {
  const dispatch = useDispatch();
  const stateTheme = useSelector(selectTheme);

  const handleToggleTheme = () => {
    const newTheme = stateTheme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
  };

  return (
    <TogglerWrapper>
      <Label mode={stateTheme}>
        <Swithcher
          type="checkbox"
          checked={stateTheme === 'dark'}
          onChange={handleToggleTheme}
        />
        <Cyrcle />
      </Label>
    </TogglerWrapper>
  );
};

export default ThemeToggler;
