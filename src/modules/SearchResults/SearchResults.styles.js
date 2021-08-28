import styled from '@emotion/styled';

const SearchResultsContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.paddings.section};
  max-width: 70rem;
  width: 100%;
`;

export { SearchResultsContainer };
