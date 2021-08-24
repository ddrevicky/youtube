import styled from '@emotion/styled';

const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.menuBackground};
  font-family: ${(props) => props.theme.font};

  .body {
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
  }

  .content {
    width: 100%;
    background: ${(props) => props.theme.colors.bodyBackground};
    margin-top: ${(props) => props.theme.components.navbar.height};
    margin-left: ${(props) => props.theme.components.sidebarLarge.width};
    padding-top: ${(props) => props.theme.paddings.section};
    padding-left: ${(props) => props.theme.paddings.section};
  }
`;

export { Wrapper };
