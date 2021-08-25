import styled from '@emotion/styled';

const Wrapper = styled.div`
  .thumbnail {
    max-width: 350px;
    height: 320px;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  }

  .bottomSection {
    display: flex;
    gap: 0.9rem;
  }

  .channelAvatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

export { Wrapper };
