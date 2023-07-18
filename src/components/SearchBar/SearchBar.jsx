import SearchForm from 'components/ReusableComponents/SearchForm/SearchForm';
import SearchTypeSelector from 'components/SearchTypeSelector/SearchTypeSelector';
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
