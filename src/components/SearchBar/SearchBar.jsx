import { useSearchParams } from 'react-router-dom';

import SearchForm from 'components/ReusableComponents/SearchForm/SearchForm';
import SearchTypeSelector from 'components/SearchTypeSelector/SearchTypeSelector';

import { Section } from './SearchBar.styled';


const SearchBar = () => {
  const [searchParams] = useSearchParams();
  console.log('searchParams :>> ', searchParams.get('query'));

  return (
    <Section>
      <SearchForm />
      <SearchTypeSelector/>
    </Section>
  );
};

export default SearchBar;
