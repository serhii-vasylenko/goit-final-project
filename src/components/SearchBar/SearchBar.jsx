import SearchForm from 'components/ReusableComponents/SearchForm';
import SearchTypeSelector from 'components/SearchTypeSelector';
import { Section } from './SearchBar.styled';

const SearchBar = () => {
  return (
    <Section>
      <SearchForm />
      <SearchTypeSelector />
    </Section>
  );
};

export default SearchBar;
