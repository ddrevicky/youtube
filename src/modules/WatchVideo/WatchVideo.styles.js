import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.paddings.section};

  .video-column {
    display: flex;
    flex-direction: column;
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

const VideoInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: ${({ theme }) => theme.paddings.section};

  .video-title {
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }

  .meta-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .meta {
    font-size: 0.9rem;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 1.45rem;
  }
`;

const VideoInfoMenuItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  text-transform: uppercase;
  font-size: 0.9rem;
  cursor: pointer;
`;

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

export { Wrapper, VideoInfoWrapper, VideoInfoMenuItemWrapper, VideoDescriptionWrapper };
