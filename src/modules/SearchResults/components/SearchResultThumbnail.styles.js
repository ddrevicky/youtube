import styled from '@emotion/styled';

const SearchResultContainer = styled.div`
  display: flex;
  /* padding-top: ${({ theme }) => theme.paddings.section}; */
  padding-right: ${({ theme }) => theme.paddings.section};
  gap: ${({ theme }) => theme.paddings.section};
  font-size: 0.75rem;

  .search-flex-col {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .info {
    color: ${({ theme }) => theme.colors.secondary};
  }

  h3 {
    font-size: 1.15rem;
  }

  .channel {
    display: flex;
    width: auto;
    align-items: center;
    gap: 0.5rem;
  }

  .channelName {
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      transition: color 0.3s;
    }
  }

  /* TODO: utility class for line clamping */
  .description {
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export { SearchResultContainer };
