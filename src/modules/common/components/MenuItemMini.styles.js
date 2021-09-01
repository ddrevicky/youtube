import styled from '@emotion/styled/macro';

const IconContainer = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
`;

const LabelContainer = styled.span`
  font-size: 0.625rem;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.3rem;
  height: ${({ theme }) => theme.components.sidebarMini.width};
`;

const Wrapper = styled.div`
  .selected {
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    background: ${({ theme }) => theme.colors.quaternary};
    &:hover {
      background: ${({ theme }) => theme.colors.tertiary};
    }
    ${IconContainer} {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export { ItemContainer, IconContainer, LabelContainer, Wrapper };
