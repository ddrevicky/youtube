import styled from '@emotion/styled';

const VideoDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.9rem;
  gap: 1rem;

  /* .description-column {
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
  } */

  .channel-row {
    display: flex;
    gap: 1rem;
    align-items: center;
    width: 100%;
  }

  .channel-info {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    width: 100%;
  }

  .channel-name {
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }

  .channel-subscribers {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 0.8rem;
  }

  .description-text {
    margin-left: 4rem;
    line-height: 1.25rem;
    max-width: 40rem;
  }
`;

export { VideoDescriptionWrapper };
