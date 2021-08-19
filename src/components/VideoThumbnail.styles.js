import styled from '@emotion/styled';

const Wrapper = styled.div`
  color: ${(props) => props.theme.colors.primary};

  .thumbnail {
    background-color: #181818;
    color: white;
    max-width: 350px;
    height: 320px;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  }

  .videoPreview {
    width: 100%;
    height: 60%;
  }

  .bottomSection {
    font-family: var(--theme-font);
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
