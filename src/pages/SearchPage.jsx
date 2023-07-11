import { MainEl } from 'components/Main/Main.styled';
import TitlePage from 'components/ReusableComponents/PageTitle/PageTitle';
import SearchBar from 'components/SearchBar/SearchBar';
import SearchedRecipesList from 'components/SearchedRecipesList/SearchedRecipesList'
import SearchCapImage from 'components/SearchCap/SearhCap';

const SearchPage = title => {
  return (
    <MainEl>
      <TitlePage title="Search"></TitlePage>
      <SearchBar />
      <SearchedRecipesList/>
      <SearchCapImage />
    </MainEl>
  );
};

export default SearchPage;
