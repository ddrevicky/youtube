import styled from '@emotion/styled';

const Wrapper = styled.div`
  color: ${(props) => props.theme.colors.primary};

  .row {
    font-family: sans-serif;
    display: flex;
    gap: ${(props) => props.theme.paddings.section};
  }

  .videoCol {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .video {
    width: 100%;
    min-width: 270px;
    /* min-width: 300px; */
    /* min-height: 100px; */
    background: rgba(255, 255, 0, 0.15);
    border: 1px solid red;
  }

  .suggestedCol {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    flex-grow: 0;
  }

  .videoPreview {
    width: 150px;
    height: 50px;
    background: rgba(255, 0, 0, 0.15);
    border: 1px solid red;
  }
`;

export { Wrapper };
