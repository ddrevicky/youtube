import { useTheme } from '@emotion/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from '../../../utils';
import { SearchIcon } from './Icons';
import { SearchButton, SearchForm, SearchIconContainer, SearchInput } from './SearchBar.styles';
import TextPopover from './TextPopover';

function SearchBar(props) {
  const [searchQuery, setSearchQuery] = useState('');
  const theme = useTheme();
  const history = useHistory();

  const handleSearchInputChange = (e) => setSearchQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery === '') {
      return;
    }
    history.push(`${routes.results}/${searchQuery}`);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput type="text" placeholder="Search" onChange={handleSearchInputChange} />
      <TextPopover text={'Search'} top="3rem">
        <SearchButton>
          <SearchIconContainer>
            <SearchIcon size={theme.iconSizes.small} />
          </SearchIconContainer>
        </SearchButton>
      </TextPopover>
    </SearchForm>
  );
}

export default SearchBar;
