import styled from '@emotion/styled';

const Wrapper = styled.div`
  color: ${(props) => props.theme.colors.primary};

  .info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .videoTitle {
    font-weight: 500;
    line-height: 1.25rem;

    /* TODO: utility class for line clamping */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .channelNameMeta {
    font-size: 0.9rem;
    color: rgb(170, 170, 170);
    display: flex;
    gap: 0.25rem;
    flex-direction: column;
  }

  .channelName {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export { Wrapper };
