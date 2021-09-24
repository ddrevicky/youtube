import styled from '@emotion/styled';

const PlayListWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.paddings.section};

  .description-column {
    width: 19rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    h1 {
      font-size: 1.4rem;
    }
  }

  .stats {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 0.9rem;
  }

  .author {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  .video-column {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    flex-grow: 1;
    max-width: 1280px;
  }

  .suggested-videos {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    flex-grow: 0;
    gap: 0.5rem;
  }
`;

export { PlayListWrapper };
