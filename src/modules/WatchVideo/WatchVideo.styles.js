import styled from '@emotion/styled';

const WatchVideoWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.paddings.section};

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

export { WatchVideoWrapper };
