import styled from '@emotion/styled/macro';

const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;

  padding-top: ${({ theme }) => theme.components.menuItem.paddingVertical};
  padding-bottom: ${({ theme }) => theme.components.menuItem.paddingVertical};
  padding-left: ${({ theme }) => theme.components.menuItem.paddingHorizontal};
  padding-right: ${({ theme }) => theme.components.menuItem.paddingHorizontal};

  &:hover {
    background: ${({ theme }) => theme.colors.quaternary};
  }
`;

const MenuItemIconContainer = styled.div`
  margin-right: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
`;

const MenuItemLabelContainer = styled.div`
  font-size: ${({ theme }) => theme.components.menuItem.fontSize};

  /* TODO: utility class for line clamping */
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Wrapper = styled.div`
  .selected {
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    background: ${({ theme }) => theme.colors.quaternary};
    &:hover {
      background: ${({ theme }) => theme.colors.tertiary};
    }
    ${MenuItemIconContainer} {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export { MenuItemContainer, MenuItemIconContainer, MenuItemLabelContainer, Wrapper };
