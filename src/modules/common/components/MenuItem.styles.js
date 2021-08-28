import styled from '@emotion/styled/macro';

const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;

  padding-top: ${(props) => props.theme.components.menuItem.paddingVertical};
  padding-bottom: ${(props) => props.theme.components.menuItem.paddingVertical};
  padding-left: ${(props) => props.theme.components.menuItem.paddingHorizontal};
  padding-right: ${(props) => props.theme.components.menuItem.paddingHorizontal};

  &:hover {
    background: ${(props) => props.theme.colors.quaternary};
  }
`;

const MenuItemIconContainer = styled.div`
  margin-right: 1.5rem;
  color: ${(props) => props.theme.colors.secondary};
`;

const MenuItemLabelContainer = styled.div`
  font-size: ${(props) => props.theme.components.menuItem.fontSize};

  /* TODO: utility class for line clamping */
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Wrapper = styled.div`
  .selected {
    font-weight: ${(props) => props.theme.fontWeights.medium};
    background: ${(props) => props.theme.colors.quaternary};
    &:hover {
      background: ${(props) => props.theme.colors.tertiary};
    }
    ${MenuItemIconContainer} {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export { MenuItemContainer, MenuItemIconContainer, MenuItemLabelContainer, Wrapper };
