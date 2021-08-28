import styled from '@emotion/styled';

const SearchResultContainer = styled.div`
  display: flex;
  /* padding-top: ${({ theme }) => theme.paddings.section}; */
  padding-right: ${({ theme }) => theme.paddings.section};
  gap: ${({ theme }) => theme.paddings.section};
  font-size: 0.75rem;

  .videoInfo {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  h3 {
    font-size: 1.15rem;
  }

  .channel {
    color: ${({ theme }) => theme.colors.secondary};
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
    color: ${({ theme }) => theme.colors.secondary};
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export { SearchResultContainer };
