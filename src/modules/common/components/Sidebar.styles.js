import styled from '@emotion/styled';

const SidebarContainer = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.menuBackground,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: theme.components.sidebarLarge.width,
  position: 'fixed',
  top: theme.components.navbar.height,
}));

const MenuItemContainer = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.menuBackground,
  color: theme.colors.primary,
  fontFamily: theme.font,
  display: 'flex',
}));

export { SidebarContainer, MenuItemContainer };
