import SearchForm from 'components/ReusableComponents/SearchForm/SearchForm';
import { Section } from './SearchBar.styled';

const SearchBar = title => {
  return (
    <Section>
      <SearchForm />
    </Section>
  );
};

export default SearchBar;
