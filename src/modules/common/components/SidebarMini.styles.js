import styled from '@emotion/styled';

const SidebarMiniContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  height: 200px;
  min-width: ${({ theme }) => theme.components.sidebarMini.width};
  position: sticky;
  z-index: ${({ theme }) => theme.zIndices.menuOverlay};
  top: ${({ theme }) => theme.components.navbar.height};
`;

export { SidebarMiniContainer };
