import styled from '@emotion/styled';

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

const VideoInfoActionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  text-transform: uppercase;
  font-size: 0.9rem;
  cursor: pointer;

  .inactive-icon {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;

export { VideoInfoWrapper, VideoInfoActionWrapper };
