import styled from '@emotion/styled/macro';

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 640px;
  margin-left: 40px;
  border: 1px solid #323232;
`;

const SearchInput = styled.input(({ theme }) => ({
  backgroundColor: theme.colors.blackish,
  color: theme.colors.secondary,
  border: 'none',
  padding: '0.4rem 0.8rem',
  lineHeight: '24px',
  fontSize: '1.1rem',
  fontFamily: theme.font,
  flexGrow: 1,
  flexShrink: 1,
  width: '100%',
}));

const SearchIconContainer = styled.div`
  color: ${({ theme }) => theme.colors.tertiary};
`;

const SearchButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.quinary};
  width: 75px;
  height: 100%;
  border: none;
  padding: 0.44rem 0;

  &:hover ${SearchIconContainer} {
    color: ${({ theme }) => theme.colors.primary};
    transition: color 0.2s ease-out;
  }
`;

export { SearchForm, SearchInput, SearchButton, SearchIconContainer };
