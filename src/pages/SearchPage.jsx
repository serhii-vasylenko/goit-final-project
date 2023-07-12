import { MainEl } from 'components/Main/Main.styled';
import TitlePage from 'components/ReusableComponents/PageTitle/PageTitle';
import SearchBar from 'components/SearchBar/SearchBar';
import SearchedRecipesList from 'components/SearchedRecipesList/SearchedRecipesList'

const SearchPage = title => {
  return (
    <MainEl>
      <TitlePage title="Search"></TitlePage>
      <SearchBar />
      <SearchedRecipesList/>
    </MainEl>
  );
};

export default SearchPage;
