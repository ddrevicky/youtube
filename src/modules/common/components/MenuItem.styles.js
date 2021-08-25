import styled from '@emotion/styled/macro';

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
`;

const MenuItemLabelContainer = styled.div`
  font-size: 0.875rem;
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
