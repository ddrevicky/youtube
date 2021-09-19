import styled from '@emotion/styled';

const VideoDescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .avatar-description {
    display: flex;
    gap: 1rem;
  }

  .description-column {
    display: flex;
    flex-direction: column;
    max-width: 40rem;
    font-size: 0.9rem;
  }

  .channel-name {
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }

  .channel-subscribers {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 0.8rem;
    margin-top: 0.3rem;
    margin-bottom: 1rem;
  }

  .description-text {
    line-height: 1.25rem;
  }
`;

export { VideoDescriptionWrapper };
