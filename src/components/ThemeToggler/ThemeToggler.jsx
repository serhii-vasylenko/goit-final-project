import { useDispatch, useSelector } from 'react-redux';
import {
  TogglerWrapper,
  Swithcher,
  Label,
  Cyrcle,
} from './ThemeToggler.styled';
import { selectTheme } from 'redux/theme/selectors';
import { setTheme } from 'redux/theme/themeSlice';

const ThemeToggler = ({nav}) => {
  const dispatch = useDispatch();
  const stateTheme = useSelector(selectTheme);

  const handleToggleTheme = () => {
    const newTheme = stateTheme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
    document.body.classList.toggle('dark')
  };

  return (
    <TogglerWrapper nav={nav}>
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
