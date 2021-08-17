import styled from '@emotion/styled';

const Wrapper = styled.div`
  .app {
    background: ${(props) => props.theme.colors.menuBackground};
  }

  .body {
    height: 100vh;
    display: flex;
    flex-direction: row;
  }

  .content {
    background: ${(props) => props.theme.colors.bodyBackground};
    width: 100%;
    padding-top: ${(props) => props.theme.paddings.section};
    padding-left: ${(props) => props.theme.paddings.section};
  }
`;

export { Wrapper };
