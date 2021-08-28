import styled from '@emotion/styled';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.menuBackground};
  font-family: ${({ theme }) => theme.font};

  .body {
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
  }

  .content {
    width: 100%;
    background: ${({ theme }) => theme.colors.bodyBackground};
    margin-top: ${({ theme }) => theme.components.navbar.height};
    margin-left: ${({ theme }) => theme.components.sidebarLarge.width};
    padding-top: ${({ theme }) => theme.paddings.section};
    padding-left: ${({ theme }) => theme.paddings.section};
  }
`;

export { Wrapper };
