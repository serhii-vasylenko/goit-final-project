import TitlePage from 'components/ReusableComponents/PageTitle/PageTitle';
import SearchBar from 'components/SearchBar/SearchBar';
import SearchCapImage from 'components/SearchCap/SearhCap';

const SearchPage = title => {
  return (
    <>
      <TitlePage title="Search"></TitlePage>
      <SearchBar />
      <SearchCapImage />
    </>
  );
};

export default SearchPage;
