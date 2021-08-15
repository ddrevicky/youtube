import styled from '@emotion/styled';

const SidebarContainer = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.menuBackground,
  display: 'flex',
  flexDirection: 'column',
  height: '800px',
  width: '240px',
}));

const MenuItemContainer = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.menuBackground,
  color: theme.colors.primary,
  fontFamily: theme.font,
  display: 'flex',
}));

export { SidebarContainer, MenuItemContainer };
