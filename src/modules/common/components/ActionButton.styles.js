import styled from '@emotion/styled';

const ActionButtonWrapper = styled.div`
  display: flex;

  button {
    cursor: pointer;
    border: none;
    border-radius: 2px;
    color: ${({ theme }) => theme.colors.primary};
    background-color: #c00;
    padding: 0.6rem 1rem;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: 0.9rem;
  }

  .pressed {
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.quinary};
  }
`;
export { ActionButtonWrapper };
