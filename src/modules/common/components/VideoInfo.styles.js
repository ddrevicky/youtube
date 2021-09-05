import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 100%;
  padding-top: 0.1rem;

  .info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .channelNameMeta {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 0.9rem;
    display: flex;
    gap: 0.3rem;
    flex-direction: column;
  }

  .channelName {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      transition: color 0.3s;
    }
  }
`;

export { Wrapper };
