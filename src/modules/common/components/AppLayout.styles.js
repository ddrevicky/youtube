import styled from '@emotion/styled';

const Wrapper = styled.div`
  .app {
    background: ${(props) => props.theme.colors.menuBackground};
  }

  .body {
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
  }

  .content {
    background: ${(props) => props.theme.colors.bodyBackground};
    margin-top: ${(props) => props.theme.components.navbar.height};
    margin-left: ${(props) => props.theme.components.sidebarLarge.width};
    width: 100%;
    padding-top: ${(props) => props.theme.paddings.section};
    padding-left: ${(props) => props.theme.paddings.section};
  }
`;

export { Wrapper };
