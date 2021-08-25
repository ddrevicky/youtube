import styled from '@emotion/styled';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${(props) => props.theme.components.sidebarLarge.width};
  position: fixed;
  top: ${(props) => props.theme.components.navbar.height};
`;

export { SidebarContainer };
