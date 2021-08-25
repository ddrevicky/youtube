import styled from '@emotion/styled';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${(props) => props.theme.components.sidebarLarge.width};
  position: fixed;
  top: ${(props) => props.theme.components.navbar.height};
`;

const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1.5rem;
  &:hover {
    background: ${(props) => props.theme.colors.quaternary};
  }
`;

const MenuItemIconContainer = styled.div`
  margin-right: 1.5rem;
  color: ${(props) => props.theme.colors.secondary};
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const MenuItemLabelContainer = styled.div`
  font-size: 0.875rem;
`;

export { SidebarContainer, MenuItemContainer, MenuItemIconContainer, MenuItemLabelContainer };
