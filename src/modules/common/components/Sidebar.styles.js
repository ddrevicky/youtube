import styled from '@emotion/styled';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${({ theme }) => theme.components.sidebarLarge.width};
  position: fixed;
  top: ${({ theme }) => theme.components.navbar.height};
`;

const SectionTitleContainer = styled.h3`
  padding-top: ${({ theme }) => theme.components.menuItem.paddingVertical};
  padding-bottom: ${({ theme }) => theme.components.menuItem.paddingVertical};
  padding-left: ${({ theme }) => theme.components.menuItem.paddingHorizontal};
  padding-right: ${({ theme }) => theme.components.menuItem.paddingHorizontal};
  font-size: ${({ theme }) => theme.components.menuItem.fontSize};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
`;

export { SidebarContainer, SectionTitleContainer };
